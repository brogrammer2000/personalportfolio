export const profile = {
  name: "Satyam Arora",
  location: "Hämeenlinna, Finland",
  email: "arorasatyam1112@gmail.com",
  phone: "+358 466199543",
  resumeUrl: "/Satyam_Arora_CV_English.pdf",
  social: {
    github: "https://github.com/Brogrammer2000",
    linkedin: "https://www.linkedin.com/in/satyam-arora-211120/",
    medium: "https://medium.com/@arorasatyam1112",
  },
};

export const skills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "React",
  "Vite",
  "Material UI",
  "Python",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Docker",
  "CI/CD",
  "Azure",
  "AWS (basics)",
  "PowerBI",
  "Tableau",
  "Web Scraping",
  "AI API Integration",
  "Agile/Scrum",
  "Git",
  "Excel",
  "PowerPoint",
];

export const appliedAiApps: {
  title: string;
  description: string;
  url: string;
  tags?: string[];
}[] = [
  {
    title: "Finnish Healthcare AI Assistant",
    description:
      "Chat about your symptoms and book appointments with healthcare professionals.",
    url: "https://finnish-ai-healthcare-assistant.vercel.app/",
    tags: [
      "OpenAI",
      "FullStack",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Railway",
    ],
  },
  {
    title: "AI Research Bot",
    description:
      "Research agent powered by AI which can help you with your research and save it as a PDF.",
    url: "https://ai-research-bot-react.vercel.app/",
    tags: ["OpenAI", "LLM", "React", "Vite", "Material UI", "TypeScript"],
  },
];

export const projectTags: { [key: string]: string[] } = {
  "Finnish Healthcare AI": ["React", "OpenAI", "Express.js", "PostgreSQL"],
  "AI Chatbot — CLI": ["Python", "OpenAI API", "CLI"],
  "AI Chatbot — React UI": ["React", "OpenAI API", "UX"],
  "EDEKAOffers Scraper": ["Python", "Web Scraping", "Data"],
  WeatherApp: ["Python", "API"],
  PDFDownloader: ["Python", "Automation"],
  "EZ Accounting": ["JavaScript", "Craco", "Babel"],
};

export const projectRepos: { [key: string]: string } = {
  "Finnish Healthcare AI":
    "https://github.com/brogrammer2000/Finnish-AI-Healthcare-Assistant",
  "AI Chatbot — CLI": "https://github.com/brogrammer2000/AI_Research_Agent",
  "AI Chatbot — React UI": "https://github.com/brogrammer2000/AI_Research_Bot",
  "EDEKAOffers Scraper":
    "https://github.com/brogrammer2000/Fetching_Offers_EDEKA",
  WeatherApp: "https://github.com/brogrammer2000/WeatherAPI-Py-",
  PDFDownloader: "https://github.com/brogrammer2000/PDF_Downloader",
  "EZ Accounting": "https://github.com/brogrammer2000/EZ-Accounting",
};

export const FORMSPREE_URL = "https://formspree.io/f/xzzkajpn";
