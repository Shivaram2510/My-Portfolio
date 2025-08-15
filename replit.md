# Overview

This is a modern full-stack portfolio application built with React, TypeScript, and Express.js. The project showcases a developer's skills, experience, and projects through an interactive, responsive web interface. It features a clean, modern design with dark/light theme support, smooth scrolling navigation, and a contact form for potential client inquiries.

The application is structured as a monorepo with a React frontend, Express.js backend, and shared TypeScript schemas for type safety across the full stack.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **State Management**: TanStack Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Theme System**: Custom theme provider supporting dark/light mode with localStorage persistence
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful endpoints for contact form submissions and resume downloads
- **Development Setup**: Hot module replacement (HMR) integration with Vite in development mode
- **Error Handling**: Centralized error handling middleware with structured error responses

## Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe database interactions
- **Database Provider**: Neon Database (serverless PostgreSQL) for scalable cloud hosting
- **In-Memory Storage**: Fallback MemStorage class for development/testing scenarios
- **Session Management**: PostgreSQL session store using connect-pg-simple

## Authentication and Authorization
- **Current State**: Basic user schema defined but not fully implemented
- **Planned Features**: User authentication system with session-based auth
- **Security**: Session storage in PostgreSQL for production security

## External Dependencies

### UI and Design
- **shadcn/ui**: Comprehensive React component library built on Radix UI primitives
- **Radix UI**: Headless, accessible UI components for complex interactions
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Lucide React**: Modern icon library for consistent iconography

### Development and Build Tools
- **Vite**: Fast build tool with HMR support and optimized production builds
- **TypeScript**: Static typing across the entire application stack
- **ESBuild**: Fast JavaScript/TypeScript bundler for server-side code

### Backend Services
- **Neon Database**: Serverless PostgreSQL database with connection pooling
- **Drizzle Kit**: Database migration and schema management tooling

### Form and Data Handling
- **React Hook Form**: Performant form library with validation support
- **Zod**: TypeScript-first schema validation for runtime type checking
- **TanStack Query**: Data fetching and caching layer for API interactions

### Deployment and Hosting
- **Replit Integration**: Native support for Replit development environment
- **Environment Variables**: Database URL and other configurations via environment variables
- **Static Assets**: Optimized asset serving through Vite's build pipeline

The application follows modern full-stack development practices with a focus on type safety, performance, and developer experience. The architecture supports easy scaling and maintenance while providing a solid foundation for additional features like user authentication, blog functionality, or e-commerce capabilities.