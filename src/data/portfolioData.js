export const personalInfo = {
  name: "Hammad Naeem",
  tagline: "Founder & CEO at NineByte Security | Top 2% on TryHackMe",
  subTagline: "Securing systems. Building communities. Breaking things ethically.",
  email: "hammadnaeem160@gmail.com",
  profilePhoto: "/images/Firefly.png",
  resumeUrl: "/images/resume/Hammad_Naeem_Resume.pdf",
  socials: {
    github: "https://github.com/Hammad-xureshi",
    linkedin: "https://www.linkedin.com/in/hammad-naeem-b5762a384/",
    instagram: "https://www.instagram.com/hammad__qureshi110/",
    tryhackme: "https://tryhackme.com/p/HammadNaeem",
  },
};

export const aboutText = `Founder & CEO of NineByte Security — a Pakistani cybersecurity organization built from the ground up. BS Cybersecurity student at QUEST Nawabshah, active bug bounty hunter on Bugcrowd and HackerOne, and Top 2% on TryHackMe with 200+ rooms completed. I organize NineByte CTF, an annual capture-the-flag competition, and build security tools and platforms using React, Next.js, Python, and AI. My work spans ethical hacking, frontend development, security research, and community building in Pakistan's infosec space.`;

export const stats = [
  { label: "Projects Built", value: 10, icon: "rocket", suffix: "+" },
  { label: "Bug Bounty Programs", value: 10, icon: "shield", suffix: "+" },
  { label: "Certifications", value: 8, icon: "award", suffix: "+" },
  { label: "THM Rooms", value: 200, icon: "zap", suffix: "+" },
];

export const skills = {
  languages: {
    title: "Languages",
    icon: "code",
    items: ["Python", "JavaScript", "C++", "Java", "Bash", "SQL"],
  },
  frontend: {
    title: "Frontend",
    icon: "layout",
    items: ["React", "HTML5", "CSS3", "Flask", "TailwindCSS"],
  },
  backend: {
    title: "Backend",
    icon: "server",
    items: ["Node.js", "Express.js", "REST APIs", "MySQL", "PostgreSQL", "Firebase"],
  },
  cybersecurity: {
    title: "Cybersecurity",
    icon: "shield",
    items: ["Kali Linux", "Ethical Hacking", "OSINT", "Network Security", "Penetration Testing", "Bug Bounty", "Burp Suite", "Wireshark", "Bugcrowd", "HackerOne"],
  },
  tools: {
    title: "Tools",
    icon: "wrench",
    items: ["Git", "GitHub", "VS Code", "Docker", "Postman", "Figma"],
  },
  ai: {
    title: "AI / ML",
    icon: "brain",
    items: ["Machine Learning", "Gemini API", "Groq API", "Prompt Engineering", "LangChain"],
  },
};

export const projects = [
  {
    id: 1,
    title: "AI Document Studio",
    description:
      "An intelligent document processing system powered by Google's Gemini AI. Supports semantic search, automated summarization, study-material generation, and bilingual Q&A.",
    image: "/images/projects/ai-document-studio.png",
    tags: ["Python", "AI", "Gemini API", "Flask"],
    githubUrl: "https://github.com/Hammad-xureshi/doc-studio",
    featured: true,
  },
  {
    id: 2,
    title: "CyberWall — Security Monitoring System",
    description:
      "A complete cyber security monitoring system using Flask + ML (Isolation Forest) for anomaly detection, IP blacklisting, risk scoring, and real-time attack visualization dashboard.",
    image: "/images/projects/cyberwall.png",
    tags: ["Python", "Flask", "MySQL", "Machine Learning"],
    githubUrl: "https://github.com/Hammad-xureshi/OptiFlow",
    featured: true,
  },
  {
    id: 3,
    title: "Sales Analytics ERP System",
    description:
      "A full-stack Sales Analytics ERP system designed to manage sales data, customers, products, and real-time analytics.",
    image: "/images/projects/sales-analytics-erp.png",
    tags: ["Node.js", "Express.js", "PostgreSQL", "Docker", "React"],
    githubUrl: "https://github.com/Hammad-xureshi/sales-analytics",
    featured: false,
  },
  {
    id: 4,
    title: "Surface X — Bash Recon & Bug Evidence Detection",
    description:
      "A professional-grade, terminal-based reconnaissance and vulnerability evidence framework built in Bash.",
    image: "/images/projects/Surface-X.png",
    tags: ["Bash", "Penetration Testing", "Reconnaissance", "Security Tools"],
    githubUrl: "https://github.com/Hammad-xureshi/SurfaceX",
    featured: false,
  },
  {
    id: 5,
    title: "Smart Toll Management System",
    description:
      "A complete offline Smart Toll Tax Management System built with Python, featuring automatic license plate recognition.",
    image: "/images/projects/toll.png",
    tags: ["Python", "OCR", "MariaDB"],
    githubUrl: "https://github.com/Hammad-xureshi/Smart-Toll-Management-System",
    featured: false,
  },
];

