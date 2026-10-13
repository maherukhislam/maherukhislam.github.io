# Md. Maherukh Islam

**Creative Web Builder · Student Developer**  
Dhaka, Bangladesh · [maherukhislam2007@gmail.com](mailto:maherukhislam2007@gmail.com)  
Open for select web and product work.

Student developer in Dhaka. I’ve built four live web platforms for three organizations and an open-source PostgreSQL security tool.

## About

I’m a science student in Dhaka. Since 2024, I’ve built four live web platforms for three organizations and an open-source PostgreSQL security tool. My work includes a website for a 1,000+ member club, two finance systems, and a study-abroad consultancy portal.

These are systems built for real organizations. I focus on accessible interfaces, careful data access, and software that is practical to maintain.

## At a glance

- **4** live web platforms
- **1,000+** members in the club served by one platform
- **3** organizations served
- **1** open-source PostgreSQL security tool

## Projects

### DCC Nature Study Club Website

**Full-stack web platform · 2025–present · Full-Stack Developer · Live**  
[dccnsc.org](https://dccnsc.org)

The club’s first website. It brings event news, a student-written blog, and online membership registration together for 1,000+ members.

- **Problem:** News was spread across paper and Facebook posts, and joining required a paper form.
- **Solution:** Designed and built the official site with events, student publications, a photo gallery, achievements, committee directory, and online membership registration.
- **Impact:** Members can join online in minutes, and the committee has one central link to share.
- **Technology:** React 18, TypeScript, Cloudflare Pages, Supabase, CSS Modules.

### Financial Management System

**Internal tool / infrastructure · 2025 · Developer and Executive Treasurer · Live**  
[finance.dccnsc.org](https://finance.dccnsc.org)

A login-gated treasury portal for the club where I serve as treasurer. It replaced paper logs and scattered spreadsheets with role-based access, signed receipts, and an audit trail.

- **Problem:** Manual finance records took days to audit and allowed mistakes to slip through.
- **Solution:** Built a portal using React 19, Zustand, and Supabase. Members see only the screens allowed by their roles; receipts are signed and actions are logged.
- **Impact:** Finance records are centralized and actions are traceable, making reviews and handover easier than paper logs and scattered spreadsheets.
- **Modules:** Transactions and finance, approvals, member management, notices, and reports.
- **Access and operations:** Role-based screens, traceable finance and admin actions, and no public registration. Club admins create accounts manually.
- **Technology:** React 19, Zustand, Cloudflare Workers, Supabase, PostgreSQL.

### A2 Abroad Study-Abroad Consultancy Portal

**Client project · Full-stack web portal · Full-Stack Developer · Live**

A portal for a Dhaka consultancy that helps students apply to programs in the UK, New Zealand, Malaysia, South Korea, and Hungary. It moved the student pipeline from phone calls and paper into one system.

- **Problem:** Inquiries, documents, and counseling sessions were tracked by hand.
- **Solution:** Built separate views for students, consultants, and administrators. Students register, submit details, and track progress; consultants see assigned students; admins record expenses, generate reports, and monitor the pipeline.
- **Impact:** Students can follow application progress in the portal, and staff can manage the pipeline in one place.
- **Technology:** React, TypeScript.

### Postgres Auth Security Review

**Open-source agent skill · Creator and Maintainer · v1.4.0 · MIT**

An open-source skill for AI coding agents, including Claude Code, Cursor, and GitHub Copilot. It checks PostgreSQL and Supabase authentication code for known vulnerabilities when an agent works on login flows, JWT sessions, SQL migrations, or row-level security policies. It also includes a standalone Bash scanner that makes no network calls and can run in CI.

- **Problem:** Database authentication code often repeats known issues such as row-level security gaps, weak password hashing, and committed secrets.
- **Solution:** Provides researched checks and inline guidance for AI coding agents, plus a standalone scanner.
- **Impact:** Checks reference named CVEs and published OWASP and NIST standards, including CVE-2025-1094.
- **Coverage:**
  - Row-level security: `USING (true)` traps, table-owner bypass, and missing `FORCE ROW LEVEL SECURITY`.
  - Password hashing: Argon2id or bcrypt cost of at least 12; blocks `md5()` and `crypt()` in SQL.
  - Custom JWTs: algorithm pinning, rejection of `alg: none`, and HMAC secret entropy.
  - SQL injection: parameterized queries, including PL/pgSQL `EXECUTE`.
  - Secret management: service-role keys must not appear in client bundles or `NEXT_PUBLIC_` variables.
  - Rate limiting: forwarded-IP spoofing and race conditions.
  - Multi-tenancy: isolation enforced by RLS rather than only by application-layer tenant filters.
- **References:** OWASP Top 10:2025, NIST SP 800-63B, CVE-2025-1094.
- **Technology:** PostgreSQL, Supabase, RLS policies, Bash/CI, AI agent tooling.

### A2 English Academy Financial Management System

**Client project · Internal financial system · Full-Stack Developer · Live**

A portal for an IELTS coaching center in Dhaka that previously managed finances in paper cashbooks and spreadsheets.

- **Problem:** Fees, installments, and expenses were difficult to track across paper records and spreadsheets.
- **Solution:** Built one role-gated portal for payments, upcoming installments, expenses, and reports.
- **Impact:** Owners can see the financial position on a given day without waiting for a manual cashbook reconciliation.
- **Technology:** React, TypeScript.

## Skills and tools

### Frontend

React, TypeScript, Tailwind CSS, Next.js, Vite, HTML5, CSS3.

### Backend and data

PostgreSQL, Supabase, Python, SQLite, Cloudflare Workers.

### Craft and practice

Web accessibility (WCAG), responsive design, performance, UI engineering, Git, GitHub.

Also used: JavaScript, Cloudflare, and Vite.

## Education

### HSC — Science Group

**Dhaka Commerce College · 2024–present**<br>
Subjects: Higher Mathematics, Physics, Chemistry, and ICT. Planning to study computer science or software engineering.

## Leadership and service

### Executive Treasurer — DCC Nature Study Club

**2024–present**

Manage the finances of a 1,000+ member club. I also built the treasury system used in the role, helping make audits shorter.

### Volunteer — 34th Annual Cultural Competition

**2025 · Dhaka Commerce College**

Supported event setup and on-site coordination at one of the college’s major annual events.

## Certificates and recognition

### Highlights

- **Web Accessibility Training** — Certified, UNICEF Agora (Dec 2024).
- **Physics Olympiad** — National Finalist, Bangladesh Olympiad Challenge (2025).
- **Earth Olympiad** — Divisional Topper, BYEI (Jul 2025).
- **APAC Cyber Hygiene Training** — Certified, The Asia Foundation and SAJIDA, with CyberPeace Institute, Global Cyber Alliance, and Google.org (May 2025).

### Additional achievements

The website highlights selected items; this document keeps the full list.

- **1st Place — ECO Spark Challenge 1.0** — Quiz Competition, DCC Nature Study Club.
- **2nd Place — IT Quiz (Junior)** — DCC Intra College CSE Fest 2025, Dhaka Commerce College (May 2025).
- **Workplace Communication Essentials** — Certified, Passport to Earning Bangladesh, Generation Unlimited, and Wadhwani Foundation (Jun 2025).
- **Environment Quiz Olympiad** — Participation, DCC Nature Study Club (Nov 2024).
- **1st DCCSC Online Quiz** — Achievement, DCC Science Club.
- **Bijoy Quiz Competition 2024** — Victory Day, University of Dhaka.
- **National Earth Olympiad 2025** — Certificate of Recognition, BYEI (Jul 2025).
- **Manifesto Talk: Youth, Environment & Climate** — Participation, Department of Environment (May 2025).

## Current interests

Cybersecurity, database systems, advanced mathematics, and software architecture.

## Contact and profiles

- **Email:** [maherukhislam2007@gmail.com](mailto:maherukhislam2007@gmail.com)
- **GitHub:** [@maherukhislam](https://github.com/maherukhislam)
- **LinkedIn:** [md-maherukh-islam](https://www.linkedin.com/in/md-maherukh-islam/)
- **Facebook:** [Maherukhislamastha](https://www.facebook.com/Maherukhislamastha)
- **Location:** Dhaka, Bangladesh
