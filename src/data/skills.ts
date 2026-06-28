export interface Skill {
  name: string;
  proficiency: number; // 0-100
  color?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "C++", proficiency: 80, color: "#00599c" },
      { name: "JavaScript (ES6+)", proficiency: 95, color: "#f7df1e" },
      { name: "TypeScript", proficiency: 90, color: "#3178c6" },
      { name: "Python", proficiency: 85, color: "#3776ab" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", proficiency: 94, color: "#61dafb" },
      { name: "Next.js", proficiency: 88, color: "#ffffff" },
      { name: "Tailwind CSS", proficiency: 90, color: "#06b6d4" },
      { name: "HTML5", proficiency: 95, color: "#e34c26" },
      { name: "CSS3", proficiency: 92, color: "#1572b6" },
      { name: "EJS", proficiency: 84, color: "#a91e50" },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js", proficiency: 92, color: "#68a063" },
      { name: "Express.js", proficiency: 90, color: "#000000" },
      { name: "REST API Design", proficiency: 93, color: "#ff6c37" },
      { name: "JWT Authentication", proficiency: 88, color: "#f9a826" },
      { name: "Authorization", proficiency: 86, color: "#ff7b72" },
      { name: "RBAC", proficiency: 86, color: "#58a6ff" },
      { name: "Middleware Architecture", proficiency: 86, color: "#bc8cff" },
      { name: "Microservices", proficiency: 82, color: "#58a6ff" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", proficiency: 85, color: "#13aa52" },
      { name: "PostgreSQL", proficiency: 82, color: "#336791" },
      { name: "Mongoose ODM", proficiency: 84, color: "#880000" },
      { name: "Database Indexing", proficiency: 82, color: "#7ee787" },
      { name: "Schema Design", proficiency: 83, color: "#f778ba" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Docker", proficiency: 78, color: "#2496ed" },
      { name: "Git", proficiency: 90, color: "#f05032" },
      { name: "GitHub", proficiency: 90, color: "#ffffff" },
      { name: "CI/CD Pipelines", proficiency: 82, color: "#3fb950" },
      { name: "Linux", proficiency: 82, color: "#fcc624" },
      { name: "AWS EC2", proficiency: 72, color: "#ff9900" },
      { name: "AWS S3", proficiency: 74, color: "#569a31" },
    ],
  },
  {
    category: "AI & APIs",
    skills: [
      { name: "OpenAI GPT-4o", proficiency: 84, color: "#10a37f" },
      { name: "Google Cloud Vision", proficiency: 82, color: "#4285f4" },
      { name: "OCR Integration", proficiency: 86, color: "#fbbc04" },
      { name: "Prompt Engineering", proficiency: 84, color: "#10a37f" },
      { name: "Mapbox API", proficiency: 80, color: "#4264fb" },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "VS Code", proficiency: 92, color: "#007acc" },
      { name: "GitHub Copilot", proficiency: 88, color: "#ffffff" },
      { name: "npm", proficiency: 88, color: "#cb3837" },
      { name: "Postman", proficiency: 88, color: "#ff6c37" },
      { name: "Cloudinary", proficiency: 82, color: "#3448c5" },
      { name: "Multer", proficiency: 82, color: "#ffb86b" },
      { name: "Passport.js", proficiency: 82, color: "#34e27a" },
    ],
  },
  {
    category: "Concepts",
    skills: [
      { name: "System Design", proficiency: 84, color: "#58a6ff" },
      { name: "Scalability", proficiency: 82, color: "#7ee787" },
      { name: "Secure Coding", proficiency: 86, color: "#ff7b72" },
      { name: "MVC Architecture", proficiency: 88, color: "#bc8cff" },
      { name: "Version Control", proficiency: 90, color: "#f05032" },
      { name: "Agile/Scrum", proficiency: 84, color: "#f2cc60" },
      { name: "Data Structures & Algorithms", proficiency: 86, color: "#f85149" },
    ],
  },
];
