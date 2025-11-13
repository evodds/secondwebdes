# Second Web Design - Replit Project

## Overview
This is a static website starter template created from an empty GitHub repository. The project provides a clean, modern foundation for web design projects with a simple Node.js server to serve static files.

## Project Architecture

### Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Server**: Node.js 20 (simple HTTP server)
- **Deployment**: Configured for Replit autoscale deployment

### File Structure
```
.
├── index.html      # Main HTML page with starter content
├── style.css       # Responsive stylesheet with modern design
├── script.js       # Client-side JavaScript with animations
├── server.js       # Static file server on port 5000
├── .gitignore      # Git ignore file for Node.js projects
└── README.md       # Project documentation
```

## Recent Changes
- **2024-11-13**: Initial setup from empty GitHub repository
  - Created starter HTML template with modern design
  - Added responsive CSS with gradient backgrounds
  - Implemented smooth animations in JavaScript
  - Set up Node.js static file server on port 5000 (0.0.0.0)
  - Configured workflow for webview on port 5000
  - Added deployment configuration for autoscale
  - Server includes cache-control headers to prevent caching issues in Replit iframe

## Server Configuration
- **Host**: 0.0.0.0 (required for Replit preview)
- **Port**: 5000 (frontend server)
- **Cache Control**: Disabled to ensure latest changes are visible
- **MIME Types**: Properly configured for all common web file types

## Development Notes
- The server automatically serves index.html for the root path
- All responses include cache-control headers to prevent browser caching
- The project is designed to work seamlessly with Replit's iframe preview system

## Deployment
Project is configured for autoscale deployment using the deploy configuration tool. Simply click the deploy button when ready to publish.
