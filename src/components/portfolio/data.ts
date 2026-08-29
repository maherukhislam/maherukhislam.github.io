export const profile = {
  name: "Md. Maherukh Islam",
  role: "Creative Web Builder",
  secondaryRole: "Student Developer",
  tagline:
    "Student developer in Dhaka. Five live platforms, 1,000+ users, three organizations, and every system still running.",
  location: "Dhaka, Bangladesh",
  email: "maherukhislam2007@gmail.com",
  availability: "Open for select web & product work",
  educationNote: "HSC 2026 candidate · Science Group",
}

export const socials = [
  {
    name: "GitHub",
    handle: "@maherukhislam",
    url: "https://github.com/maherukhislam",
  },
  {
    name: "LinkedIn",
    handle: "in/md-maherukh-islam",
    url: "https://www.linkedin.com/in/md-maherukh-islam/",
  },
  {
    name: "Facebook",
    handle: "/Maherukhislamastha",
    url: "https://www.facebook.com/Maherukhislamastha",
  },
]

export const techStack = [
  { name: "React", icon: "atom" as const },
  { name: "TypeScript", icon: "filecode" as const },
  { name: "Next.js", icon: "triangle" as const },
  { name: "Tailwind CSS", icon: "wind" as const },
  { name: "JavaScript", icon: "braces" as const },
  { name: "HTML5", icon: "code" as const },
  { name: "CSS3", icon: "palette" as const },
  { name: "PostgreSQL", icon: "database" as const },
  { name: "Supabase", icon: "zap" as const },
  { name: "Python", icon: "terminal" as const },
  { name: "SQLite", icon: "harddrive" as const },
  { name: "Cloudflare", icon: "cloud" as const },
  { name: "Git", icon: "gitbranch" as const },
  { name: "GitHub", icon: "github" as const },
  { name: "Vite", icon: "flame" as const },
]

export const stats = [
  { value: "5", label: "Live platforms shipped" },
  { value: "1,000+", label: "Students served" },
  { value: "12", label: "Certificates & awards" },
  { value: "3", label: "Organizations moved online" },
]

export const coreStack = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Supabase",
]

export interface Project {
  id: string
  index: string
  title: string
  short: string
  url?: string
  urlLabel?: string
  category: string
  timeline?: string
  role: string
  status: "Live" | "Open Source"
  version?: string
  license?: string
  problem?: string
  solution?: string
  impact?: string
  tech: string[]
  modules?: { name: string; purpose: string }[]
  modulesLabel?: string
  characteristics?: { title: string; desc: string }[]
  coverage?: { area: string; checks: string }[]
  standards?: string[]
}

