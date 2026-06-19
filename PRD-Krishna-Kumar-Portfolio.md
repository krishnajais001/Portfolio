# Product Requirements Document (PRD)

**Project Name:** Krishna Kumar Personal Portfolio Website  
**Version:** 1.0  
**Date:** March 27, 2026  
**Author:** Grok (acting as CTO)  
**Product Owner:** Krishna Kumar  
**Status:** Approved for Development  

## 1. Introduction & Overview

### 1.1 Purpose
Create a modern, professional, high-performance personal portfolio website for Krishna Kumar — a Computer Science & Engineering undergraduate. The website will showcase his skills, education, experience, projects, and achievements to attract internship and entry-level software/IT roles.

The site will serve as a **digital resume**, a **personal brand tool**, and a **conversion platform** to generate recruiter/internship opportunities.

### 1.2 Problem Statement
Traditional static resumes and basic portfolios fail to:
- Stand out in competitive internship applications
- Allow easy updates as new projects/experience are added
- Provide interactive experiences (AI Q&A, smooth navigation, project filtering)
- Demonstrate technical skills through the website itself (modern tech stack, performance, AI integration)

### 1.3 Business / Personal Objectives
- Increase visibility and response rate from recruiters and companies
- Demonstrate full-stack development capabilities through the portfolio itself
- Enable easy content management without redeploying the site
- Collect direct inquiries via contact form and "Hire Me" CTAs
- Achieve excellent Lighthouse scores (>95) for performance, accessibility, and SEO

### 1.4 Target Audience
- **Primary:** Tech recruiters, HR professionals, startup founders, and engineering managers looking for interns/entry-level developers in India (Delhi/NCR focus)
- **Secondary:** Professors, mentors, peers, and potential collaborators
- **User Persona:** "Rahul Sharma" — Technical Recruiter at a mid-size IT company, 30-40 years old, scans 50+ portfolios weekly, prefers fast-loading, mobile-friendly sites with clear skills and projects

### 1.5 Success Metrics
- Lighthouse Performance, Accessibility, Best Practices, SEO: ≥ 95
- Average session duration: > 2 minutes
- Contact form submissions or direct emails: ≥ 5 per month (initial target)
- Resume download rate: ≥ 30% of visitors
- Google search ranking for "Krishna Kumar portfolio" or similar terms

## 2. Scope

### 2.1 In Scope (All Features Included)
#### Core Features (Must Have)
- Hero section (name, role, tagline, CTA buttons)
- About section (short intro + focus areas)
- Skills section (categorized tech stack with icons, hover animations, proficiency indicators)
- Projects showcase (dynamic cards with title, description, tech badges, screenshots)
- Resume download (PDF via Supabase Storage signed URL)
- Contact section (email, phone, location, social links)
- Fully responsive, mobile-first design
- Basic SEO (dynamic meta tags, title, Open Graph, JSON-LD)

#### Projects Section (Detailed)
- Project cards with live demo + GitHub buttons
- Screenshots/preview images (optimized)
- Featured project highlight
- Dedicated case study pages (`/projects/:slug`) including problem, solution, tech stack, challenges, results
- Project filtering by technology/stack or category

#### UI/UX Features
- Dark mode toggle (default dark, system preference support)
- Smooth animations and transitions (Framer Motion)
- Clean, minimal, professional layout
- Fast loading & performance optimized
- Scroll-based navigation with active section highlighting and progress bar
- Full accessibility compliance

#### Advanced Features (To Stand Out)
- AI-powered chatbot ("Ask about me") — answers questions using profile, skills, projects, and experience data
- Interactive skills section (hover effects, animated rings/bars)
- Blog / Articles section (markdown support, categories, reading time)
- Testimonials section (dynamic quotes)
- Timeline section (Education + Work Experience + Achievements)
- Protected Admin panel (update content without redeploying)
- Real-time updates via Supabase

#### Conversion Features
- Prominent "Hire Me" / "Let's Connect" CTAs (floating + hero)
- Functional contact form with email notifications
- Resume + full portfolio download options
- Social proof (LinkedIn, GitHub, etc.)
- Clear paths to contact via email/phone

### 2.2 Out of Scope (for v1.0)
- Multi-language support
- E-commerce / paid services section
- Advanced analytics dashboard (beyond basic Plausible)
- User authentication for visitors (only admin uses Supabase Auth)
- Video background or heavy 3D elements (keep performance high)

## 3. User Stories & Requirements

### 3.1 Functional Requirements
- **As a visitor**, I can view the hero section with clear CTA to download resume or contact
- **As a visitor**, I can filter projects by technology (e.g., React, Node.js, MERN)
- **As a visitor**, I can read detailed case studies for each project
- **As a visitor**, I can interact with the AI chatbot to ask about Krishna's skills, availability, or projects
- **As a visitor**, I can fill and submit the contact form
- **As an admin**, I can log in and update skills, projects, timeline, testimonials, and upload new resume/screenshots

