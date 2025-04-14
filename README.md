# Mutsumi Hata - Software Engineer Portfolio

## Overview

This is my personal **portfolio website**, built as a **static Next.js application** using the modern App Router architecture. It showcases my work, technical skills, and design sensibility as a **junior software engineer** focused on clean code, maintainability, and real-world functionality.

The site is designed with a hybrid styling approach—leveraging **Tailwind CSS for layout and responsiveness**, while using **vanilla CSS and inline styles** where needed for full visual control (e.g., background textures, layering). The result is a cleaner, more elegant UI with fewer framework tradeoffs.

The site is deployed via **Netlify**, accessible at **[mutsumi.io](http://mutsumi.io)** (pending DNS finalization), and integrates directly with **GitHub**, **LinkedIn**, and a **functional contact form** via Email.js.

---

## Tech Stack

- **Next.js (App Router)**: Static site generation, route-based layouts
- **React**: Component-driven architecture
- **Tailwind CSS**: Layout, spacing, typography, and responsiveness
- **Inline styles**: Used intentionally for complex or fragile visuals (e.g. background image layering)
- **Email.js**: Enables contact form without exposing email address
- **Netlify**: Hosting, continuous deployment, custom domain support

---

## Features

- **Modular Component Architecture**: Pages, header, and footer split into clean, reusable files
- **White Brick Background**: Fixed aesthetic using inline style to bypass Tailwind's purge issues
- **Responsive Layout**: Mobile-friendly, accessible design
- **Project Highlights**: Direct links to real deployments and repositories
- **Live Contact Form**: Built with Email.js for direct outreach

---

## Project Sections

### Power of Prompt Engineering

- **Overview**: Interactive tools using **OpenAI API** to demonstrate prompt design and real-time content transformation
- **Key Features**: Real-time context updates, conversational interface

### Contact List

- **Overview**: CRUD Next.js app using dynamic routing and state management
- **GitHub**: [Repo](https://github.com/nsLittle/contact-list-nextjs)
- **Deployment**: Hosted on Netlify

---

## How to Run the Portfolio Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/nsLittle/portfolio.git
   ```
2. Navigate:
   ```bash
   cd portfolio
   ```
3. Install:
   ```bash
   npm install
   ```
4. Run:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000` in browser.

---

## Design Philosophy

While Tailwind is powerful, it comes with limitations around dynamic class names, purge behavior, and visual layering. This project uses:

- **Tailwind for what it's best at**: layout, spacing, typography, responsiveness
- **Inline styles/CSS for precision**: backgrounds, blur overlays, and anything purge-prone

This hybrid approach ensures the cleanest possible visual result without over-engineering.

---

## Future Enhancements

- [ ] Dark Mode Toggle
- [ ] Blog Section for technical writing
- [ ] SEO Optimization (structured metadata, OG tags)
- [ ] Accessibility Improvements (skip links, ARIA landmarks)
- [ ] Lazy Loading & Code Splitting for performance

---

## Contact Me

- [GitHub](https://github.com/nsLittle)
- [LinkedIn](https://www.linkedin.com/in/mutsumihata)

I'm open to opportunities, collaboration, or just connecting with fellow developers. Thanks for visiting!
