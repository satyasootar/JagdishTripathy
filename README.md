# Jagadish Tripathy - SOC Analyst Portfolio

![Portfolio Preview](public/og-image.png)

A modern, high-performance portfolio website designed for a **SOC Analyst & Blue Team Specialist**. This project showcases cybersecurity expertise, threat hunting capabilities, and incident response projects through an interactive and responsive user interface.

## 🚀 Features

*   **Interactive Hero Section**: Custom particle network animation representing digital connectivity and threat monitoring.
*   **Dynamic Certifications**: Automatically displays verified badges from Credly with interactive "pop" and "glow" hover effects.
*   **Medium Articles Integration**: Fetches and displays the latest cybersecurity blog posts dynamically using RSS feeds.
*   **Project Showcase**: Bento-grid style layout highlighting GitHub repositories and Blue Team operations.
*   **Dark Mode Support**: Fully integrated theme switcher (Light/Dark) for optimal viewing in any environment.
*   **Responsive Design**: Mobile-first architecture with a scrollable navigation bar and optimized layouts for all devices.
*   **SEO Optimized**: configured with JSON-LD structured data, Open Graph tags, and sitemaps for maximum visibility.

## 🛠️ Tech Stack

*   **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Data Fetching**: Credly (via hardcoded badges), Medium (via `rss2json`)

## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Jagadishtripathy/portfolio.git
    cd portfolio
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── components/
│   ├── ui/             # Reusable UI components (Buttons, Hero, etc.)
│   ├── About.jsx       # Career timeline and bio
│   ├── Articles.jsx    # Dynamic Medium blog feed
│   ├── Certifications.jsx # Credly badges display
│   ├── Projects.jsx    # GitHub project showcase
│   └── Skills.jsx      # Technical skills interactive grid
├── lib/
│   └── utils.js        # CSS class merging utility (cn)
├── App.jsx             # Main application layout
└── index.css           # Global Tailwind and base styles
```

## 📬 Contact

*   **Website**: [https://Jagadish-tripathy.vercel.app/](https://Jagadish-tripathy.vercel.app/)
*   **LinkedIn**: [Jagadish Tripathy](https://linkedin.com/in/Jagadishtripathy)
*   **GitHub**: [Jagadishtripathy](https://github.com/Jagadishtripathy)
*   **Email**: Jagadishtripathyforyou@gmail.com

---
*Built with ❤️ by Jagadish Tripathy*
