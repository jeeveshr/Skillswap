# SkillSwap ⚡

A premium MERN stack application for decentralized skill exchange.

## Features
- **Bento Box UI**: Modern, glassmorphic layout for discovery.
- **Smart Matching**: Logic-driven user connections based on skill overlap.
- **Framer Motion**: Smooth transitions and micro-animations.
- **Dark Mode**: High-contrast, electric purple aesthetics.

## Tech Stack
- **Frontend**: Vite, React, Tailwind CSS, Framer Motion, Lucide Icons.
- **Backend**: Node.js, Express, MongoDB, Mongoose.

## Getting Started

### 1. Backend Setup
```bash
cd server
npm install
npm run dev
```

### 2. Frontend Setup
```bash
cd client
npm install
npm run dev
```

## Matching Algorithm
The core logic resides in `server/controllers/matchController.js`:
- Finds users where **(User A Teaching ∩ User B Learning)** is not empty.
- **AND (User B Teaching ∩ User A Learning)** is not empty.
