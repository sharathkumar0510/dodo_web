import { NextResponse } from 'next/server';
import { serviceCategories } from '@/lib/mock-data/services';

// GET /api/services - Get all service categories
export async function GET() {
  return NextResponse.json({ 
    success: true, 
    data: serviceCategories 
  });
}
