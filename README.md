# 🎉 ANOKHA 2026: National Tech, Cultural & Sports Fest Registration

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![UI/UX](https://img.shields.io/badge/UI%2FUX-Glassmorphism-purple.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)
![HTML5/CSS3/JS](https://img.shields.io/badge/Vanilla-HTML%2FCSS%2FJS-orange)

Welcome to the **User Interface Design (UID) Project** for the Anokha 2026 festival. This repository showcases two distinct frontend engineering approaches to building a dynamic, responsive, and highly interactive event registration platform.

---

## 📖 Project Overview

This project simulates the official registration gateway for Anokha 2026. It allows users to browse events across various categories, read detailed descriptions/instructions, and securely register for them.

To demonstrate mastery over both core web technologies and modern frameworks, this repository is split into two complete implementations:

1. **The Native Approach (`/event_page`)**: Pure HTML, CSS, and Vanilla JavaScript.
2. **The React Approach (`App.tsx`)**: Component-driven architecture with React and TypeScript.

---

## ✨ Core Features

### 🌟 Native HTML/CSS/JS Platform (`/event_page`)
Located in the `event_page` directory, this is a dependency-free, highly optimized static web application.
* **Modern Glassmorphism UI**: Beautiful, frosted-glass overlay effects utilizing modern CSS backdrops (`backdrop-filter`).
* **Smooth Typography**: Driven by Google Fonts (*Space Grotesk* & *Outfit*).
* **Scroll Animations**: Custom CSS intersection animations (`animate-up`) that load elements gracefully as the user scrolls.
* **Dynamic Search & Filtering**: Client-side filtering of events (Tech, Sports, Arts, E-Sports) and live search bar processing.
* **Simulated Checkout Flow**: Complete with a modal-based payment gateway simulation including QR code scanning integration.

### ⚛️ React & TypeScript Platform (`App.tsx`)
A scalable, state-driven approach demonstrating modern web-app engineering.
* **Batch Registration**: A "Cart-like" system (`toggleEventSelection`) allowing users to select multiple events simultaneously and register for all of them in a single transaction.
* **Persistent State**: Utilizes the browser's `localStorage` API to ensure that selected events and completed registrations persist across page reloads.
* **Strong Typing**: Full TypeScript interfaces (`Event`, `Registration`, `EventCategory`) ensuring predictable data structures and robust code.
* **Smooth Scrolling Integration**: Programmatic DOM manipulation post-registration to seamlessly guide users to their registration dashboard.

---

## 🎨 Design Philosophy

Both implementations adhere strictly to modern UI/UX principles outlined in the **UID Course Project**:
* **Visual Hierarchy**: Strategic use of layout, typography, and color highlights (e.g., `highlight` class) to guide the user's eye to call-to-actions (Register buttons).
* **Feedback Mechanisms**: Instant visual feedback on interactions, hovering, and form submissions.
* **Modularity**: Data is decoupled from the UI (e.g., `eventsData` array in `script.js` and `EVENTS` constant in React) making it incredibly easy to add new events.

---

## 🚀 Installation & Execution

### Running the Native HTML/JS Version
This version requires no installation, transpilers, or build steps.
1. Clone the repository:
   ```bash
   git clone https://github.com/pranav2007kumar/College.event_registrationpage.git
   ```
2. Navigate into the native directory:
   ```bash
   cd College.event_registrationpage/event_page
   ```
3. Start a local server:
   ```bash
   python -m http.server 3000
   ```
4. Open your browser and go to `http://localhost:3000`

### Running the React Version
*Note: `App.tsx` is provided as a core functional component. To run it, drop it into an existing Vite or Create React App environment.*
1. Initialize a new React project: `npx create-react-app anokha26 --template typescript`
2. Replace `src/App.tsx` with the provided file.
3. Ensure the required sub-components (like `EventSection`, `RegistrationForm`) and type files are structured correctly around it.
4. Run `npm start`.

---

*Developed for 23AID215 - User Interface Design.*

