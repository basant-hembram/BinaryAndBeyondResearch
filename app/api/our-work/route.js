import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import OurWork from '@/models/OurWork';

export async function GET() {
  try {
    await connectDB();
    const items = await OurWork.find({}).sort({ order: 1, createdAt: 1 }).lean();
    return NextResponse.json({ success: true, data: items });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const item = await OurWork.create(body);
    return NextResponse.json({ success: true, data: item }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
