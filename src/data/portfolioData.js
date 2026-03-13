export const personalInfo = {
  name: "Hammad Naeem",
  tagline: "Front-End Developer & Top 2% on TryHackMe",
  subTagline: "Building digital experiences. Breaking things ethically.",
  email: "hammadnaeem160@gmail.com",
  profilePhoto: "/images/profile.jpg",
  resumeUrl: "/images/resume/Hammad_Naeem_Resume.pdf",
  socials: {
    github: "https://github.com/Hammad-xureshi",
    linkedin: "https://www.linkedin.com/in/hammad-naeem-b5762a384/",
    instagram: "https://www.instagram.com/hammad__qureshi110/#",
    tryhackme: "https://tryhackme.com/p/HammadNaeem",
  },
};

export const aboutText = `I am a Cyber Security student at QUEST University, passionate about ethical hacking, red teaming, and building secure systems. My focus is on Python automation, AI-based tools, and real-time security monitoring systems. I have developed intelligent systems such as AI Document Studio and CyberWall Security Dashboard by combining Python, Machine Learning, and backend development. My work revolves around building practical, real-world solutions that enhance digital security. I am continuously exploring new areas like penetration testing, network analysis, security automation, and AI-driven threat detection through online courses and hands-on projects.`;

export const stats = [
  { label: "Projects Built", value: 5, icon: "🚀", suffix: "+" },
  { label: "CTFs Completed", value: 2, icon: "🛡️", suffix: "+" },
  { label: "Certifications", value: 8, icon: "📜", suffix: "+" },
  { label: "Technologies", value: 25, icon: "⚡", suffix: "+" },
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
    items: ["Kali Linux", "Ethical Hacking", "OSINT", "Network Security", "Penetration Testing", "Bug Bounty", "Burp Suite", "Wireshark"],
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

export const ctfChallenges = [
  {
    id: 1,
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
    id: 2,
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
    year: "2024",
    title: "BS Cyber Security — QUEST University",
    description: "Started BS in Cyber Security at QUEST University — learning, building, and breaking things ethically.",
    icon: "🏛️",
  },
  {
    year: "2023",
    title: "First Projects & CTFs",
    description: "Built first real-world projects, completed 8+ Udemy courses, and started solving CTF challenges.",
    icon: "💻",
  },
  {
    year: "2026",
    title: "CTF Wins & AI Focus",
    description: "Secured 2nd place in QUEST Inter-University CTF, led Cipher Squad at ATC Winter 2026, and built AI-powered security tools.",
    icon: "🤖",
  },
  {
    year: "2028",
    title: "Expected Graduation",
    description: "Graduating with expertise in Cyber Security, Python development, and AI-driven security tools.",
    icon: "🎯",
  },
];

export const certifications = [
  {
    id: 1,
    name: "introduction to ICIP",
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
