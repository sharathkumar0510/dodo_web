import { NextRequest, NextResponse } from 'next/server';
import { getServiceBySlug } from '@/lib/mock-data/services';
import { getReviewsByServiceId } from '@/lib/mock-data/reviews';
import { getProfessionalsByServiceId } from '@/lib/mock-data/professionals';

// GET /api/services/[categorySlug]/[serviceSlug] - Get a specific service with reviews and professionals
export async function GET(
  request: NextRequest,
  { params }: { params: { categorySlug: string; serviceSlug: string } }
) {
  const service = getServiceBySlug(params.serviceSlug);
  
  if (!service) {
    return NextResponse.json(
      { success: false, message: 'Service not found' },
      { status: 404 }
    );
  }
  
  // Get reviews and professionals for this service
  const reviews = getReviewsByServiceId(service.id);
  const professionals = getProfessionalsByServiceId(service.id);
  
  return NextResponse.json({ 
    success: true, 
    data: {
      service,
      reviews,
      professionals
    } 
  });
}
