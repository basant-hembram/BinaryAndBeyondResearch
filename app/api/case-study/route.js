import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import CaseStudy from '@/models/CaseStudy';

export async function GET() {
  try {
    await connectDB();
    const items = await CaseStudy.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, data: items });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const item = await CaseStudy.create(body);
    return NextResponse.json({ success: true, data: item }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