export const projects: Project[] = [
  {
    id: "dccnsc",
    index: "01",
    title: "DCC Nature Study Club Website",
    short:
      "The club's first website, ever. 1,000+ members now get event news, a student-written blog, and online membership registration in one place.",
    url: "https://dccnsc.org",
    urlLabel: "dccnsc.org",
    category: "Web Platform · Full-Stack",
    timeline: "2025-present",
    role: "Full-Stack Developer",
    status: "Live",
    problem:
      "A 1,000+ member club with no website at all. News went out on paper and scattered Facebook posts; joining meant filling in a form by hand.",
    solution:
      "I designed and built the official site myself: events, a blog where students publish their own writing, a photo gallery, club achievements, the committee directory, and online membership registration.",
    impact:
      "Members now join online in minutes instead of handing in paper forms, and the committee finally has one link to point people to.",
    tech: ["React 18", "TypeScript", "Cloudflare Pages", "Supabase", "CSS Modules"],
    modules: [
      { name: "Events", purpose: "Activity reports and upcoming programs" },
      { name: "Blog / Publications", purpose: "Student-written nature & science articles" },
      { name: "Gallery", purpose: "Photo albums from club activities" },
      { name: "Achievements", purpose: "Club awards and milestones" },
      { name: "Committee", purpose: "Club leadership / moderators" },
      { name: "Join Us", purpose: "Online membership registration" },
    ],
    modulesLabel: "Sections",
  },
  {
    id: "finance",
    index: "02",
    title: "Financial Management System",
    short:
      "I'm the club treasurer, and I built the treasury portal I now run. Role-based access, signed receipts, and a log of every action. Audits went from days to instant.",
    url: "https://finance.dccnsc.org",
    urlLabel: "finance.dccnsc.org",
    category: "Internal Tool / Infrastructure",
    timeline: "2025",
    role: "Developer & Executive Treasurer",
    status: "Live",
    problem:
      "Club money was tracked in paper logs and whatever spreadsheets were lying around. Every audit meant days of checking by hand, and mistakes slipped through.",
    solution:
      "A login-gated portal built on React 19 + Zustand and a Supabase backend. Each member sees only what their role allows, receipts are signed, and every action gets logged.",
    impact:
      "Audits that took days are now instant. Math errors are down to zero, and the next treasurer inherits a system instead of a shoebox of receipts.",
    tech: ["React 19", "Zustand", "Cloudflare Workers", "Supabase", "PostgreSQL"],
    modules: [
      { name: "Transactions / Finance", purpose: "Track club money, dues, and payments" },
      { name: "Approvals", purpose: "Review and approve applications & requests" },
      { name: "Member Management", purpose: "Manage the member roster" },
      { name: "Notices", purpose: "Internal announcements" },
      { name: "Reports", purpose: "Financial and operational reporting" },
    ],
    modulesLabel: "Modules delivered",
    characteristics: [
      {
        title: "Role-based access",
        desc: "A general member, the president, and the treasurer all get different screens. You see your job, nothing else.",
      },
      {
        title: "Traceable",
        desc: "Every finance and admin action is written to a log. If a number looks off, we can see who did what and when.",
      },
      {
        title: "No public registration",
        desc: "There is no signup page. Club admins create accounts by hand, one at a time.",
      },
    ],
  },
  {
    id: "a2abroad",
    index: "03",
    title: "A2 Abroad - Study-Abroad Consultancy Portal",
    short:
      "A Dhaka study-abroad consultancy ran its whole student pipeline on phone calls and paper. I built the portal that moved it online, with separate dashboards for students, consultants, and admins.",
    category: "Client Project · Full-Stack Web Portal",
    role: "Full-Stack Developer",
    status: "Live",
    problem:
      "A2 Abroad places students in the UK, New Zealand, Malaysia, South Korea, and Hungary. Until this portal, every inquiry, document, and counseling session was tracked by hand.",
    solution:
      "One portal, three views. Students sign up, upload their details, and track their own progress. Consultants see only their assigned students. Admins record expenses, pull reports, and watch the whole pipeline.",
    impact:
      "Students now apply and follow their own progress in the portal instead of chasing updates over the phone, and the staff finally has one place where everything is visible.",
    tech: ["React", "TypeScript", "Responsive CSS", "Auth UI", "Form UX"],
  },
  {
    id: "pg-auth",
    index: "04",
    title: "Postgres Auth Security Review",
    short:
      "Auth code tends to ship with the same known holes: RLS gaps, weak hashing, leaked secrets. This open-source skill makes AI coding agents catch them in PostgreSQL and Supabase code before they ship. MIT, v1.4.0.",
    category: "Open-Source Tool · Agent Skill",
    role: "Creator & Maintainer",
    status: "Open Source",
    version: "v1.4.0",
    license: "MIT",
    problem:
      "The same auth bugs show up in database code again and again: RLS gaps, weak hashing, secrets committed to the repo. Most teams catch them after deployment, if at all.",
    solution:
      "An open-source skill for AI coding agents like Claude Code, Cursor, and GitHub Copilot. Install it once and it wakes up whenever the agent touches a login flow, JWT session, SQL migration, or RLS policy, checking the code against a researched list of known vulnerabilities and fixing problems inline.",
    impact:
      "The checks come from named CVEs (including CVE-2025-1094) and published OWASP and NIST standards. It also ships a standalone bash scanner with no network calls, so teams can wire it straight into CI.",
    tech: ["PostgreSQL", "Supabase", "RLS Policies", "Bash / CI", "AI Agent Tooling"],
    coverage: [
      { area: "Row-Level Security", checks: "USING(true) trap, table-owner bypass, missing FORCE RLS" },
      { area: "Password Hashing", checks: "Argon2id/bcrypt cost ≥ 12; blocks md5() and crypt() in SQL" },
      { area: "Custom JWT", checks: "Algorithm pinning, alg:none rejection, HMAC secret entropy" },
      { area: "SQL Injection", checks: "Parameterized queries, including inside PL/pgSQL EXECUTE" },
      { area: "Secret Management", checks: "No service_role keys in client bundles / NEXT_PUBLIC_ vars" },
      { area: "Rate Limiting", checks: "IP spoofing via X-Forwarded-For, race conditions" },
      { area: "Multi-Tenancy", checks: "RLS-enforced isolation, not just app-layer WHERE tenant_id" },
    ],
    standards: ["OWASP Top 10:2025", "NIST SP 800-63B", "CVE-2025-1094"],
  },
  {
    id: "a2english",
    index: "05",
    title: "A2 English Academy - Financial Management System",
    short:
      "An IELTS coaching center in Dhaka ran on paper cashbooks. I built them one portal for fees, installments, expenses, and reports, gated by role.",
    category: "Client Project · Internal Financial System",
    role: "Full-Stack Developer",
    status: "Live",
    problem:
      "A2 English Academy prepares students for IELTS and study abroad. Fees, installments, and expenses all lived in paper cashbooks and the occasional spreadsheet.",
    solution:
      "One portal now holds all of it: who paid, who owes the next installment, what was spent, and a report at the end of the month. Staff only see the financial records their role allows.",
    impact:
      "The owners can check exactly where the money stands on any given day, without waiting for someone to balance the cashbook first.",
    tech: ["React", "TypeScript", "Responsive CSS", "Auth UI", "Form UX"],
  },
]

