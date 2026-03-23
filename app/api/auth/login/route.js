import { NextResponse } from 'next/server';
import crypto from 'crypto';

const ADMIN_EMAIL = 'admin@binaryandbeyondresearch.com';
const ADMIN_PASSWORD = '123456';
const SESSION_SECRET = process.env.SESSION_SECRET ?? 'bbr-admin-secret-2024-change-in-prod';
const SESSION_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

/**
 * Constant-time string comparison to prevent timing attacks.
 * Handles strings of different lengths safely.
 */
function safeCompare(a, b) {
  const bufA = Buffer.from(String(a));
  const bufB = Buffer.from(String(b));
  if (bufA.length !== bufB.length) {
    // Run a dummy comparison to avoid timing leak from early exit
    crypto.timingSafeEqual(Buffer.alloc(32), Buffer.alloc(32));
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

function createSessionToken(email) {
  const expiry = Date.now() + SESSION_DURATION_MS;
  const payload = `${email}:${expiry}`;
  const signature = crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(payload)
    .digest('hex');
  return Buffer.from(`${payload}.${signature}`).toString('base64');
}

export async function POST(request) {
  try {
    const body = await request.json();
    const email = (body.email ?? '').toLowerCase().trim();
    const password = body.password ?? '';

    const emailValid = safeCompare(email, ADMIN_EMAIL);
    const passValid = safeCompare(password, ADMIN_PASSWORD);

    if (!emailValid || !passValid) {
      return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
    }

    const token = createSessionToken(ADMIN_EMAIL);
    const response = NextResponse.json({ success: true });

    response.cookies.set('admin_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60, // 24 hours in seconds
      path: '/',
    });

    return response;
  } catch {
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
