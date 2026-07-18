export const personalInfo = {
  name: "MANOJ KUMAR",
  firstName: "Manoj",
  lastName: "Kumar",
  title: "Software Development Engineer | Full Stack Developer | AI Enthusiast",
  location: "Vijayawada, Andhra Pradesh, India",
  email: "vandanamanojkumar13@gmail.com",
  phone: "+91 9550107580",
  linkedin: "https://www.linkedin.com/in/manoj-kumar-61b308422",
  github: "https://github.com/Manojkumar13-ux",
  leetcode: "https://leetcode.com/u/manojkumar1290/",
  resumeUrl: "/Manojkumar18.pdf",
};

export const hero = {
  headline: "Software Development Engineer",
  subheading: "Building AI-powered Full Stack Applications that solve real-world problems.",
  typingTexts: ["Full Stack Developer", "AI Developer", "Java Developer", "React Developer", "Backend Engineer"],
};

export const about = {
  introduction: "I'm a Software Development Engineer passionate about building scalable full-stack web applications and AI-powered developer tools.",
  description: "I enjoy solving real-world problems using Java, React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Docker, and modern software engineering practices. I have built multiple production-ready projects ranging from AI-powered coding platforms to ATS Resume Analyzers and full-scale social networking applications. Currently focused on improving my Data Structures & Algorithms skills while building high-quality software products.",
};

export const skills = {
  "Programming Languages": ["Java", "JavaScript", "TypeScript", "Python", "SQL"],
  Frontend: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Database: ["MongoDB", "PostgreSQL", "MySQL"],
  "Developer Tools": ["Git", "GitHub", "Docker", "Postman", "VS Code"],
  "Core CS": ["Data Structures", "Algorithms", "OOP", "Operating Systems", "DBMS", "Computer Networks"],
};

export interface Project {
  id: number; title: string; description: string; tech: string[];
  highlights: string[]; github: string; live: string; color: string;
}

export const projects: Project[] = [
  {
    id: 1, title: "Collaborative Real-Time Canvas", color: "#f03e3e",
    description: "Real-time collaborative infinite canvas inspired by Figma and Miro enabling multiple authenticated users to draw, edit, and collaborate simultaneously using Yjs CRDTs and WebSockets.",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Yjs", "WebSockets", "Tailwind CSS", "NextAuth"],
    highlights: ["Real-time cursors", "Role-based access", "Undo/redo", "Version history", "Light/Dark themes"],
    github: "https://github.com/Manojkumar13-ux/Collaborative-Real-Time-Canvas",
    live: "https://collaborative-real-time-canvas-web.vercel.app/",
  },
  {
    id: 2, title: "DevPilot AI", color: "#3b82f6",
    description: "AI-powered coding interview platform with Docker sandbox execution, AI code reviews, coding problems, follow-up interviews, analytics dashboard, leaderboard, and admin panel.",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Docker", "Monaco Editor"],
    highlights: ["Docker sandbox", "AI code review", "Leaderboards", "Analytics", "Auth", "REST APIs"],
    github: "https://github.com/Manojkumar13-ux/devpilot-ai",
    live: "https://devpilot-ai-ochre.vercel.app/",
  },
  {
    id: 3, title: "Zenthra", color: "#8b5cf6",
    description: "Modern AI-powered social networking platform featuring authentication, messaging, communities, notifications, media uploads, trending hashtags, dark mode, and responsive design.",
    tech: ["Next.js", "React", "TypeScript", "MongoDB", "NextAuth", "Socket.io", "Cloudinary", "Tailwind CSS"],
    highlights: ["Messaging", "Communities", "Notifications", "Auth", "Responsive UI"],
    github: "https://github.com/Manojkumar13-ux/Zenthra",
    live: "https://zenthra-xi.vercel.app/",
  },
  {
    id: 4, title: "AI Resume Intelligence Pro", color: "#10b981",
    description: "AI-powered ATS Resume Analyzer with authentication, resume upload, keyword extraction, scoring, AI suggestions, and resume history.",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT"],
    highlights: ["Resume Analysis", "ATS Score", "Keyword Extraction", "Auth", "History"],
    github: "https://github.com/Manojkumar13-ux/AI-Resume-Intelligence-pro",
    live: "https://ai-resume-intellegence-pro.vercel.app/",
  },
  {
    id: 5, title: "Ciniverse", color: "#f59e0b",
    description: "Movie discovery platform powered by TMDB API featuring trending movies, anime, TV shows, responsive UI, and optimized browsing experience.",
    tech: ["Next.js", "TypeScript", "TMDB API"],
    highlights: ["Trending Movies", "Anime", "TV Shows", "Responsive UI"],
    github: "https://github.com/Manojkumar13-ux/CINIVERSE",
    live: "https://ciniverse-file-project-1.vercel.app/",
  },
];

