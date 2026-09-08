# 🎉 Anokha 2026 Event Registration Portal

This repository contains the **User Interface Design (UID)** project for the Anokha 2026 Tech & Sports festival. It features multiple implementations of a modern, interactive event registration platform.

## 📂 Project Structure

This project includes two distinct front-end implementations to showcase different UI/UX methodologies:

### 1. Pure HTML/CSS/JS Implementation (`/A17`)
A lightweight, dependency-free web platform designed with pure HTML, CSS, and vanilla JavaScript. 
* **Features**: Dynamic category filtering, interactive event cards, modal overlays, and a simulated payment gateway using QR codes.
* **Storage**: Relies on browser-based tracking without an external backend.
* **Execution**: Navigate to the `A17` folder and run a simple local server:
  ```bash
  cd A17
  python -m http.server 3000
  ```
  Then visit `http://localhost:3000` in your browser.

### 2. React Implementation (`App.tsx`)
A modern, component-driven React application implementation of the same registration portal.
* **Features**: Strong typing (TypeScript), reactive state management (`useState`, `useEffect`), search queries, and dynamic rendering.
* **Storage**: Persistent registrations using the browser's `localStorage` API.
* **Execution**: This file serves as the core entry point (`App.tsx`) for a React application. It requires a React environment (like Vite or Create React App) and its associated component files to run.

## 🖌️ Design Highlights
* **Responsive Design**: Designed to be responsive across different devices.
* **Categorization**: Events are beautifully categorized into Tech, Sports, Arts, and E-Sports with distinct visual cues.
* **Seamless UX**: Features a smooth flow from event browsing to registration and mock payment processing.

## 📄 Documentation
The repository also includes `UID.docx` inside the `/A17` folder, which contains the formal project report and UI design analysis.
