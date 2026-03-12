import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import PanelService from '@/models/PanelService';

export async function GET() {
  try {
    await connectDB();
    const items = await PanelService.find({}).sort({ createdAt: 1 }).lean();
    return NextResponse.json({ success: true, data: items });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const item = await PanelService.create(body);
    return NextResponse.json({ success: true, data: item }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
