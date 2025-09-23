import { SiJavascript, SiTypescript, SiPython, SiGo,
  SiReact, SiNextdotjs, SiTailwindcss, SiGraphql,
  SiDocker, SiKubernetes, SiAmazon, SiRedis, SiMongodb,
  SiNodedotjs, SiExpress, SiTerraform, SiGit, SiTensorflow ,
  SiShadcnui , SiNginx ,SiNumpy ,SiPrometheus ,SiPandas ,SiScikitlearn,
  SiLeetcode  } from "react-icons/si"

import { TbBrandFramerMotion ,TbApi  } from "react-icons/tb";
import { FaJenkins } from "react-icons/fa";
import { GiDaisy } from "react-icons/gi";
import { GrSystem } from "react-icons/gr";

export interface Project {
  name: string
  description?: string
  link?: string
  liveLink?: string
  features?: string[]
}

export interface SkillItem {
  name: string
  icon?: any 
}

export interface UserData {
  name: string
  title: string
  github: string
  linkedin: string
  x: string
  email: string
  skills: {
    languages: SkillItem[]
    frontend: SkillItem[]
    backend: SkillItem[]
    databases: SkillItem[]
    devops: SkillItem[]
    ai_ml: SkillItem[]
    other: SkillItem[]
  }
  projects: Project[]
  context: string
}

export const userData: UserData = {
  name: "Souptik Sen",
  title: "Full-Stack Developer | DevOps Enthusiast | AI Explorer",
  github: "https://github.com/Raj-dev08",
  linkedin: "https://www.linkedin.com/in/souptik-sen-442152365",
  x: "https://x.com/SouptikSen08",
  email: "https://mail.google.com/mail/?view=cm&fs=1&to=souptiksena@gmail.com",

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
      { name: "Shadcn/ui" , icon: SiShadcnui },
      { name: "Framer Motion" , icon: TbBrandFramerMotion },
      { name: "DaisyUI", icon: GiDaisy },
    ],
    backend: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "GraphQL", icon: SiGraphql },
      { name: "REST APIs", icon: TbApi }
    ],
    databases: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis }
    ],
    devops: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "CI/CD", icon: FaJenkins },
      { name: "NGINX" , icon: SiNginx },
      { name: "AWS", icon: SiAmazon },
      { name: "Terraform", icon: SiTerraform },
      { name: "Logging & Monitoring",icon: SiPrometheus }
    ],
    ai_ml: [
      { name: "Python", icon: SiPython },
      { name: "NumPy", icon: SiNumpy },
      { name: "Pandas", icon: SiPandas },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "Neural Networks", icon: SiTensorflow }
    ],
    other: [
      { name: "Git", icon: SiGit },
      { name: "DSA (210+ problems solved in leetcode)" , icon: SiLeetcode },
      { name: "System Design Basics",icon: GrSystem }
    ]
  },

  projects: [
    {
      name: "Project Helper",
      description:
        "Collaboration platform with real-time chat, video calls, Redis caching, background jobs, CI/CD.",
      link: "https://github.com/Raj-dev08/Project-helper",
      liveLink:"https://project-helper-aqm2.onrender.com",  
      features: [
        "Project management",
        "Task management",
        "Issue resolver",
        "JWT Authentication",
        "Real-time messaging / video",
        "Background task queues",
        "Redis for performance",
        "CI/CD pipelines"
      ]
    },
    {
      name: "Course App",
      description: "Platform to host, manage, and take courses / lessons.",
      link: "https://github.com/Raj-dev08/Course-It",
      liveLink:"https://course-it-2s22.onrender.com",
      features: [
        "Course creation and management",
        "Video hosting",
        "Quizzes and assessments",
        "JWT Authentication",
        "Real-time messaging",
        "Redis for performance",
        "CI/CD pipelines"
      ]
    },
     {
      name: "E-commerce Platform",
      description: "Shopping platform with cart, checkout, order management.",
      link: "https://github.com/Raj-dev08/Shopit",
      liveLink:"https://shopit-d0xb.onrender.com",
      features: [
        "JWT Authentication",
        "Redis for performance",
        "Admin controls"
      ]
    },
    {
      name: "Social Media App",
      description: "Full-stack social media platform with authentication, posts, and user interactions.",
      link: "https://github.com/Raj-dev08/Web-chat",
      liveLink:"https://web-chat-x0sa.onrender.com",
      features: [
        "JWT Authentication",
        "Real-time messaging",
        "Post creation and management",
        "Likes, comments"
      ]
    },
    {
      name: "Formula Sharing App",
      description: "Community app for users to share and discover mathematical formulas.",
      link: "https://github.com/Raj-dev08/Formulate",
      liveLink:"https://formulate-phi.vercel.app/",
      features: [
        "Formula creation and management",
        "Search and discovery",
        "OAuth integration"
      ]
    },
    
  ],
  context: `
          Souptik Sen A.K.A Raj is a 17-year-old full-stack developer with expertise in Node.js, React, Next.js, MongoDB, Docker, Kubernetes, GraphQL, and AI/ML basics.
          He has hands-on experience building multiple real-world projects including social media apps, e-commerce platforms, course platforms, and collaboration tools.
          He is skilled in frontend, backend, devops, databases, and AI/ML tools such as Python, TensorFlow, scikit-learn, NumPy, Pandas, and neural networks.
          He is proficient in system design basics, algorithms, and data structures (210+ problems solved on LeetCode).
          He actively posts and shares knowledge on LinkedIn and X (Twitter), contributing to his professional presence.
          He works with modern tools like Shadcn/ui, TailwindCSS, Framer Motion, DaisyUI, and is familiar with CI/CD pipelines, logging & monitoring, and cloud deployment.
          Souptik is the creator of the listed projects, and the AI should answer questions about him and his work using this information without exposing personal finance or property details.
          `
}
