import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    papalazius,
    suncaper,
    whatsappclone,
    forkandfriends,
    strabismuscare,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about-me",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "DevOps & Tools Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "Papalazius Mercantile Inc: Papalazius Books",
      icon: papalazius, 
      iconBg: "#E6DEDD",
      date: "Dec 2024 - Feb 2025",
      points: [
        "Automated product listings by integrating Keepa API for real-time book data, eliminating 100% manual entry and reducing listing time by 70%.",
        "Redesigned API workflows using Amazon SP API, improving processing speed by 67%.",
        "Built a full-stack shipping management portal using React, Tailwind CSS, and Axios to streamline inventory and shipment tracking.",
        "Led the migration from Amazon Inbound API v0 to v2024-03-20, resolving 10+ deprecated endpoints and ensuring full compliance."
      ],
    },
    {
      title: "Data Science & Big Data Intern",
      company_name: "Chengdu SunCaper Data Co. Ltd",
      icon: suncaper, 
      iconBg: "#383E56",
      date: "Feb 2025 - Mar 2025",
      points: [
        "Performed large-scale data analysis on Yelp’s open dataset (6.6M+ reviews, 192K+ businesses) using Python, Pandas, and SQL.",
        "Developed an interactive analytics dashboard using React, D3.js, and Framer Motion, boosting user engagement by 35%.",
        "Engineered an AI-powered recommendation system using DeepSeek API, increasing click-through rates by 28% with optimized prompt engineering.",
      ],
    },
  
  ];
  
  
  const testimonials = [
    {
      testimonial:
        "You not only learned quickly during your internship, but also took the initiative to apply the same AI tools and frameworks we use in our company.",
      name: "Huanyu Li",
      designation: "Senior Software Engineer",
      company: "Chengdu Shangcheng Data Co., Ltd.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];
  
  
  const projects = [
    {
      name: "Fork & Friends",
      description:
        "Interactive data analytics dashboard and AI recommendation system built with Yelp’s dataset. Features visual insights powered by D3.js and DeepSeek API for personalized suggestions.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "python", color: "green-text-gradient" },
        { name: "d3.js", color: "pink-text-gradient" },
      ],
      image: forkandfriends, 
      source_code_link: "https://github.com/NasimRanaFeroz/Fork-Friends_Front-End", 
    },
    {
      name: "StrabismusCare",
      description:
        "AI-powered mobile app for automated strabismus screening using Vision Transformers. Features a React Native UI, real-time EHR integration, and <3s diagnostic processing for remote eye care.",
      tags: [
        { name: "react-native", color: "blue-text-gradient" },
        { name: "pytorch", color: "green-text-gradient" },
        { name: "aws", color: "pink-text-gradient" },
      ],
      image: strabismuscare, 
      source_code_link: "https://github.com/OptiHealth-Innovators/StrabismusCareApp", 
    },
    {
      name: "WhatsApp Clone",
      description:
        "Real-time chat application with media sharing, voice waveforms, and emoji support. Built with Next.js, Firebase, Socket.IO, Prisma, and ZEGOCLOUD for smooth frontend and backend integration.",
      tags: [
        { name: "nextjs", color: "blue-text-gradient" },
        { name: "firebase", color: "green-text-gradient" },
        { name: "socket.io", color: "pink-text-gradient" },
      ],
      image: whatsappclone, 
      source_code_link: "https://github.com/mdnezam-uddin/whatsapp", 
    },
  ];

  const journey = [
    {
      year: "2022",
      title: "Started Software Engineering",
      description:
        "Began my journey at Sichuan University, diving into programming fundamentals.",
    },
    {
      year: "2023",
      title: "Web Development Focus",
      description:
        "Discovered my passion for web development and started building projects with the MERN stack.",
    },
    {
      year: "2024",
      title: "Internship Experience",
      description:
        "Gained practical experience through internships and collaborative projects.",
    },
    {
      year: "2025",
      title: "Advanced Projects",
      description:
        "Developing complex applications and expanding my technical skill set.",
    },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects,journey };