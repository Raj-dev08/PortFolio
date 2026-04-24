import {
  SiJavascript, SiTypescript, SiPython, SiGo,
  SiReact, SiNextdotjs,
  SiDocker, SiAmazon, SiRedis, SiMongodb,
  SiNodedotjs, SiExpress, SiGit,
  SiPrometheus, SiExpo, SiSocketdotio, SiJest , SiPytorch, 
  SiOpenai,
  SiTailwindcss,
  SiAxios,
  SiPostgresql
} from "react-icons/si"

import { FaDatabase } from "react-icons/fa6"
import { TbMatrix, TbVectorBezierCircle } from "react-icons/tb"
import { FaJenkins } from "react-icons/fa"
import { GrSystem } from "react-icons/gr"
import { ImTree } from "react-icons/im"

export interface Project {
  name: string
  summary: string        // what it does (1 line)
  build: string          // how it's built (1 line)
  description?: string   // optional longer explanation
  link?: string
  liveLink?: string
  type?: string[]
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
  email: "souptiksena@gmail.com",

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
      { name: "PostgreSQL", icon: SiPostgresql },
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
      summary:
        "AI companion that remembers you and actually starts conversations on its own.",
      build:
        "Embeddings + RAG for memory, Redis for short-term context, async workers handling processing, real-time chat over sockets.",
      description:
        "Focused on making interactions feel persistent and human, not stateless chatbot replies.",
      index: 1,
      type: ["ai", "fullstack"],
      status: "active",
      link: "https://github.com/Raj-dev08/PartnerAI",
      liveLink: "https://partner-ai-roan.vercel.app/",
      tech: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Redis", icon: SiRedis },
        { name: "BullMQ (Async Workers)" },
        { name: "Socket.IO", icon: SiSocketdotio },
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Vector DB", icon: FaDatabase },
        { name: "OpenAI API", icon: SiOpenai },
        { name: "React", icon: SiReact }
      ]
    },

    {
      name: "HackIT Platform",
      summary:
        "Platform to discover hackathons, form teams, and collaborate in real-time.",
      build:
        "Event-driven microservices with Kafka + Redis, real-time end-to-end encrypted communication via sockets, async workers for scalability.",
      description:
        "Designed to handle multiple users interacting simultaneously without turning into a mess.",
      index: 2,
      type: ["microservices", "fullstack"],
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
        { name: "React", icon: SiReact }
      ]
    },

    {
      name: "Society Manager App",
      summary:
        "All-in-one app to manage societies, tenants, and daily operations.",
      build:
        "React Native frontend with a Node backend, Redis for fast access, and AI features for insights.",
      description:
        "Includes multi-role access, tenant handling, and AI-based suggestions for better decision making.",
      index: 3,
      type: ["mobile", "fullstack"],
      status: "demo ready",
      link: "https://github.com/Raj-dev08/SocietyManager",
      liveLink: "https://drive.google.com/file/d/1ZKrZW0PHseG3qVWGcLpbEFrQs_NXCYQP/view",
      tech: [
        { name: "React Native (Expo)", icon: SiExpo },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Redis", icon: SiRedis },
        { name: "OpenAI API", icon: SiOpenai }
      ]
    },

    {
      name: "Project Helper",
      summary:
        "Place for devs to share projects, get feedback, and find collaborators.",
      build:
        "Full-stack app with real-time updates, Dockerized services, CI/CD pipelines, and monitoring in place.",
      description:
        "Built like a production system with focus on reliability, not just features.",
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
        { name: "Jenkins", icon: FaJenkins },
        { name: "Jest", icon: SiJest },
        { name: "Prometheus", icon: SiPrometheus }
      ]
    },

    {
      name: "AI Wardrobe",
      summary:
        "Suggests what to wear based on your event using your own wardrobe.",
      build:
        "LLM generates outfit intent, embeddings match it against your clothes, backend handles image cleanup and previews.",
      description:
        "You upload clothes once, system figures out what works for different situations and shows a rough preview.",
      index: 5,
      type: ["ai", "fullstack"],
      status: "demo ready",
      liveLink: "https://drive.google.com/file/d/1hfaf_DuUvrB02QkX1GoM49nTQcnwEUd9/view?usp=sharing",
      link: "https://github.com/Raj-dev08/AiWardrobe",
      tech: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Redis", icon: SiRedis },
        { name: "Vector DB", icon: FaDatabase },
        { name: "OpenAI API", icon: SiOpenai },
        { name: "React", icon: SiReact }
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

    He has more projects in github you can check .The listed ones are the best among them

    If asked about other projects say to check out github for more projects and details.
    
    Strong in system design, backend architecture, and performance optimization.

    Actively building, shipping, and iterating with a focus on real-world scalability rather than theoretical projects.
    
    Has good comminication skills and knows how to seperate personal and private life.
    
    Can handle pressure and deadlines and can take decision with trade offs
    
    Open to learning new technologies and exploring new domains, with a strong foundation in software engineering principles and best practices.
    
    Lives around Kolkata, India and is open to remote opportunities globally.`
}




