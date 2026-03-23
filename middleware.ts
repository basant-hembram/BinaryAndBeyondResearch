import { NextRequest, NextResponse } from 'next/server';

const SESSION_SECRET = process.env.SESSION_SECRET ?? 'bbr-admin-secret-2024-change-in-prod';

function hexToUint8Array(hex: string): Uint8Array {
  const buf = new ArrayBuffer(hex.length / 2);
  const bytes = new Uint8Array(buf);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16);
  }
  return bytes;
}

async function verifySessionToken(token: string): Promise<boolean> {
  try {
    const decoded = atob(token);
    const lastDot = decoded.lastIndexOf('.');
    if (lastDot === -1) return false;

    const payload = decoded.substring(0, lastDot);
    const signatureHex = decoded.substring(lastDot + 1);

    // Import HMAC key using Web Crypto API (Edge Runtime compatible)
    const key = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(SESSION_SECRET),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );

    const signatureBytes = hexToUint8Array(signatureHex);
    const valid = await crypto.subtle.verify(
      'HMAC',
      key,
      signatureBytes.buffer as ArrayBuffer,
      new TextEncoder().encode(payload)
    );

    if (!valid) return false;

    // Verify expiry: payload format is "email:expiry"
    const colonIdx = payload.lastIndexOf(':');
    if (colonIdx === -1) return false;
    const expiry = parseInt(payload.substring(colonIdx + 1), 10);
    return !isNaN(expiry) && Date.now() <= expiry;
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect all /admin routes except the login page itself
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const sessionToken = request.cookies.get('admin_session')?.value;

    if (!sessionToken || !(await verifySessionToken(sessionToken))) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Redirect already-authenticated users away from the login page
  if (pathname === '/admin/login') {
    const sessionToken = request.cookies.get('admin_session')?.value;
    if (sessionToken && (await verifySessionToken(sessionToken))) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
