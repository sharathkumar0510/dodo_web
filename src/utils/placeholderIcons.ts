// This utility generates placeholder SVG icons for development purposes
// In production, these would be replaced with actual icons

export const generatePlaceholderIcon = (name: string, color: string = '#000000'): string => {
  // Get the first letter of each word
  const initials = name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .substring(0, 2);

  // Create a simple SVG with the initials
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" fill="${color}" /><text x="50" y="50" font-family="Arial" font-size="40" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="central">${initials}</text></svg>`;

  // Convert to a data URL - use Buffer in Node.js environment
  if (typeof window === 'undefined') {
    return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
  }

  // Use btoa in browser environment
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

// Generate placeholder icons for our service categories
export const placeholderIcons: Record<string, string> = {
  'womens-salon-spa': '/icons/women-salon.svg',
  'mens-salon-massage': '/icons/men-salon.svg',
  'ac-appliance-repair': '/icons/ac-repair.svg',
  'cleaning-pest-control': '/icons/cleaning.svg',
  'electrician-plumber-carpenter': '/icons/electrician.svg',

  // Service icons
  'facial': '/icons/facial.svg',
  'waxing': '/icons/waxing.svg',
  'haircut-styling': '/icons/haircut.svg',
  'massage': '/icons/massage.svg',
  'ac-service-repair': '/icons/ac.svg',
  'bathroom-cleaning': '/icons/bathroom.svg',
  'pest-control': '/icons/pest.svg',
  'electrician': '/icons/electrician-service.svg',
  'plumber': '/icons/plumber.svg',
};
