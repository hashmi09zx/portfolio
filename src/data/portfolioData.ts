export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  longDescription: string;
  problem?: string;
  solution?: string;
  image: string;
  gallery: string[];
  client: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  homeTechnologies: string[];
  technologies: string[];
  highlights?: string[];
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  location: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  score: string;
  location: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  metric: string;
  subtitle: string;
  description: string;
}

export const PORTFOLIO_USER = {
  name: "Abdullah Hashmi",
  role: "AI & SOFTWARE ENGINEER",
  title: "Building intelligent software systems across Agentic AI, Computer Vision, RAG, and backend development.",
  bio: "AI & Software Engineer building practical systems with Agentic AI, Computer Vision, RAG, and backend technologies.",
  avatar: "/images/mypic.png",
  resumeUrl: "/Abdullah_Hashmi_Resume.pdf",
  location: "New Delhi, India",
  phone: "+91-9835445727",
  email: "abdullahhashmi24012006@gmail.com",
  status: "OPEN FOR AI & SOFTWARE ENGINEERING ROLES",
  stats: [
    { value: "2nd Runner-Up", label: "Hackers' Playground", sublabel: "1000+ Teams" },
    { value: "250+", label: "LeetCode", sublabel: "Problems Solved" },
    { value: "150+", label: "Students", sublabel: "Trained at AMU" }
  ],
  socials: {
    github: "https://github.com/hashmi09zx",
    linkedin: "https://linkedin.com",
    email: "mailto:abdullahhashmi24012006@gmail.com",
    phone: "tel:+919835445727"
  }
};

