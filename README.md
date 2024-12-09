# Video Carousel

A React-based web application for Cozey furniture, featuring a video carousel showcase, newsletter signup, and responsive navigation.

## Tech Stack

- React + TypeScript
- Tailwind CSS
- Embla Carousel
- ShadcnUI Components

## Features

- Video Carousel with autoplay and controls
- Responsive navigation with mobile support

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```
src/
├── components/       # Reusable UI components
├── layouts/         # Layout components
├── constants/       # Application constants
├── lib/            # Utility functions
└── assets/         # Static assets (SVGs)
```

## Key Components

- `VideoCarousel`: The carousel implementation leverages Embla Carousel API to provide a seamless video browsing experience. Embla was chosen for its robust touch interactions, built-in autoplay functionality, and efficient slide management. This allows for smooth mobile navigation, custom control integration, and optimized video playback without compromising performance across different browsers.

## Design Decisions

### Component Architecture

- Modular components for reusability and maintainability
- Separation of concerns with dedicated components for video, navigation, and newsletter
- Mobile-first approach for responsive design

### Technology Choices

- TypeScript for type safety and better developer experience
- Tailwind for rapid styling and consistent design system
- ShadcnUI for accessible, pre-built components
- Embla Carousel for smooth, touch-friendly video navigation

### Performance Considerations

- Lazy loading of video content
- Mobile-optimized navigation for the Carousel
- Showing Skeleton UI while loading the videos

### Note

The current implementation serves videos directly from the public directory for development and testing purposes only. This is not recommended for production environments as it can lead to performance issues, especially when deployed on platforms like Railway where all video requests must be processed through the main server.

### Deployment

I deployed the app to Railway for testing purposes : https://carouselproject-production.up.railway.app/.

While the application runs smoothly locally, the deployed version experiences video playback lag due to videos being served directly from Railway's server. This setup requires all video requests to be processed through the main server, creating performance bottlenecks. For production environments, videos should be hosted on specialized services like AWS S3 or Cloudinary that provide optimized content delivery.
