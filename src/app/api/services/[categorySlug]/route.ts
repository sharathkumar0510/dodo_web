import { NextRequest, NextResponse } from 'next/server';
import { getServiceCategoryBySlug } from '@/lib/mock-data/services';

// GET /api/services/[categorySlug] - Get a specific service category
export async function GET(
  request: NextRequest,
  { params }: { params: { categorySlug: string } }
) {
  const category = getServiceCategoryBySlug(params.categorySlug);
  
  if (!category) {
    return NextResponse.json(
      { success: false, message: 'Category not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json({ success: true, data: category });
}
