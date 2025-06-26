# Innovator Nexus - Digital Services Company

## Overview

This is a full-stack web application for Innovator Nexus, a digital services company specializing in social media management, content creation, business strategy, and graphic design. The application serves as both a marketing website and a business portal with job application and contact form functionality.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server components:

- **Frontend**: React-based single-page application with TypeScript
- **Backend**: Express.js server with RESTful API endpoints
- **Database**: PostgreSQL with Drizzle ORM for data modeling
- **Build System**: Vite for frontend bundling and development
- **Deployment**: Replit-optimized with autoscale deployment target

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Wouter for routing
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and responsive design
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Component Structure**: Modular components with clear separation of concerns

### Backend Architecture
- **Server**: Express.js with TypeScript
- **API Design**: RESTful endpoints for job applications and contact messages
- **Database Layer**: Drizzle ORM with schema-first approach
- **Validation**: Zod schemas for request/response validation
- **Storage Abstraction**: Interface-based storage layer with memory implementation

### Database Schema
- **Users**: Basic user authentication structure
- **Job Applications**: Comprehensive job application data with file handling
- **Contact Messages**: Business inquiry and contact form submissions
- **Timestamps**: Automatic creation timestamps for audit trails

## Data Flow

1. **Client Requests**: React components make API calls through TanStack Query
2. **Server Processing**: Express routes validate input using Zod schemas
3. **Data Storage**: Drizzle ORM handles database operations with type safety
4. **Response Handling**: Structured JSON responses with proper error handling
5. **UI Updates**: Real-time feedback through toast notifications and form states

## External Dependencies

### Core Technologies
- **Database**: PostgreSQL (configured for Neon serverless)
- **UI Components**: Radix UI for accessible component primitives
- **Fonts**: Google Fonts (Inter and Poppins) for typography
- **Icons**: Lucide React for consistent iconography

### Development Tools
- **Build**: Vite with React plugin and TypeScript support
- **Linting**: TypeScript compiler for type checking
- **Development**: Hot module replacement and runtime error overlay

## Deployment Strategy

The application is configured for Replit deployment with the following setup:

- **Environment**: Node.js 20 with PostgreSQL 16
- **Build Process**: Vite builds frontend assets, esbuild bundles server code
- **Development**: Single command (`npm run dev`) starts both client and server
- **Production**: Optimized builds with static asset serving
- **Port Configuration**: Server runs on port 5000, mapped to external port 80

The deployment uses autoscale configuration for handling traffic variations, with proper build and start commands defined for production deployment.

## Recent Changes

- June 26, 2025: Updated content and spacing for startup company status
  - Updated company information to reflect newly founded status (2024)
  - Adjusted statistics and testimonials for realistic startup metrics
  - Reduced section padding from py-32 to py-20/py-16 for better desktop spacing
  - Modified hero section height from full screen to 80vh for better proportions
  - Updated language throughout site to emphasize fresh perspective and innovation

- June 26, 2025: Enhanced website with new pages and improved navigation
  - Added About Us page with company mission, values, and why choose us sections
  - Created dedicated Services page with large icons and newsletter subscription
  - Added Articles page with search, filtering, and featured articles
  - Updated navigation with hamburger menu positioned on left side
  - Replaced service section images with large, colorful icons for better visual appeal
  - Improved responsive design and user experience across all pages
  - Fixed scroll animation issues in Articles page

- June 25, 2025: Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.