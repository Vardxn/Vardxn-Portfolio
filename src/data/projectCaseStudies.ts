export interface CaseStudy {
  id: string;
  title: string;
  shortDesc: string;
  category: string;
  problem: string;
  solution: string;
  results: string[];
  techStack: string[];
  images: string[];
  githubLink?: string;
  liveLink?: string;
  duration: string;
  role: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "HealthEase - AI-Powered Telemedicine Platform",
    shortDesc: "Multi-role telemedicine platform with AI chatbot, OCR prescriptions, and secure APIs",
    category: "Full-Stack AI Healthcare",
    problem:
      "Patients, doctors, and admins need separate workflows for appointments, prescriptions, medication reminders, and user management while keeping healthcare data access tightly controlled.",
    solution:
      "Architected a service-oriented MERN backend with separate REST API layers for Patient, Doctor, and Admin roles. Integrated JWT authentication, RBAC middleware, OpenAI GPT-4o for a context-aware medical chatbot, Google Cloud Vision OCR for handwritten prescriptions, and Dockerized environment-specific setup.",
    results: [
      "15+ secure REST endpoints covering appointments, prescriptions, reminders, and users",
      "~98% OCR extraction accuracy across structured and semi-structured prescriptions",
      "Role-gated route protection and input sanitization across API layers",
      "One-command reproducible local setup with Docker",
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Docker", "GPT-4o", "Cloud Vision API", "JWT", "RBAC"],
    images: ["/images/healthease-placeholder.svg"],
    githubLink: "https://github.com/Vardxn/HealthEase",
    duration: "Jan 2025 - Jun 2025",
    role: "Full-Stack Developer",
  },
  {
    id: "2",
    title: "Wanderlust - Full-Stack Travel Listing Platform",
    shortDesc: "MVC travel listing app with auth, maps, media storage, reviews, and booking workflows",
    category: "Full-Stack Travel",
    problem:
      "Travel listing platforms need reliable authentication, listing management, geolocation, media delivery, reviews, and server-side validation without turning the backend into unmaintainable route logic.",
    solution:
      "Designed a production-grade MVC backend with separated route handlers, middleware chains, and Mongoose model layers. Added Passport.js local authentication, bcrypt password hashing, persistent sessions, protected routes, Mapbox geocoding, Cloudinary media delivery, validation, error handling, and flash messaging.",
    results: [
      "Complete CRUD operations for 50+ travel listings",
      "Maintainable MVC structure ready for additional modules",
      "Cloudinary CDN pipeline improved image delivery and transformations",
      "Mapbox-powered location discovery plus reviews and booking workflows",
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "Passport.js", "EJS", "Cloudinary", "Mapbox API"],
    images: ["/images/wanderlust-placeholder.svg"],
    githubLink: "https://github.com/Vardxn/Wanderlust",
    duration: "Aug 2023 - Dec 2023",
    role: "Full-Stack Developer",
  },
  {
    id: "3",
    title: "Mohishree Facility Services - B2B Industrial Marketplace",
    shortDesc: "Industrial B2B marketplace with SSR pages, typed APIs, RBAC, and vendor onboarding",
    category: "B2B Marketplace",
    problem:
      "Industrial clients and skilled service providers need a structured marketplace with clear roles, reliable data contracts, SEO-friendly category pages, and a vendor onboarding path from registration to approval.",
    solution:
      "Architected a normalized PostgreSQL schema with role-based entities for Client, Vendor, and Admin. Built type-safe REST APIs in TypeScript, integrated Next.js SSR for service category pages, used dynamic routing/static generation, and implemented multi-step vendor onboarding with validation, Multer document uploads, and admin approval flows.",
    results: [
      "Zero runtime type errors across strict request/response contracts",
      "SEO-critical pages served with Next.js SSR and static generation",
      "Role-based marketplace flow for Client, Vendor, and Admin users",
      "End-to-end procurement workflow from onboarding to contract approval",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "REST APIs", "Multer"],
    images: ["/images/mohishree-placeholder.svg"],
    githubLink: "https://github.com/Vardxn/Mohishree",
    duration: "Jun 2024 - Sep 2024",
    role: "Full-Stack Developer",
  },
];