export const skillGroups = [
  {
    title: "Frontend",
    icon: "layout" as const,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vite", "HTML5 & CSS3"],
  },
  {
    title: "Backend & Data",
    icon: "database" as const,
    skills: ["PostgreSQL", "Supabase", "Python", "SQLite", "Cloudflare Workers"],
  },
  {
    title: "Craft & Practice",
    icon: "wrench" as const,
    skills: [
      "Web Accessibility (WCAG)",
      "Responsive Design",
      "Performance",
      "UI Engineering",
      "Git & GitHub",
    ],
  },
]

export const interests = [
  "Cybersecurity",
  "Database Systems",
  "Advanced Mathematics",
  "Software Architecture",
]

export const recognitionHighlights = [
  {
    icon: "accessibility" as const,
    title: "Web Accessibility Training",
    note: "Certified",
    org: "UNICEF Agora",
    date: "Dec 2024",
  },
  {
    icon: "atom" as const,
    title: "Physics Olympiad",
    note: "National Finalist",
    org: "BDOC - Bangladesh Olympiad Challenge",
    date: "2025",
  },
  {
    icon: "earth" as const,
    title: "Earth Olympiad",
    note: "Divisional Topper",
    org: "BYEI",
    date: "Jul 2025",
  },
  {
    icon: "shield" as const,
    title: "APAC Cyber Hygiene Training",
    note: "Certified",
    org: "The Asia Foundation × SAJIDA",
    orgNote: "with CyberPeace Institute, Global Cyber Alliance, Google.org",
    date: "May 2025",
  },
]

export const recognitionAdditional = [
  {
    title: "1st Place - ECO Spark Challenge 1.0",
    note: "Quiz Competition",
    org: "DCC Nature Study Club",
  },
  {
    title: "2nd Place - IT Quiz (Junior)",
    note: "DCC Intra College CSE Fest 2025",
    org: "Dhaka Commerce College",
    date: "May 2025",
  },
  {
    title: "Workplace Communication Essentials",
    note: "Certified",
    org: "Passport to Earning Bangladesh · Generation Unlimited · Wadhwani Foundation",
    date: "Jun 2025",
  },
  {
    title: "Environment Quiz Olympiad",
    note: "Participation",
    org: "DCC Nature Study Club",
    date: "Nov 2024",
  },
  {
    title: "1st DCCSC Online Quiz",
    note: "Achievement",
    org: "DCC Science Club",
  },
  {
    title: "Bijoy Quiz Competition 2024",
    note: "Victory Day",
    org: "University of Dhaka",
  },
  {
    title: "National Earth Olympiad 2025",
    note: "Certificate of Recognition",
    org: "BYEI",
    date: "Jul 2025",
  },
  {
    title: "Manifesto Talk: Youth, Environment & Climate",
    note: "Participation",
    org: "Department of Environment",
    date: "May 2025",
  },
]

export const leadership = [
  {
    role: "Executive Treasurer",
    org: "DCC Nature Study Club",
    period: "2024-present",
    desc: "I run the finances of a 1,000+ member club as its treasurer. The treasury system the role runs on? I built that too, and the audits got a lot shorter.",
  },
  {
    role: "Volunteer",
    org: "34th Annual Cultural Competition 2025",
    orgNote: "Dhaka Commerce College",
    period: "2025",
    desc: "Setup and coordination on the floor at one of the college's biggest events of the year.",
  },
]

export const education = [
  {
    degree: "HSC - Science Group",
    school: "Dhaka Commerce College",
    period: "2024-present · HSC 2026",
    subjects: ["Higher Mathematics", "Physics", "Chemistry", "ICT"],
    current: true,
  },
  {
    degree: "SSC - Science Division",
    school: "",
    period: "Completed 2024",
    subjects: [],
    current: false,
  },
]
