export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  features?: string[];
  accentColor: string;
  demoUrl?: string; // Configurable: populate when live demo is available
  githubUrl?: string; // Configurable: populate when repository is public
}

export interface Experience {
  id: string;
  number: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  points: string[];
  skills?: string[];
  credentialNote?: string;
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  date: string;
  credentialId?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  notes?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: string[];
}

export interface PortfolioData {
  profile: {
    name: string;
    initials: string;
    headline: string;
    eyebrow: string;
    location: string;
    email: string;
    phone: string;
    phoneFormatted: string;
    languages: string[];
    socials: {
      linkedin: string;
      github: string;
    };
    photoUrl?: string;
    heroBio: string;
    aboutBio: string;
  };
  metrics: {
    graduationYear: string;
    internships: number;
    certifications: number;
  };
  projects: Project[];
  experience: Experience[];
  skills: SkillCategory[];
  certifications: Certification[];
  education: Education[];
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Arjun T P",
    initials: "ATP",
    headline: "I build software that turns ideas into useful solutions.",
    eyebrow: "MCA STUDENT · SOFTWARE DEVELOPER · AI/ML ENTHUSIAST",
    location: "Kottayam / Kerala, India",
    email: "arjunt397@gmail.com",
    phone: "+919037548996",
    phoneFormatted: "+91 90375 48996",
    languages: ["English", "Hindi", "Malayalam"],
    socials: {
      linkedin: "#", // Update with your verified LinkedIn profile URL
      github: "#", // Update with your verified GitHub profile URL
    },
    photoUrl: "/arjun-profile.jpg",
    heroBio:
      "Master of Computer Applications student with strong foundations in programming, database systems, and AI/ML, developed through rigorous academic coursework, four targeted internships, and practical software projects.",
    aboutBio:
      "I'm an MCA student at Saintgits College of Engineering with a strong foundation in programming, database management and AI/ML. I enjoy solving practical problems, learning new technologies and turning ideas into working software.",
  },

  metrics: {
    graduationYear: "2027",
    internships: 4,
    certifications: 6,
  },

  projects: [
    {
      id: "big-days",
      number: "01",
      name: "Big Days",
      category: "Event Management Application",
      tagline: "End-to-end event coordination and scheduling workflow",
      description:
        "An application for organising events, managing registrations and scheduling, designed to streamline event coordination workflows.",
      technologies: ["Java", "MySQL", "Scheduling"],
      accentColor: "#2563EB",
      demoUrl: "", // Editable: configure when URL is live
      githubUrl: "", // Editable: configure when repo is public
    },
    {
      id: "code-nexus",
      number: "02",
      name: "Code Nexus",
      category: "Collaboration Platform",
      tagline: "Developer synchronization and agile team productivity",
      description:
        "A software platform focused on coding collaboration and project management, using programming and database skills to improve team productivity.",
      technologies: ["Python", "MySQL", "Project Management"],
      accentColor: "#4F46E5",
      demoUrl: "", // Editable: configure when URL is live
      githubUrl: "", // Editable: configure when repo is public
    },
  ],

  experience: [
    {
      id: "exp-nextgenpro",
      number: "01",
      role: "AI-ML Intensive Internship",
      company: "NextgenPro Innovations & Edupark Pvt. Ltd",
      location: "Cochin, Kerala",
      period: "May – Jun 2026",
      points: [
        "Completed a 14-day intensive programme focused on AI/ML concepts, algorithms, and practical implementation.",
        "Certified by an ISO 9001:2015 company endorsed by the Ministry of MSME, Govt. of India.",
      ],
      skills: ["AI / ML Algorithms", "Python", "Practical Implementation"],
      credentialNote: "ISO 9001:2015 Certified · Endorsed by Ministry of MSME",
    },
    {
      id: "exp-spectrum",
      number: "02",
      role: "Software Development Internship",
      company: "Spectrum Softtech Solutions Pvt. Ltd",
      location: "Kochi, Kerala",
      period: "Jun 2025",
      points: [
        "Curriculum-based industrial internship focused on Python development in a professional IT environment.",
        "Recognised by senior management for diligence and inquisitiveness.",
      ],
      skills: ["Python", "Software Development", "Enterprise IT Workflows"],
      credentialNote: "Recognised for diligence and inquisitive problem solving",
    },
    {
      id: "exp-shristi",
      number: "03",
      role: "Python / AI & ML Internship",
      company: "Shristi Innovative",
      location: "Techno Park, Kerala",
      period: "Jun – Jul 2024",
      points: [
        "Worked with missing and unstructured data, cleaning and preparing real-world datasets.",
        "Worked with ML models and explored core artificial intelligence concepts.",
        "Utilized Python, NumPy, Pandas, and machine-learning workspaces.",
      ],
      skills: ["Python", "NumPy", "Pandas", "ML Models", "Data Preprocessing"],
    },
    {
      id: "exp-tisser",
      number: "04",
      role: "Python / AI & ML Internship",
      company: "Tisser Technologies",
      location: "Kottayam, Kerala",
      period: "Jun – Jul 2024",
      points: [
        "Applied machine-learning models and data-preprocessing techniques in a professional software environment.",
      ],
      skills: ["Machine Learning", "Data Preprocessing", "Python"],
    },
  ],

  skills: [
    {
      name: "Programming",
      description: "Core languages for building reliable software applications",
      skills: ["Java", "Python", "C"],
    },
    {
      name: "Database",
      description: "Relational database schema design and querying",
      skills: ["MySQL", "SQL"],
    },
    {
      name: "AI / ML",
      description: "Data preparation, numerical processing, and model workflows",
      skills: ["NumPy", "Pandas", "Scikit-learn", "ML Models"],
    },
    {
      name: "Tools",
      description: "Version control and collaborative software tooling",
      skills: ["Git", "GitHub"],
    },
    {
      name: "Core Strengths",
      description: "Foundational problem solving and analytical competencies",
      skills: [
        "Problem Solving",
        "Logical Thinking",
        "Data Handling",
        "Software Development Fundamentals",
      ],
    },
  ],

  certifications: [
    {
      id: "cert-infosys-ds",
      name: "Introduction to Data Science",
      organization: "Infosys Springboard",
      date: "Aug 2024",
    },
    {
      id: "cert-infosys-rpa",
      name: "Intro to Robotic Process Automation",
      organization: "Infosys Springboard",
      date: "Aug 2024",
    },
    {
      id: "cert-ibm-bd101",
      name: "Big Data 101",
      organization: "IBM SkillsBuild",
      date: "Feb 2023",
      credentialId: "BD0101EN",
    },
    {
      id: "cert-ibm-cloud-v3",
      name: "IBM Cloud Essentials V3",
      organization: "IBM SkillsBuild",
      date: "Feb 2023",
    },
    {
      id: "cert-ibm-cloud-intro",
      name: "Introduction to Cloud",
      organization: "IBM SkillsBuild",
      date: "Jan 2023",
      credentialId: "CC0101EN",
    },
    {
      id: "cert-bootstrap-iitb",
      name: "Bootstrap — Student Training Programme",
      organization: "Saintgits / IIT Bombay Spoken Tutorial",
      date: "Dec 2024 – Jan 2025",
    },
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Saintgits College of Engineering",
      location: "Kerala, India",
      period: "2025 — 2027",
      status: "In Progress (Expected 2027)",
      notes: "Focusing on advanced software development, database systems, and AI/ML applications.",
    },
  ],
};
