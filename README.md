# Vortex AI - Complete AI Platform

A full-stack AI platform built with Node.js, React, and MongoDB. Featuring AI chat, image generation, web search, and comprehensive admin panel.

## Features

- **AI Chat**: Multiple AI models (GPT-4, Claude, Gemini)
- **Image Generation**: Stable Diffusion XL integration
- **Web Search**: Real-time search integration with Brave & Google
- **User Management**: Admin panel for user and plan management
- **Subscription System**: Multiple pricing tiers with payment verification
- **Real-time Communication**: Socket.io for live updates
- **Security**: JWT authentication, rate limiting, input validation
- **Responsive Design**: Full mobile support with Tailwind CSS

## Tech Stack

### Backend
- Node.js 18+
- Express.js
- MongoDB with Mongoose
- Socket.io
- Redis for caching

### Frontend
- React 18
- Vite
- Redux Toolkit
- Tailwind CSS
- Framer Motion

### Infrastructure
- Docker & Docker Compose
- Nginx
- MongoDB
- Redis

## Quick Start

### Prerequisites
- Node.js 18+
- MongoDB
- Redis
- Docker (optional)

### Installation

#### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your credentials
npm run seed  # Initialize database
npm run dev   # Start development server
```

#### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Docker Setup
```bash
docker-compose up -d
```

## Environment Variables

See `.env.example` in backend folder for required environment variables.

## API Documentation

See `docs/API.md` for complete API documentation.

## Project Structure

```
vortex-ai/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── utils/
│   │   └── app.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   ├── store/
│   │   └── App.jsx
│   └── package.json
├── docker-compose.yml
└── docs/
```

## License

MIT
