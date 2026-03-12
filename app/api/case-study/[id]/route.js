import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import CaseStudy from '@/models/CaseStudy';

export async function GET(request, { params }) {
  try {
    await connectDB();
    const item = await CaseStudy.findById(params.id).lean();
    if (!item) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: item });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const body = await request.json();
    const item = await CaseStudy.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });
    if (!item) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: item });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const item = await CaseStudy.findByIdAndDelete(params.id);
    if (!item) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, message: 'Deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
