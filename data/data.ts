import {
  SiJavascript, SiTypescript, SiPython, SiGo,
  SiReact, SiNextdotjs, SiTailwindcss, SiGraphql,
  SiDocker, SiKubernetes, SiAmazon, SiRedis, SiMongodb,
  SiNodedotjs, SiExpress, SiTerraform, SiGit,
  SiTensorflow, SiShadcnui, SiNginx, SiNumpy,
  SiPrometheus, SiPandas, SiScikitlearn, SiExpo, SiLeetcode,
  SiApachekafka, SiSocketdotio, SiJest 
} from "react-icons/si"

import { FaDatabase } from "react-icons/fa6"
import { TbBrandFramerMotion, TbApi, TbMatrix, TbVectorBezierCircle } from "react-icons/tb"
import { FaJenkins } from "react-icons/fa"
import { GiDaisy } from "react-icons/gi"
import { GrSystem, GrUserWorker } from "react-icons/gr"
import { ImTree } from "react-icons/im"

export interface Project {
  name: string
  description?: string
  link?: string
  liveLink?: string
  features?: string[]
  index: number
  started?: string
  status?: "completed" | "active" | "wip" | "demo ready"
  type?: "ai" | "fullstack" | "microservices" | "mobile"
}

export interface SkillItem {
  name: string
  icon?: React.ComponentType<{ className?: string }>
}

export type SkillCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "databases"
  | "devops"
  | "ai_ml"
  | "other"

export type Skills = Record<SkillCategory, SkillItem[]>

export interface UserData {
  name: string
  title: string
  github: string
  linkedin: string
  x: string
  email: string
  skills: Skills
  projects: Project[]
  context: string
}

