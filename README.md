# Subhashini Konda — Personal Portfolio

A personal portfolio website showcasing my development projects, hackathon work, internships, startup experience, certifications, and achievements beyond coding.

[![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_5-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router_6-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

## Live Demo

[View Portfolio](https://subhashini-konda-portfolio.vercel.app/)


## Highlights

- **13 Featured Projects:** Dedicated detail pages covering each project's problem, implementation, and outcomes.
- **5 Hackathon Builds:** Includes NETRIK, an AI-powered HR pipeline that screens 1,200 resumes fully offline; SYNTHIA, a multimodal AI content platform; and Smart India Hackathon case studies.
- **Experience:** Founding member of AVM Smart and four internships, with dedicated detail pages for each experience.
- **Certifications:** 10 certification cards with viewable credential files, covering areas such as Ethical Hacking, CCNA, HEX AI, and NPTEL.
- **Beyond Code:** Features my tech channel, `subhashini_speaks`, including a 20-video Git and GitHub series; seven athletics medals across Udaan and IPSGM meets; three years of NSS participation; and a Ruby Jubilee food stall venture run in profit.
- **Responsive Design:** A responsive interface with scroll-reveal animations and a warm, editorial design system.
- **Centralized Content Management:** All portfolio content is maintained in a single data file for easier updates.

## Tech Stack

| Area | Technologies |
|---|---|
| Frontend | React 18, JavaScript (ES6+) |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3, custom design system |
| Routing | react-router-dom 6 |
| Icons | lucide-react, react-icons |
| Deployment | Vercel |

## Run It Locally

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/KONDA-SUBHASHINI/portfolio.git
```

Navigate to the project directory:

```bash
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Production Build

Build the project for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
portfolio/
├── public/
│   ├── certificates/        # Certificate PDFs and images
│   └── resume.pdf           # Resume
├── src/
│   ├── components/          # Navbar, Hero, About, Skills, Certifications,
│   │                        # BeyondCode, and other UI components
│   ├── lib/
│   │   └── data.js          # Centralized portfolio content
│   ├── pages/
│   │   ├── Home             # Home page
│   │   ├── Projects         # Projects listing
│   │   ├── ProjectDetail    # Individual project details
│   │   ├── ExperienceDetail # Individual experience details
│   │   └── HackathonDetail  # Individual hackathon details
│   └── main.jsx             # Application entry point
├── vercel.json              # SPA rewrites for deep-link routing
└── package.json             # Dependencies and npm scripts
```

### Content Management

The file `src/lib/data.js` serves as the single source of truth for portfolio content, including projects, hackathons, education, social links, and certifications. Updating this file keeps the corresponding website sections consistent.

The `vercel.json` configuration handles single-page application (SPA) rewrites so that direct navigation to detail pages and refreshing deep links work correctly on Vercel.

## Contact

- **GitHub:** [@KONDA-SUBHASHINI](https://github.com/KONDA-SUBHASHINI)
- **YouTube:** [@subhashini_speaks](https://www.youtube.com/@subhashini_speaks)
- **Instagram:** [@subhashini_speaks](https://www.instagram.com/subhashini_speaks)
- **Email:** [subhashinikonda008@gmail.com](mailto:subhashinikonda008@gmail.com)
