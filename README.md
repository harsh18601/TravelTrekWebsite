# ✈️ TravelTrek - Modern Fullstack Travel Discovery 🧳

A premium, modern travel discovery platform built with **React, Vite, Node.js, and MongoDB**.

## 🚀 Features
- **Modern UI**: Sleek, interactive interface with glassmorphism and smooth animations (Framer Motion).
- **Refined Navigation**: Intuitive category-based browsing (Adventures, Food, Wellness, Events).
- **Interactive Map Discovery**: "Discover on-click" section with floating explorer pins and pulse animations.
- **Image Restoration**: High-quality, curated travel assets for destinations and culinary experiences.
- **Decoupled Architecture**: Fast React frontend serving as a client for a modular Express REST API.
- **Validated Contact System**: Professional contact form with real-time feedback and server-side validation.

## 🛠️ Tech Stack
- **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion, Axios, Lucide Icons.
- **Backend**: Node.js, Express, MongoDB, Mongoose, Express Validator, CORS.

## 🏁 Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB (Running locally or via Atlas)

### 1. Setup Backend
```bash
cd backend
npm install
node src/db/seed.js # To seed initial data
npm run dev
```
The API will run on `http://localhost:3000/api`.

### 2. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```
The website will be available at `http://localhost:5173`.

## 📂 Project Structure
- `/backend`: Express API, Models, and Modular Routes.
- `/frontend`: React client with Tailwind and Framer Motion.

## 📃 License
This project is licensed under the MIT License.