export const userData: UserData = {
  name: "Souptik Sen",
  title: "Full-Stack Engineer | DevOps | AI Systems Builder",

  github: "https://github.com/Raj-dev08",
  linkedin: "https://www.linkedin.com/in/souptik-sen-442152365",
  x: "https://x.com/SouptikSen08",
  email: "mailto:souptiksena@gmail.com",

  skills: {
    languages: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "Go", icon: SiGo }
    ],

    frontend: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Shadcn/ui", icon: SiShadcnui },
      { name: "Framer Motion", icon: TbBrandFramerMotion },
      { name: "DaisyUI", icon: GiDaisy },
      { name: "Expo", icon: SiExpo }
    ],

    backend: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "GraphQL", icon: SiGraphql },
      { name: "REST APIs", icon: TbApi },
      { name: "Socket.IO (Real-time systems)", icon: SiSocketdotio },
      { name: "Message Queues", icon: SiApachekafka },
      { name: "Background jobs", icon: GrUserWorker }
    ],

    databases: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "Vector DB (Pinecone)", icon: FaDatabase }
    ],

    devops: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "CI/CD (Jenkins)", icon: FaJenkins },
      { name: "NGINX", icon: SiNginx },
      { name: "AWS", icon: SiAmazon },
      { name: "Terraform", icon: SiTerraform },
      { name: "Prometheus (Monitoring)", icon: SiPrometheus }
    ],

    ai_ml: [
      { name: "Python", icon: SiPython },
      { name: "NumPy", icon: SiNumpy },
      { name: "Pandas", icon: SiPandas },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "PyTorch / Neural Networks", icon: SiTensorflow },
      { name: "Embeddings & Vector Search", icon: TbMatrix },
      { name: "RAG Systems", icon: TbVectorBezierCircle }
    ],

    other: [
      { name: "Git", icon: SiGit },
      { name: "Data Structures & Algorithms", icon: SiLeetcode },
      { name: "System Design", icon: GrSystem },
      { name: "Microservices Architecture", icon: ImTree },
      { name: "Testing", icon: SiJest  },
    ]
  },

  projects: [
    {
      name: "Partner AI",
      description:
        "Human-like AI companion system with memory, persona modeling, delayed responses and long-term context evolution.",
      index: 1,
      type: "ai",
      status: "active",
      link: "https://github.com/Raj-dev08/PartnerAI",
      liveLink: "https://partner-ai-roan.vercel.app/",
      features: [
        "RAG-based memory system",
        "Redis + vector DB hybrid memory",
        "Persona + emotional state simulation",
        "Queue-based async message pipeline",
        "Long-term contextual memory evolution"
      ]
    },

   
    {
      name: "HackIT Platform",
      description:
        "Microservices-based hackathon platform with real-time communication and event-driven architecture.",
      index: 2,
      type: "microservices",
      status: "active",
      link: "https://github.com/Raj-dev08/HackIT",
      features: [
        "Kafka event-driven architecture",
        "Socket.IO real-time chat",
        "Dockerized microservices",
        "CI/CD pipelines",
        "Scalable service separation"
      ]
    },

    {
      name: "Society Manager App",
      description:
        "Multi-role SaaS system for managing societies with automation and AI-driven insights.",
      index: 3,
      type: "mobile",
      status: "demo ready",
      link: "https://github.com/Raj-dev08/SocietyManager",
      liveLink:"https://drive.google.com/file/d/1ZKrZW0PHseG3qVWGcLpbEFrQs_NXCYQP/view",
      features: [
        "Role-based access control system",
        "AI tenant analysis module",
        "Marketplace system",
        "Event + payment + communication modules",
        "Complex multi-service backend architecture"
      ]
    },

    {
      name: "Project Helper",
      description:
        "Collaboration platform with real-time chat, video calls, and project management tools.",
      index: 4,
      type: "fullstack",
      status: "completed",
      link: "https://github.com/Raj-dev08/Project-helper",
      liveLink: "https://project-helper-aqm2.onrender.com",
      features: [
        "Socket.IO real-time communication",
        "Video + chat integration",
        "Redis caching layer",
        "Dockerized backend with CI/CD",
        "Scalable API architecture",
        "Jest testing with monitoring"
      ]
    },

     {
      name: "AiWardrobe",
      description:
        "AI-powered wardrobe system with embedding-based outfit recommendation and smart closet organization.",
      index: 5,
      type: "ai",
      status: "active",
      link: "https://github.com/Raj-dev08/AiWardrobe",
      features: [
        "Embedding-based outfit matching",
        "Smart wardrobe classification",
        "Vector search for clothing items",
        "Async processing pipeline"
      ]
    },


    {
      name: "Course-It",
      description:
        "Course platform with structured learning, caching, and real-time interaction features.",
      index: 6,
      type: "fullstack",
      status: "completed",
      link: "https://github.com/Raj-dev08/Course-It",
      liveLink: "https://course-it-2s22.onrender.com",
      features: [
        "Redis caching system",
        "Pagination & indexing optimization",
        "Chat/video learning system",
        "Dockerized backend services"
      ]
    },

    {
      name: "ShopIt (E-Commerce Platform)",
      description:
        "Full-stack e-commerce system with caching, product handling, and scalable architecture.",
      index: 7,
      type: "fullstack",
      status: "completed",
      link: "https://github.com/Raj-dev08/ShopIt",
      liveLink: "https://e-com-vurr.onrender.com/",
      features: [
        "Product catalog system",
        "Redis caching layer",
        "Cart + order system",
        "Pagination + filtering",
        "Optimized backend performance"
      ]
    },

    {
      name: "Fees Tracker",
      description:
        "Simple but scalable student fee tracking system with admin controls.",
      index: 8,
      type: "fullstack",
      status: "completed",
      link: "https://github.com/Raj-dev08/Fees-Tracker",
      liveLink: "https://fees-tracker-ten.vercel.app",
      features: [
        "CRUD-based fee management",
        "Simple dashboard system",
        "Lightweight backend design"
      ]
    }
  ],
  context: `
    Souptik Sen (Raj) is a 17-year-old full-stack engineer focused on building scalable backend systems, real-time applications, and AI-driven products.

    He specializes in Node.js internals, distributed systems, microservices, and DevOps practices including Docker, Kubernetes, CI/CD, and monitoring with Prometheus.

    His AI work is production-oriented, focusing on embeddings, vector search, RAG pipelines, memory systems, and conversational AI (Partner AI).

    He has built multiple real-world systems including:
    - AI companion systems with memory and personality modeling
    - Microservices platforms using Kafka and queues
    - Real-time apps with Socket.IO
    - Scalable platforms with Redis caching and async workers

    Strong in system design, backend architecture, and performance optimization.

    Actively building, shipping, and iterating with a focus on real-world scalability rather than theoretical projects.
    
    Has good comminication skills and knows how to seperate personal and private life.
    
    Can handle pressure and deadlines and can take decision with trade offs
    
    Open to learning new technologies and exploring new domains, with a strong foundation in software engineering principles and best practices.
    
    Lives around Kolkata, India and is open to remote opportunities globally.`
}




