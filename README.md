# 🎵 Spotify Clone - High-Fidelity Web Player

A premium, pixel-perfect Spotify clone built with **React**, **TypeScript**, and **Vite**. This project achieves 100% visual parity with the official Spotify 2024 web interface, focusing on rich aesthetics, smooth interactions, and a content-dense experience.

**🔗 [Live Demo](https://spotify-clone-livid-ten.vercel.app/)**


## ✨ Features

-   **Mobile-First Responsiveness**: Complete overhaul for mobile devices, featuring a collapsible layout and a native-app-like mobile header.
-   **Official Branding**: Consistent Spotify branding across all devices using a reusable `SpotifyLogo` component and official color palette.
-   **Interactive Content Filtering**: 
    -   Integrated "All", "Music", and "Podcasts" filters in the `MobileHeader`.
    -   Dynamic content filtering on the Home page powered by a global `FilterContext`.
-   **High-Fidelity UI**: Complete three-column layout for desktop (Sidebar, Main Content, Right Sidebar).
-   **Interactive Navigation**:
    -   Centered Search Navigation with automatic redirect on focus.
    -   Sidebar library shortcuts (Library, Plus icons) with active/hover states.
-   **Content-Dense Home**:
    -   Dynamic 2x4 "Recent items" grid and sections like "Recently played", "Your top mixes", etc.
    -   Hover-play overlays on all content cards.
-   **Persistent Player & Sidebar**: Full-featured playback bar and immersive "About the Artist" sidebar.

## 🚀 Tech Stack

-   **Frontend**: React 18, TypeScript, Vite
-   **Styles**: Vanilla CSS (High-Performance Design System)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Animations**: Framer Motion (Subtle micro-animations)
-   **Routing**: React Router DOM

## 🛠️ Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v16 or higher)
-   [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Kashif-Khokhar/Spotify-Clone.git
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

## 📂 Project Structure

```text
src/
├── components/     # High-fidelity UI components (Sidebar, TopBar, Player, etc.)
├── pages/          # Feature pages (Home, Search, PlaylistView)
├── App.tsx         # Main application assembly
└── index.css       # Core design system and global variables
```

## 📸 Screenshots & Fidelity

The project is designed to be indistinguishable from the real platform. It includes the signature Spotify glassmorphism, precise typography, and the iconic "greenish" brand palette.

---

*Built with ❤️ for High-Fidelity Web Design.*