export const EDUCATION_LIST: Education[] = [
  {
    id: "edu-1",
    institution: "University School of Automation & Robotics, GGSIPU",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    period: "Aug 2024 – July 2027",
    score: "CGPA: 9.02/10.0",
    location: "New Delhi"
  },
  {
    id: "edu-2",
    institution: "Aligarh Muslim University",
    degree: "Diploma in Computer Engineering",
    period: "Aug 2021 – July 2024",
    score: "CGPA: 9.91/10.0",
    location: "Aligarh, Uttar Pradesh"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    company: "PictureTime Digiplex Private Limited",
    companyUrl: "https://picturetime.in/",
    role: "Software Engineer Intern",
    period: "Mar 2026 – Jun 2026",
    description: "Maintained web app, admin dashboard, and mobile application while automating operational workflows to boost system performance and reliability.",
    highlights: [
      "Maintained web app, admin dashboard, and mobile application.",
      "Automated operational workflows, reducing manual effort and improving system reliability."
    ],
    location: "On-site / Hybrid"
  },
  {
    id: "exp-2",
    company: "Prodigal AI Technologies Pvt. Ltd.",
    companyUrl: "https://www.prodigalai.com/",
    role: "Automation & Python Intern",
    period: "Jul 2025 – Aug 2025",
    description: "Engineered automated reporting bots leveraging Python and Telegram Bot API.",
    highlights: [
      "Developed a Python Telegram bot using the Telegram Bot API to automate reporting workflows including command handling, parsing, and validation.",
      "Reduced manual effort by 90%."
    ],
    location: "Remote"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    slug: "echopath",
    title: "EchoPath",
    category: "Mobile AI & Accessibility",
    tag: "ON-DEVICE AI / COMPUTER VISION",
    description: "Real-time, fully on-device mobile AI navigation system for blind and visually impaired users using only a smartphone camera.",
    longDescription: "EchoPath is a real-time, fully on-device mobile AI system enabling blind and visually impaired users to navigate safely using only a smartphone camera, requiring no specialized hardware. It features continuous object detection with distance/direction estimation and priority-based hazard scoring to reduce alert fatigue, delivering spoken guidance via TTS. Designed for fully offline operation, it ensures low-latency inference and total on-device privacy with zero camera data leaving the device.",
    problem: "Visually impaired individuals face safety risks navigating dynamic indoor and outdoor environments without real-time spatial guidance, while existing hardware solutions are costly or require continuous cloud connectivity.",
    solution: "EchoPath turns any standard smartphone into an intelligent navigation assistant using 100% on-device neural network inference and custom spatial hazard scoring.",
    image: "/images/echopath.png",
    gallery: [
      "/images/echopath.png"
    ],
    client: "Accessibility Research",
    year: "2026",
    githubUrl: "https://github.com/hashmi09zx/EchoPath",
    liveUrl: undefined,
    homeTechnologies: ["Flutter", "TensorFlow Lite", "TTS"],
    technologies: ["Flutter", "TensorFlow Lite", "On-Device Computer Vision", "TTS"],
    highlights: [
      "On-device continuous object detection with distance/direction estimation",
      "Priority-based hazard scoring to prevent alert fatigue",
      "Spoken guidance via Text-to-Speech (TTS)",
      "100% offline low-latency inference ensuring complete user privacy"
    ],
    featured: true
  },
  {
    id: "proj-2",
    slug: "govlens-ai",
    title: "GovLens AI",
    category: "Agentic AI & Multi-Agent Systems",
    tag: "AGENTIC AI / MULTI-AGENT SYSTEMS",
    description: "Agentic AI platform researching and verifying government recruitment exam details through multi-agent LangGraph workflows.",
    longDescription: "GovLens AI is an agentic AI platform that researches and verifies government recruitment exam details through a multi-agent LangGraph workflow across official and secondary sources. It features source-authority classification and conflict-resolution pipelines that compare government and secondary sources before presenting evidence-backed results. Deployed with a Next.js frontend on Vercel and FastAPI backend on Render using Groq-powered LLMs, web search, SQLite persistence, and Docker. Generates structured PDF reports.",
    problem: "Government recruitment exam notices are scattered across unorganized official portals and secondary blogs, causing widespread misinformation regarding eligibility, dates, and syllabus updates.",
    solution: "GovLens AI automates deep web research and evidence verification using autonomous agent nodes that resolve conflicting reports across official and secondary domains.",
    image: "/images/govlens.png",
    gallery: [
      "/images/govlens.png"
    ],
    client: "Government Research Tech",
    year: "2025",
    githubUrl: "https://github.com/hashmi09zx/GovLens-AI",
    liveUrl: "https://govlens-ai.vercel.app/",
    homeTechnologies: ["LangGraph", "FastAPI", "Next.js"],
    technologies: ["Python", "LangGraph", "Multi-Agent Systems", "FastAPI", "Next.js", "Docker", "SQLite", "Groq"],
    highlights: [
      "Multi-agent LangGraph workflow across official and secondary sources",
      "Source-authority classification & conflict-resolution pipelines",
      "Groq-powered LLMs with SQLite persistence & Docker containerization",
      "Structured PDF report generation & Next.js frontend"
    ],
    featured: true
  },
  {
    id: "proj-3",
    slug: "aws-usar-rag-chatbot",
    title: "AWS-USAR RAG Chatbot",
    category: "RAG & Vector Search",
    tag: "RAG / DOCUMENT INTELLIGENCE",
    description: "Retrieval-Augmented Generation chatbot using LangChain, Pinecone, and Gemini for querying PDF and DOCX knowledge bases.",
    longDescription: "AWS-USAR RAG Chatbot is a Retrieval-Augmented Generation system built with LangChain, Pinecone vector indexing, and Gemini LLMs to answer queries from custom PDF and DOCX knowledge bases. It implements document ingestion and semantic search using Sentence-Transformers embeddings and Pinecone vector indexing for relevant context retrieval. It exposes a FastAPI REST API that returns LLM-generated answers along with retrieved source chunks for transparent, evidence-grounded responses.",
    problem: "Extracting precise factual answers from lengthy technical PDFs and institutional documents is slow and prone to LLM hallucination.",
    solution: "AWS-USAR RAG Chatbot pairs Pinecone vector search with document chunk citations to guarantee accurate, verifiable answers grounded directly in uploaded source text.",
    image: "/images/aws_rag.png",
    gallery: [
      "/images/aws_rag.png"
    ],
    client: "USAR AI Lab",
    year: "2025",
    githubUrl: "https://github.com/hashmi09zx/AWS-USAR-RAG-Chatbot",
    liveUrl: "https://aws-usar-rag-chatbot.vercel.app/",
    homeTechnologies: ["LangChain", "Pinecone", "FastAPI"],
    technologies: ["Python", "FastAPI", "LangChain", "Pinecone", "Gemini", "Sentence-Transformers"],
    highlights: [
      "Custom PDF & DOCX knowledge base ingestion and semantic chunking",
      "Pinecone vector indexing with Sentence-Transformers embeddings",
      "FastAPI REST API delivering transparent source-chunk citations with answers"
    ],
    featured: true
  },
  {
    id: "proj-4",
    slug: "eprguard",
    title: "EPRGuard",
    category: "Compliance & Traceability",
    tag: "FULL-STACK / COMPLIANCE",
    description: "E-waste compliance and traceability platform designed to manage and verify compliance workflows across connected applications.",
    longDescription: "EPRGuard is an e-waste compliance and traceability platform built with a multi-module architecture containing a Flutter mobile client, Next.js admin dashboard, Node.js/TypeScript backend, and Supabase database functions. It manages verification and tracking of compliance certificates with serverless anomaly detection functions.",
    problem: "Organizations struggle to efficiently track e-waste compliance and verify certificate validity across complex supply chains.",
    solution: "EPRGuard provides an integrated mobile and web ecosystem paired with database functions to verify certificates and automate compliance workflows.",
    image: "/images/eprguard.png",
    gallery: [
      "/images/eprguard.png"
    ],
    client: "E-Waste Compliance",
    year: "2025",
    githubUrl: "https://github.com/hashmi09zx/EPRGuard",
    liveUrl: undefined,
    homeTechnologies: ["Flutter", "Supabase", "TypeScript"],
    technologies: ["Flutter", "Supabase", "Node.js", "TypeScript", "PostgreSQL"],
    highlights: [
      "Multi-module architecture with Flutter mobile app and web dashboard",
      "Supabase database functions for certificate anomaly detection",
      "Node.js and TypeScript backend service layer"
    ],
    featured: false
  },
  {
    id: "proj-5",
    slug: "exclusichain",
    title: "ExclusiChain",
    category: "Mobile Application",
    tag: "MOBILE / AUTHENTICATION",
    description: "Mobile application built to verify product authenticity and transfer ownership of limited edition luxury products.",
    longDescription: "ExclusiChain is a Flutter mobile application designed to verify product authenticity and transfer ownership of high-end limited edition luxury products across users via an intuitive mobile interface.",
    problem: "Buyers and owners of premium limited edition items lack a streamlined mobile interface to verify authentic product ownership and execute ownership transfers.",
    solution: "ExclusiChain delivers a mobile experience built in Flutter enabling users to manage product authenticity verification and ownership transfers.",
    image: "/images/exclusichain.png",
    gallery: [
      "/images/exclusichain.png"
    ],
    client: "Luxury Product Verification",
    year: "2025",
    githubUrl: "https://github.com/hashmi09zx/ExclusiChain",
    liveUrl: undefined,
    homeTechnologies: ["Flutter", "Dart"],
    technologies: ["Flutter", "Dart", "Mobile UI/UX"],
    highlights: [
      "Flutter mobile app for luxury product verification",
      "Interface for initiating and completing ownership transfers",
      "Cross-platform mobile implementation using Dart"
    ],
    featured: false
  },
  {
    id: "proj-6",
    slug: "skin-disease-classification",
    title: "Skin Disease Classification",
    category: "Deep Learning & Computer Vision",
    tag: "DEEP LEARNING / COMPUTER VISION",
    description: "End-to-end deep learning machine learning classification model using MobileNet for multiclass skin disease prediction.",
    longDescription: "Skin Disease Classification is a deep learning machine learning project utilizing a pretrained MobileNet architecture trained on the HMNIST 10000 dataset for multiclass skin disease image classification. It includes model training notebooks, exported Keras (.h5) models, lightweight (.tflite) model files, and a Python web application for image upload and classification.",
    problem: "Classifying dermatological skin lesions manually requires extensive expertise and rapid automated visual triage.",
    solution: "Deploys a MobileNet deep learning model capable of running inference via Python and TFLite for fast multiclass classification.",
    image: "/images/skin_disease.png",
    gallery: [
      "/images/skin_disease.png"
    ],
    client: "Machine Learning Research",
    year: "2024",
    githubUrl: "https://github.com/hashmi09zx/Skin-disease-Classification",
    liveUrl: "https://skin-disease-classification-sc51.onrender.com/",
    homeTechnologies: ["Python", "MobileNet", "TensorFlow"],
    technologies: ["Python", "TensorFlow", "Keras", "MobileNet", "TFLite"],
    highlights: [
      "Pretrained MobileNet architecture trained on the HMNIST 10000 dataset",
      "Dual model export formats: Keras (.h5) and TensorFlow Lite (.tflite)",
      "Python web app interface for image upload and inference"
    ],
    featured: false
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "PROGRAMMING",
    skills: ["Python", "Java", "C", "Dart", "SQL"]
  },
  {
    category: "AI / ML",
    skills: ["Deep Learning", "CNNs", "NLP", "Computer Vision", "RAG", "Hyperspectral Imaging"]
  },
  {
    category: "AGENTIC AI",
    skills: ["LangChain", "LangGraph", "Multi-Agent Systems", "ReAct", "MCP", "Human-in-the-Loop", "Guardrails", "Tavily"]
  },
  {
    category: "BACKEND & APIs",
    skills: ["FastAPI", "Flask", "REST APIs", "Docker"]
  },
  {
    category: "LIBRARIES",
    skills: ["TensorFlow", "Keras", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"]
  },
  {
    category: "MOBILE",
    skills: ["Flutter", "Firebase", "Provider"]
  },
  {
    category: "DATABASES",
    skills: ["SQLite", "MySQL", "Firestore", "Supabase", "Pinecone"]
  },
  {
    category: "CLOUD & TOOLS",
    skills: ["Git", "GitHub", "Vercel", "Render", "Antigravity"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    title: "2nd Runner-up",
    metric: "1000+ Teams",
    subtitle: "Hackers' Playground",
    description: "Secured 2nd Runner-up among 1000+ competing teams for engineering a real-time whiteboard and voice collaboration tool."
  },
  {
    id: "ach-2",
    title: "250+ LeetCode Problems",
    metric: "250+ Solved",
    subtitle: "LeetCode",
    description: "Solved 250+ LeetCode problems demonstrating strong data structures and algorithms proficiency."
  },
  {
    id: "ach-3",
    title: "Programming Workshops Instructor",
    metric: "150+ Students",
    subtitle: "AMU Workshop Instructor",
    description: "Conducted Python, Java, and C programming workshops for over 150 students at AMU."
  }
];