export const journey = [
  {
    year: "2020",
    title: "Matriculation (10th)",
    description: "Completed Matric with Science subjects — the beginning of the tech journey.",
    icon: "🎓",
  },
  {
    year: "2022",
    title: "Intermediate (12th)",
    description: "Completed FSc / ICS — diving deeper into computer science fundamentals.",
    icon: "📚",
  },
  {
    year: "2023",
    title: "First Projects & CTFs",
    description: "Built first real-world projects, completed 8+ Udemy courses, and started solving CTF challenges.",
    icon: "💻",
  },
  {
    year: "2024",
    title: "BS Cyber Security — QUEST University",
    description: "Started BS in Cyber Security at QUEST University — learning, building, and breaking things ethically.",
    icon: "🏛️",
  },
  {
    year: "2025",
    title: "Founded NineByte Security",
    description: "Launched NineByte Security — a Pakistani cybersecurity organization. Started bug bounty hunting on Bugcrowd and HackerOne.",
    icon: "🚀",
  },
  {
    year: "2026",
    title: "CTF Wins & NineByte CTF",
    description: "Organized first NineByte CTF with 7 sponsors. Secured 2nd place in QUEST Inter-University CTF, led Cipher Squad at ATC Winter 2026, and built AI-powered security tools.",
    icon: "🤖",
  },
  {
    year: "2028",
    title: "Expected Graduation",
    description: "Graduating with expertise in Cyber Security, Python development, and AI-driven security tools.",
    icon: "🎯",
  },
];

export const ctfChallenges = [
  {
    id: 1,
    title: "NineByte CTF — Organizer & Platform Builder",
    platform: "Annual CTF",
    description:
      "Founded and organized NineByte CTF, built the CTF platform in-house using Next.js + Supabase. Partnered with sponsors including Hackviser, TryHackMe, The XSS Rat, Blackbyt3, AIRvanguard, and The Arzens.",
    image: "/images/ctf/ctf.jpeg",
    tags: ["CTF Organization", "Web", "Community", "Platform Building"],
    difficulty: "Hard",
    year: "2026",
  },
  {
    id: 2,
    title: "QUEST CTF 2026 — Team: NINE-ELEVEN",
    platform: "CTFtime",
    description:
      "Securing 2nd position in an inter-universities CTF competition has motivated us to further strengthen our skills and actively participate in future cybersecurity challenges.",
    image: "/images/ctf/ctf.jpeg",
    tags: ["SQL Injection", "Web", "OSINT", "OWASP"],
    difficulty: "Easy",
    year: "2026",
  },
  {
    id: 3,
    title: "ATC Winter 2026 CTF — Cipher Squad Leader",
    platform: "CTFtime",
    description:
      "Mastered high-pressure problem solving and strategic coordination. Successfully bypassed complex security layers while leading the Cipher Squad team to secure a global ranking.",
    image: "/images/ctf/atc-ctf1.jpeg",
    tags: ["Web", "SQL Injection", "OSINT", "OWASP"],
    difficulty: "Medium",
    year: "2026",
  },
];

export const certifications = [
  {
    id: 1,
    name: "Introduction to ICIP",
    issuer: "ICIP",
    year: "2025",
    image: "/images/certificates/introduction_to_cip.png",
  },
  {
    id: 2,
    name: "Password Cracking & Cryptography: John the Ripper & Hashcat",
    issuer: "Udemy",
    year: "2025",
    image: "/images/certificates/john-ripper-hashcat.jpg",
  },
  {
    id: 3,
    name: "Ethically Hack Human Mind — Social Engineering Fundamentals",
    issuer: "Udemy",
    year: "2025",
    image: "/images/certificates/social-engineering.jpg",
  },
  {
    id: 4,
    name: "Introduction to Bug Bounties — Main Web App Hacking",
    issuer: "Udemy",
    year: "2025",
    image: "/images/certificates/bug-bounty.jpg",
  },
  {
    id: 5,
    name: "Python Web Scraping Data Extraction with Beautiful Soup",
    issuer: "Udemy",
    year: "2025",
    image: "/images/certificates/web-scraping.jpg",
  },
  {
    id: 6,
    name: "25 ADVENT OF CYBER THM",
    issuer: "TRYHACKME",
    year: "2025",
    image: "/images/certificates/zero-trust.jpg",
  },
  {
    id: 7,
    name: "CEH (Certified Ethical Hacker)",
    issuer: "PITP",
    year: "2025",
    image: "/images/certificates/dsa-python.jpeg",
  },
  {
    id: 8,
    name: "Guided Lab: File Upload Attacks",
    issuer: "Hacksmarter",
    year: "2026",
    image: "/images/certificates/hacksmarter.jpg",
  },

];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "CTF", href: "#ctf" },
  { label: "Journey", href: "#journey" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