export const experience = [
  { id: 1, period: "2021 - 2025", role: "Computer Science & Engineering", company: "Nehru Institute of Engineering and Technology", description: "Bachelor of Engineering degree with focus on software development, data structures, and algorithms.", tags: ["DSA", "Java", "Web Development"] },
  { id: 2, period: "2024 - Present", role: "Full Stack Developer", company: "Self-Employed / Freelance", description: "Built multiple production-ready AI-powered full stack applications including DevPilot AI, Zenthra, and AI Resume Intelligence Pro.", tags: ["React", "Next.js", "Node.js", "AI"] },
  { id: 3, period: "Open to Work", role: "Software Development Engineer", company: "Seeking Opportunities at Top Product Companies", description: "Actively looking for SDE roles at top product companies. Strong foundation in DSA, system design, and full-stack development.", tags: ["Open to Work", "SDE", "Full Stack"] },
];

export const education = { institution: "Nehru Institute of Engineering and Technology", degree: "Bachelor of Engineering", field: "Computer Science and Engineering", period: "2021 - 2025", cgpa: "7.30/10" };

export interface Certification {
  title: string; issuer: string; date: string; link: string;
}

export const certifications: Certification[] = [
  { title: "Introduction to Cloud Job Simulation", issuer: "Datacom (Forage)", date: "Jul 2026", link: "https://www.theforage.com/completion-certificates/gCW7Xki5Y3vNpBmnn/qsuRRyXDZ7Dj2QFx4_gCW7Xki5Y3vNpBmnn_693a6ad6f94bb69f9cb2d736_1784275834067_completion_certificate.pdf" },
  { title: "Introduction to Cybersecurity Job Simulation", issuer: "Commonwealth Bank (Forage)", date: "Jul 2026", link: "https://www.theforage.com/completion-certificates/2sNmYuurxgpFYawco/x52Jy9s26xNbZkTQ7_2sNmYuurxgpFYawco_693a6ad6f94bb69f9cb2d736_1784275595075_completion_certificate.pdf" },
  { title: "Advanced Software Engineering Job Simulation", issuer: "Walmart USA (Forage)", date: "Jul 2026", link: "https://www.theforage.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_693a6ad6f94bb69f9cb2d736_1784272219631_completion_certificate.pdf" },
];

export const achievements = [
  "Solved 150+ Data Structures & Algorithms problems on LeetCode",
  "Building production-ready AI-powered Full Stack applications",
  "Graduated in Computer Science and Engineering (2025)",
];

export const socialLinks = [
  { name: "Email", url: `mailto:${personalInfo.email}`, icon: "Mail" },
  { name: "Phone", url: `tel:${personalInfo.phone}`, icon: "Phone" },
  { name: "LinkedIn", url: personalInfo.linkedin, icon: "Linkedin" },
  { name: "GitHub", url: personalInfo.github, icon: "Github" },
  { name: "LeetCode", url: personalInfo.leetcode, icon: "Code" },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
