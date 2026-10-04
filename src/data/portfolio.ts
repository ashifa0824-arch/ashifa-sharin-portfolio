export type PortfolioLink = {
  label: string;
  href: string;
};

export type PortfolioProject = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
};

export type PortfolioEntry = {
  title: string;
  detail?: string;
  year?: string;
};

export type FocusArea = {
  title: string;
  description: string;
  symbol: string;
};

export type EducationQualification = {
  course: string;
  institution: string;
  board: string;
  year: string;
  result: string;
};

type PortfolioContent = {
  name: string;
  shortName: string;
  role: string;
  introduction: string;
  education: {
    degree: string;
    institution: string;
    qualifications: EducationQualification[];
  };
  focus: FocusArea[];
  toolkit: string[];
  projects: PortfolioProject[];
  hackathons: PortfolioEntry[];
  achievements: PortfolioEntry[];
  certificates: PortfolioEntry[];
  hobbies: string[];
  languages: string[];
  profilePhoto: string;
  japanese: {
    headline: string;
    description: string;
    progression: {
      level: string;
      label: string;
      status: "complete" | "current" | "upcoming";
    }[];
    careerFocus: {
      title: string;
      description: string;
      badge: string;
    };
    reasons: string[];
    currentLearning: string[];
    decorativeText: string[];
  };
  contactEmail: string;
  contactPhone: string;
  links: PortfolioLink[];
};

export const portfolio: PortfolioContent = {
  name: "Ashifa sharin Y",
  shortName: "Ashifa",
  role: "Computer Science Student",
  introduction:
    "I’m a computer science student drawn to the places where intelligent systems meet digital security. I’m building a strong foundation in both—and looking for thoughtful problems to explore.",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "SRM Institute of Science and Technology",
    qualifications: [
      {
        course: "B.Tech – Computer Science and Engineering (Core)",
        institution: "SRM Institute of Science and Technology",
        board: "SRM University",
        year: "Pursuing (2025 – 2029)",
        result: "—",
      },
      {
        course: "Higher Secondary (XII)",
        institution: "Sri Bharathi Matric Higher Secondary School",
        board: "State Board",
        year: "2025",
        result: "88.83 %",
      },
      {
        course: "Secondary School (X)",
        institution: "Sri Bharathi Matric Higher Secondary School",
        board: "State Board",
        year: "2023",
        result: "93 %",
      },
    ],
  },
  focus: [
    {
      title: "Cybersecurity",
      description:
        "Understanding how to protect systems, data, and the people who rely on them.",
      symbol: "⌘",
    },
    {
      title: "Artificial intelligence",
      description:
        "Exploring how intelligent systems can help solve meaningful, real-world problems.",
      symbol: "✳",
    },
    {
      title: "Machine learning",
      description:
        "Learning how models find patterns, make predictions, and improve through data.",
      symbol: "↗",
    },
  ],
  toolkit: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  projects: [
    {
      title: "AI Shadow Government",
      description:
        "A Smart Cities policy simulation and decision-support platform for urban public transport. It addresses challenges including congestion, changing passenger demand, limited infrastructure, and rising costs. Historical MTC performance data is stored in SQLite; users choose a policy, adjust its intensity, and simulate projected effects on traffic, environmental impact, ridership, citizen benefit, and infrastructure demand. Dashboards compare historical performance, simulation results, and policy-intensity sensitivity, with AI-assisted insights into potential benefits and trade-offs.",
      tags: ["Smart Governance", "AI", "Smart Cities", "Python", "SQLite"],
    },
    {
      title: "Japanese Expense Tracker",
      description:
        "A smart, voice-first expense tracker designed for Japanese language learners. Users speak expenses in natural Japanese; speech-to-text transcribes them, then an AI parser extracts the item, price, and category and saves the result to an expense sheet. Track spending while practicing Japanese—without manual entry.",
      tags: ["React", "Web Speech API / Whisper", "Gemini AI", "Local Storage / Google Sheets"],
    },
    {
      title: "Student Database",
      description:
        "A structured MySQL database for maintaining academic and personal student information.",
      tags: ["MySQL", "Database Design"],
    },
    {
      title: "Library Management System",
      description:
        "A console-based C program for managing library records, using file handling and structures to organize stored information.",
      tags: ["C", "File Handling", "Structures"],
    },
  ],
  hackathons: [
    { title: "TensorFlow 2.0" },
    { title: "Yuva Megathon" },
    { title: "Workshops" },
  ],
  achievements: [
    { title: "Japanese N5 Certified" },
    { title: "Paper Presentation" },
  ],
  certificates: [
    { title: "Microsoft", detail: "Introduction to Cloud Computing" },
    { title: "MongoDB", detail: "Database Management" },
    { title: "Celonis", detail: "Process Mining Essentials" },
  ],
  hobbies: ["Coding", "Listening to music", "Drawing", "Singing"],
  languages: ["Tamil", "English", "Japanese"],
  profilePhoto: "/profile-photo.jpg",
  japanese: {
    headline:
      "Japanese Language Learner — JLPT N5 Certified | Currently Preparing for JLPT N4",
    description:
      "I have completed JLPT N5-level Japanese and am currently progressing toward N4. I am developing my Japanese communication, vocabulary, kanji, grammar, reading, listening, and technical terminology skills with the long-term goal of working with Japanese technology companies and exploring software engineering, AI/ML, and cybersecurity opportunities connected to Japan.",
    progression: [
      { level: "N5", label: "Completed", status: "complete" },
      { level: "N4", label: "Current focus", status: "current" },
      { level: "N3", label: "Next milestone", status: "upcoming" },
      { level: "N2", label: "Long-term goal", status: "upcoming" },
      { level: "PRO", label: "Professional Japanese", status: "upcoming" },
    ],
    careerFocus: {
      title: "Japan × Technology",
      description:
        "I aim to combine my technical background in Computer Science with Japanese language skills to explore future opportunities involving Japanese technology companies, software development, AI/ML, cybersecurity, research, internships, and international technology collaboration.",
      badge: "CSE × AI/ML × Cybersecurity × Japanese",
    },
    reasons: [
      "Interest in Japan’s technology and engineering ecosystem",
      "Goal of communicating with Japanese teams and professionals",
      "Interest in Japanese software, AI, robotics, cybersecurity, and emerging technologies",
      "Long-term goal of exploring Japan-related internships and career opportunities",
    ],
    currentLearning: [
      "Grammar",
      "Vocabulary",
      "Kanji",
      "Reading",
      "Listening",
      "Conversation",
      "Technical Japanese",
    ],
    decorativeText: ["日本語", "技術", "未来"],
  },
  contactEmail: "as6202@srmist.edu.in",
  contactPhone: "8667827318",
  links: [],
};
