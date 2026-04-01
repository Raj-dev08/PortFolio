import {
  SiJavascript, SiTypescript, SiPython, SiGo,
  SiReact, SiNextdotjs,
  SiDocker, SiAmazon, SiRedis, SiMongodb,
  SiNodedotjs, SiExpress, SiGit,
  SiPrometheus, SiExpo, SiSocketdotio, SiJest , SiPytorch, 
  SiOpenai,
  SiTailwindcss,
  SiAxios
} from "react-icons/si"

import { FaDatabase } from "react-icons/fa6"
import { TbMatrix, TbVectorBezierCircle } from "react-icons/tb"
import { FaJenkins } from "react-icons/fa"
import { GrSystem } from "react-icons/gr"
import { ImTree } from "react-icons/im"

export interface Project {
  name: string
  description?: string
  link?: string
  liveLink?: string
  type?: string[],
  tech?: SkillItem[]
  index: number
  status?: "completed" | "active" | "wip" | "demo ready"
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
      { name: "Python", icon: SiPython }
    ],

    frontend: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Expo", icon: SiExpo }
    ],

    backend: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Socket.IO (Real-time systems)", icon: SiSocketdotio },
    ],

    databases: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "Vector DB (Pinecone)", icon: FaDatabase }
    ],

    devops: [
      { name: "Docker", icon: SiDocker },
      { name: "CI/CD (Jenkins)", icon: FaJenkins },
      { name: "AWS", icon: SiAmazon },
      { name: "Monitoring", icon: SiPrometheus }
    ],

    ai_ml: [
      { name: "PyTorch / Neural Networks", icon: SiPytorch  },
      { name: "Embeddings & Vector Search", icon: TbMatrix },
      { name: "RAG Systems", icon: TbVectorBezierCircle }
    ],

    other: [
      { name: "Git", icon: SiGit },
      { name: "System Design", icon: GrSystem },
      { name: "Microservices Architecture", icon: ImTree },
      { name: "Testing", icon: SiJest  },
    ]
  },

  projects: [
    {
      name: "Partner AI",
      description:
        `AI companion that initiates conversations and builds long-term memory using embeddings + RAG.
        Designed with async workers, Redis caching, and vector memory to simulate human-like interaction and context retention.`,
      index: 1,
      type: ["ai","fullstack"],
      status: "active",
      link: "https://github.com/Raj-dev08/PartnerAI",
      liveLink: "https://partner-ai-roan.vercel.app/",
      tech: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Redis", icon: SiRedis },
        { name: "BullMQ (Async Workers)" },
        { name: "Redis Pub/Sub (Event-Driven Architecture)" },
        { name: "Socket.IO (Real-time Communication)", icon: SiSocketdotio },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Vector DB", icon: FaDatabase },
        { name: "OpenAI API", icon: SiOpenai },
        { name: "React", icon: SiReact }
      ]
    },

    {
      name: "HackIT Platform",
      description:
        `Distributed microservices platform for hackathon discovery and team collaboration.
        Built with Kafka, Redis, and Socket.IO for real-time communication, with end-to-end encrypted messaging and scalable service architecture.`,
      index: 2,
      type: ["microservices","fullstack"],
      status: "active",
      link: "https://github.com/Raj-dev08/HackIT",
      tech: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Redis", icon: SiRedis },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Kafka", icon: ImTree },       
        { name: "BullMQ (Async Workers)" },
        { name: "Socket.IO", icon: SiSocketdotio },
        { name: "Docker", icon: SiDocker },
        { name: "React", icon: SiReact },
      ]
    },

    {
      name: "Society Manager App",
      description:
        `Cross-platform mobile app for managing residential societies with multiple features.
        Includes AI-powered insights for tenant analysis, built using React Native, Node.js, and Redis-backed services.`,
      index: 3,
      type: ["mobile","fullstack"],
      status: "demo ready",
      link: "https://github.com/Raj-dev08/SocietyManager",
      liveLink: "https://drive.google.com/file/d/1ZKrZW0PHseG3qVWGcLpbEFrQs_NXCYQP/view", 
      tech: [
        { name: "React Native (Expo)", icon: SiExpo },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Redis", icon: SiRedis },
        { name: "AI Insights (OpenAI API)", icon: SiOpenai },
      ]
    },

    {
      name: "Project Helper",
      description:
        `Developer collaboration platform for sharing projects, feedback, and finding teammates.
        Designed with real-time features, Dockerized services, CI/CD pipelines, and monitoring for production-level reliability.`,
      index: 4,
      type: ["fullstack"],
      status: "completed",
      link: "https://github.com/Raj-dev08/Project-helper",
      liveLink: "https://project-helper-aqm2.onrender.com",
      tech: [
        { name: "React", icon: SiReact },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Socket.IO", icon: SiSocketdotio },
        { name: "Redis", icon: SiRedis },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Docker", icon: SiDocker },
        { name: "Jenkins (CI/CD)", icon: FaJenkins },
        { name: "Jest (Testing)", icon: SiJest  },
        { name: "Prometheus (Monitoring)", icon: SiPrometheus }
      ]
    },
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

    He has more projects in github you can check .The listed ones are the best among them

    If asked about other projects say to check out github for more projects and details.
    
    Strong in system design, backend architecture, and performance optimization.

    Actively building, shipping, and iterating with a focus on real-world scalability rather than theoretical projects.
    
    Has good comminication skills and knows how to seperate personal and private life.
    
    Can handle pressure and deadlines and can take decision with trade offs
    
    Open to learning new technologies and exploring new domains, with a strong foundation in software engineering principles and best practices.
    
    Lives around Kolkata, India and is open to remote opportunities globally.`
}