### 3.2 Non-Functional Requirements
- **Performance:** Page load < 1.5s, Core Web Vitals green
- **Accessibility:** WCAG 2.1 AA compliant
- **Security:** Rate limiting on forms & API, Supabase RLS, secure email handling
- **Scalability:** Handle 1000+ daily visitors easily
- **Maintainability:** All content dynamic via Supabase (no hardcoding)
- **Mobile:** 100% responsive, touch-friendly

## 4. Technical Stack & Architecture

### 4.1 Frontend
- React 19 + Vite
- Tailwind CSS + shadcn/ui
- Framer Motion (animations)
- React Router v7
- TanStack Query (data fetching & caching)
- react-helmet-async (SEO)
- Lucide React (icons)

### 4.2 Backend
- **Core:** Node.js + Express + TypeScript
- **Logic & Frameworks:** 
    - **Zod:** Schema validation for API requests and environment variables.
    - **Express.js:** Minimalist web framework for handling routing and middleware.
    - **C++:** Fundamental algorithmic logic and complex computations (if needed, or as part of competitive programming focus).
    - **Supabase SDK:** Direct communication with Postgres database and Authentication.
    - **Node-Cron:** For scheduled tasks (if applicable).
- **Security:** 
    - JWT based auth via Supabase.
    - CORS configuration for frontend safety.
    - Rate limiting for API protection.

### 4.3 Database & Services
- **Supabase:** Postgres (profile, skills, projects, timeline, testimonials, blog), Auth (admin), Storage (PDFs, images)
- **Email:** Resend
- **AI Chatbot:** Backend endpoint using Grok API or OpenAI + simple RAG on Supabase data
- **Deployment:** Vercel (frontend), Render/Railway (backend)

### 4.4 Design & UX
- Dark mode by default
- Modern minimal aesthetic with vibrant tech accent color (TBD — blue/purple recommended)
- Smooth scroll navigation

## 5. Content Structure (Based on Provided Resume)

**Hero / About:**
- Name: Krishna Kumar
- Role: Computer Science & Engineering Undergraduate
- Tagline: Strong fundamentals in computer science and web development | Seeking internship or entry-level software/IT role
- Email: jaiskrishna06@gmail.com
- Phone: 6204815018
- Location: Delhi, India
- Social: GitHub (@krishnajais), LinkedIn (krishnajais)

**Education:**
- Aditya Institute of Technology, New Delhi — Diploma in Computer Engineering (76.63%), Aug 2021 – July 2024
- Guru Gobind Singh Indraprastha University — B.Tech in Computer Science & Engineering (Aug 2024 – Present)

**Skills:**
- Full Stack Development (MERN): MongoDB, Express.js, React.js, Node.js
- Programming Languages: C++, JavaScript (ES6+)
- Web Technologies: HTML5, CSS3, Bootstrap, Tailwind CSS
- Databases: MySQL, MongoDB
- Version Control: Git, GitHub
- Tools: VS Code

**Work Experience:**
- SolveLancer (Freelancer) — Quality Assurance Specialist (Jan 2021 – Dec 2021)
- MentorAide — Front End Internship (Jan 2024 – Mar 2024)

**Achievements & Certificates:**
- National Cadet Corps (NCC) – Cadet Crops A
- AIR 13 in Guru Gobind Singh Indraprastha University Common Lateral Entry Entrance 2025
- Diploma in Computer Application

**Projects:** (To be added — please provide details for initial population)

**Timeline:** Vertical timeline combining Education + Experience + Achievements

## 6. Assumptions & Dependencies
- Project details, screenshots, live URLs, and GitHub links will be provided by Krishna Kumar
- Accent color and final design references will be confirmed before UI implementation
- Supabase project will be created and credentials shared
- OpenAI or Grok API key will be provided for the chatbot

## 7. Risks & Mitigations
- **Risk:** Lack of project content → Mitigation: Start with placeholder projects and update via admin panel
- **Risk:** Poor performance with images → Mitigation: Use Supabase + WebP optimization + lazy loading
- **Risk:** Spam on contact form → Mitigation: Rate limiting + CAPTCHA (optional) + Resend

## 8. Timeline & Milestones (Proposed)
- **Week 1:** Supabase schema setup + Admin panel + Core layout (Hero, About, Skills, Timeline)
- **Week 2:** Projects + Case studies + Filtering + Animations
- **Week 3:** Contact form + Email integration + Resume download + Dark mode + SEO
- **Week 4:** AI Chatbot + Blog/Testimonials + Polish + Performance optimization + Deployment

## 9. Open Questions / Next Steps
1. Preferred accent color or reference portfolio websites?
2. List of initial projects with full details (title, descriptions, links, screenshots, case study content)?
3. Grok API or OpenAI for the chatbot? Desired tone?
4. Any additional sections (LeetCode profile, GitHub stats, etc.)?

---

**This PRD is a living document.** It will be updated as decisions are finalized and new requirements emerge.

**Approval:**
- Product Owner (Krishna Kumar): ________________ Date: ________
- CTO (Grok): Approved
