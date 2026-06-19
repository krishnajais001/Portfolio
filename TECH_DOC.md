# Technical Documentation: Antigravity Portfolio

## 1. Overview
This project is a high-performance, AI-native developer portfolio. It is designed to be fully dynamic, secure, and ready for extreme scale.

## 2. The Tech Stack

### 2.1. Frontend Architecture
- **Framework:** Next.js 15 (App Router with Server Actions).
- **Logic:** React 19 + TypeScript.
- **Styling:**
    - **Vanilla CSS:** For custom, high-end animations and brutalist components.
    - **Tailwind CSS:** For layout scaffolding and utility-first responsiveness.
- **Animations:**GSAP (for scroll-based triggers) and Framer Motion (for UI transitions).
- **Visuals:** Custom images generated via Antigravity Image Tooling.

### 2.2. Backend & Services
- **API:** Node.js + Express + TypeScript.
- **Validation:** Zod (for type-safe environment variables and API contracts).
- **Database:** Supabase (PostgreSQL) for structured content (Projects, Experience, Skills).
- **Authentication:** Supabase Auth (for the Admin Content Management Center).
- **Storage:** Supabase Buckets (for Resume PDFs and project assets).
- **Real-time:** Supabase Real-time (for live AI-agent status updates).

### 2.3. AI Intelligence (The "Antigravity" Core)
- **Primary Agent:** Grok-powered agent integrated into the frontend.
- **Secondary AI:** OpenAI GPT-4o for complex project summarization.
- **Search:** Vector search on Supabase (pgvector) for Retrieval-Augmented Generation (RAG).

## 3. Infrastructure & Deployment
- **Frontend Hosting:** Vercel (Edge-first deployment).
- **Backend Hosting:** Render or Railway (Dockerized).
- **CI/CD:** GitHub Actions for automated linting, testing, and deployment.
- **Monitoring:** Sentry (error tracking) and Vercel Analytics (performance & Core Web Vitals).

## 4. Developer Experience (DX)
- **IDE:** Antigravity IDE (VS Code based) with custom extension stack.
- **CLI Tools:** Antigravity CLI for automated environment syncing.
- **Formatting:** Prettier with custom rules for "Living Code" aesthetic.

---
