# DoDoServices - Home Services Booking Platform

DoDoServices is a comprehensive e-commerce platform for booking home services, similar to Urban Company. The platform allows users to browse, book, and manage various home services including cleaning, repairs, salon services, and more.

## Features

- **Service Browsing**: Browse through various service categories and individual services
- **Booking Management**: View, track, reschedule, and cancel bookings
- **Add-on Services**: Add extra services to your bookings
- **Notes & Instructions**: Add special instructions for service providers
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **SEO Optimized**: Built with SEO best practices in mind

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **API**: Mock API (to be replaced with Django REST API)
- **Database**: PostgreSQL (planned)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sharathkumar0510/dodo-services.git
   cd dodo-services
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `src/app/`: Next.js app router pages
- `src/components/`: Reusable UI components
- `src/context/`: React context providers
- `src/lib/`: Utility functions and API clients
- `src/types/`: TypeScript type definitions
- `public/`: Static assets

## Future Enhancements

- Integration with Django REST API backend
- User authentication and profiles
- Payment gateway integration
- Service provider profiles and ratings
- Real-time booking updates
- Admin dashboard

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from Urban Company
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
