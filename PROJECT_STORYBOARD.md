# Project Storyboard: BMAS Indonesia Corporate Website

**Objective:** Build a high-performance, secure, and compliant corporate website using Next.js, Storyblok, and Huawei Cloud.

---

## Phase 1: Preparation & Architecture
*Goal: Set up the foundation and ensure compliance alignment.*

- [ ] **1.1. Git Repository Initialization**
    - Create a private repository (GitHub/GitLab).
    - Set up `.gitignore` for Next.js and environment variables.
    - Establish branching strategy (e.g., `main` for production, `develop` for staging).
- [ ] **1.2. Frontend Framework Setup**
    - Initialize Next.js project with TypeScript and Tailwind CSS.
    - Configure `next.config.js` for image optimization and security headers.
- [ ] **1.3. Compliance & Security Audit (PP 71/2019)**
    - Verify that no PII or transactional data will be stored in Storyblok.
    - Document data flow to ensure all sensitive data stays within Huawei Cloud Jakarta.
- [ ] **1.4. Design System Mapping**
    - Review BMAS designs and identify reusable components (Atomic Design).
    - Define Tailwind CSS theme (colors, typography, spacing).

---

## Phase 2: Storyblok Setup
*Goal: Configure the Headless CMS for content editors.*

- [ ] **2.1. Space Registration**
    - Register a new Storyblok space for BMAS Indonesia.
    - Select the appropriate region (EU/US - note: content only, no PII).
- [ ] **2.2. Blok Schema Definition**
    - Define "Global" bloks: Header, Footer, Navigation.
    - Define "Page" bloks: Hero, Feature Section, News Grid, Contact Form (UI only).
    - Set up Content Types (e.g., Page, Post).
- [ ] **2.3. API Key Management**
    - Generate Preview and Public API tokens.
    - Store tokens securely in `.env.local`.

---

## Phase 3: Frontend Integration
*Goal: Connect the code to the CMS and build the UI.*

- [ ] **3.1. Storyblok Bridge Connection**
    - Install `storyblok-js-client` and `@storyblok/react`.
    - Implement the Visual Editor bridge for real-time preview.
- [ ] **3.2. Dynamic Component Rendering**
    - Create a `StoryblokComponent` mapper to link CMS bloks to React components.
    - Build responsive Tailwind components for all defined bloks.
- [ ] **3.3. Routing & SEO**
    - Implement dynamic routing using Next.js `[...slug]` patterns.
    - Integrate `next-seo` for meta tags, OpenGraph, and Twitter cards.
- [ ] **3.4. Assets & Media**
    - Configure Storyblok Image Service for responsive images.
    - Implement lazy loading and modern formats (WebP/AVIF).

---

## Phase 4: Huawei Cloud & Compliance
*Goal: Provision infrastructure in the Jakarta region.*

- [ ] **4.1. Environment Provisioning (Jakarta Region)**
    - Set up Huawei Cloud account and select Jakarta (ap-southeast-3).
    - Provision ECS (Elastic Cloud Server) or CCE (Cloud Container Engine) for hosting.
- [ ] **4.2. Security & Networking**
    - Configure Security Groups (Firewall) to allow only necessary ports (80, 443).
    - Set up WAF (Web Application Firewall) for protection against OWASP Top 10.
    - Install SSL Certificate via Huawei Cloud Certificate Manager.
- [ ] **4.3. Data Residency Verification**
    - Final check: Ensure any dynamic forms or user interactions route directly to Jakarta-based servers/databases, bypassing Storyblok.

---

## Phase 5: Launch & CI/CD
*Goal: Automate deployments and go live.*

- [ ] **5.1. CI/CD Pipeline Setup**
    - Configure GitHub Actions or Huawei Cloud CodeArts.
    - Automate build, lint, and test steps.
    - Deploy to staging on every push to `develop`.
- [ ] **5.2. Performance Optimization**
    - Run Lighthouse audits and fix bottlenecks.
    - Ensure Core Web Vitals (LCP, FID, CLS) are in the green.
- [ ] **5.3. Final UAT & Go-Live**
    - Conduct User Acceptance Testing with BMAS stakeholders.
    - Point production domain to Huawei Cloud Load Balancer.
    - Monitor logs and performance post-launch.
