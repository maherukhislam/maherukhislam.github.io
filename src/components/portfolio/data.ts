export const profile = {
  name: "Md. Maherukh Islam",
  role: "Junior Web Developer",
  secondaryRole: "Student Developer",
  tagline:
    "Junior web developer in Dhaka. I build and maintain web platforms for local organizations.",
  location: "Dhaka, Bangladesh",
  email: "maherukhislam2007@gmail.com",
  availability: "Open for select web & product work",
  educationNote: "Science Group · Dhaka Commerce College",
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
  { name: "HTML", icon: "code" as const },
  { name: "Web Development", icon: "code" as const },
  { name: "Full-Stack Development", icon: "code" as const },
  { name: "Web Infrastructure", icon: "cloud" as const },
  { name: "User Interface Design", icon: "palette" as const },
]

export const stats: { value: number; suffix?: string; label: string }[] = [
  { value: 4, label: "Live platforms" },
  { value: 1000, suffix: "+", label: "Club members" },
  { value: 3, label: "Organizations served" },
  { value: 1, label: "Open-source security tool" },
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
      "DCC Nature Study Club had more than 1,000 members and no website. I built its first one, with club news, student writing, and online membership registration.",
    url: "https://dccnsc.org",
    urlLabel: "dccnsc.org",
    category: "Web Platform · Full-Stack",
    timeline: "2025-present",
    role: "Full-Stack Developer",
    status: "Live",
    problem:
      "The club had more than 1,000 members, but no website. News was posted on paper and across Facebook, and joining meant filling out a paper form.",
    solution:
      "I designed and built the official site myself: events, a blog where students publish their own writing, a photo gallery, club achievements, the committee directory, and online membership registration.",
    impact:
      "Members can register online, and the committee has one link to share for club news and activities.",
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
      "I built the club's finance portal and use it as treasurer. It keeps receipts and finance records together, with access based on each member's role.",
    url: "https://finance.dccnsc.org",
    urlLabel: "finance.dccnsc.org",
    category: "Internal Tool / Infrastructure",
    timeline: "2025",
    role: "Developer & Executive Treasurer",
    status: "Live",
    problem:
      "Club finances lived in paper logs and spreadsheets. Reviewing the records meant checking them by hand.",
    solution:
      "I built a login-only portal with React 19, Zustand, and Supabase. Members see the records their role allows, receipts are signed, and finance actions are logged.",
    impact:
      "Finance records now live in one place, with a log that shows what changed and when.",
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
      "I built a portal for A2 Abroad's student applications. Students, consultants, and administrators each have a view for their part of the process.",
    category: "Client Project · Full-Stack Web Portal",
    role: "Full-Stack Developer",
    status: "Live",
    problem:
      "A2 Abroad helps students apply to programs in the UK, New Zealand, Malaysia, South Korea, and Hungary. Staff tracked inquiries, documents, and counseling by hand.",
    solution:
      "Students can register, submit their details, and check their progress. Consultants see their assigned students, while administrators handle expenses and reports.",
    impact:
      "Students can check application progress in the portal, and staff can follow the same process from one place.",
    tech: ["React", "TypeScript"],
  },
  {
    id: "pg-auth",
    index: "04",
    title: "Postgres Auth Security Review",
    short:
      "An open-source skill that helps AI coding agents find common PostgreSQL and Supabase auth problems, including weak password hashing, RLS gaps, and exposed secrets. MIT, v1.4.0.",
    category: "Open-Source Tool · Agent Skill",
    role: "Creator & Maintainer",
    status: "Open Source",
    version: "v1.4.0",
    license: "MIT",
    problem:
      "The same auth bugs show up in database code again and again: RLS gaps, weak hashing, secrets committed to the repo. Most teams catch them after deployment, if at all.",
    solution:
      "The skill checks login flows, JWT sessions, SQL migrations, and RLS policies as an AI coding agent works. It also includes a Bash scanner that teams can run on its own.",
    impact:
      "Its checks include CVE-2025-1094 and guidance from OWASP and NIST. The standalone scanner makes no network calls and can run in CI.",
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
      "I built a finance portal for an IELTS academy to track fees, installments, expenses, and reports, with access set by staff role.",
    category: "Client Project · Internal Financial System",
    role: "Full-Stack Developer",
    status: "Live",
    problem:
      "A2 English Academy prepares students for IELTS and study abroad. Staff tracked fees, installments, and expenses in cashbooks and spreadsheets.",
    solution:
      "The portal records payments, upcoming installments, expenses, and monthly reports. Staff can see records allowed by their role.",
    impact:
      "The owners can check the academy's recorded income and expenses without waiting for a manual cashbook review.",
    tech: ["React", "TypeScript"],
  },
]

export const skillGroups = [
  {
    title: "Frontend",
    icon: "layout" as const,
    skills: ["React", "TypeScript", "JavaScript", "HTML", "Tailwind CSS", "Next.js", "Vite", "HTML5 & CSS3"],
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
  {
    title: "Web Development",
    icon: "wrench" as const,
    skills: ["Web Development", "Full-Stack Development", "Web Infrastructure", "User Interface Design"],
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
    title: "1st DCCSC Online Quiz",
    note: "Achievement",
    org: "DCC Science Club",
  },
  {
    title: "National Earth Olympiad 2025",
    note: "Certificate of Recognition",
    org: "BYEI",
    date: "Jul 2025",
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

export const experience = [
  {
    role: "Junior Web Developer",
    org: "A2 Abroad & A2 English Academy",
    period: "Sep 2026–present",
    location: "Mirpur, Dhaka, Bangladesh",
    arrangement: "Contract · Hybrid",
    desc: "I work on the websites and tools students use at A2 Abroad and A2 English Academy. I build features, fix issues, and help keep the platforms running. I first worked on the academy’s student portal as a project; now I’m continuing that work in a contract role.",
  },
]

export const education: {
  degree: string
  school: string
  period: string
  subjects: string[]
  current: boolean
  next?: string
}[] = [
  {
    degree: "HSC - Science Group",
    school: "Dhaka Commerce College",
    period: "2024-present",
    subjects: ["Higher Mathematics", "Physics", "Chemistry", "ICT"],
    current: true,
    next: "Planning to study CS or software engineering next",
  },
]
