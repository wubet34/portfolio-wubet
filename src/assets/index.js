import {
  Mail,
  Github,
  Linkedin,
  Code,
  Check,
  Pencil,
  Share,
  Quote,
  MapPin,
  Phone,
  Menu,
  X,
  Moon,
  Sun,
  Server,
  
} from "lucide-react";



export const Icons = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  code: Code,
  check: Check,
  pencil: Pencil,
  share: Share,
  quote: Quote,
  location: MapPin,
  phone: Phone,
  Menu:Menu,
  X:X,
  Moon:Moon,
  Sun:Sun
};
 // index.js

export const skills = [
  {
    category: "Frontend Development",
    check: Check,
    code: Code,
    items: [
      "HTML5, CSS3, JavaScript (ES6+)",
      "React.js",
      "Responsive & Mobile-First Design",
      "Tailwind CSS, Bootstrap, Material UI",
      "Form Handling & Validation"
    ]
  },
  {
    category: "Backend & Tools",
    check: Check,
    server: Server,
    items: [
      "PHP basics & MySQL",
      "SQL Server (queries, CRUD operations)",
      "Git, GitHub, Version Control",
      "Basic Server & Hosting Knowledge",
      "Database Design & ER Diagrams"
    ]
  },
  {
    category: "UI/UX Design",
    check: Check,
    pencil: Pencil,
    items: [
      "Figma, Adobe XD",
      "Wireframing & Prototyping",
      "Responsive Design & Layouts",
      "User Research & Personas",
      "Accessibility & Design Principles"
    ]
  }
];


















import Fanuel from '../assets/profile/Fanuel.jpg'
import Washihun from '../assets/profile/Washihun.jpg'
import Yosef from '../assets/profile/Yosef.jpg'




export const Testimonial = [
  {
    body: "Fanuel brought incredible value to our project with his frontend expertise. His designs and code quality elevated our website’s functionality and user experience.",
    profile: Fanuel,
    name: "Fanuel Melaku",
    company: "Zosara Skin CEO"
  },
  {
    body: "Washihun’s contribution to our gym management platform was outstanding. His attention to UI details and responsive design made the app highly user-friendly.",
    profile: Washihun,
    name: "Washihun SewMehon",
    company: "Falcon WTF & Gym Founder"
  },
  {
    body: "Yosef’s frontend skills transformed our production website into a sleek and professional experience. His work was efficient, clean, and visually appealing.",
    profile: Yosef,
    name: "Yosef TekleTsadik",
    company: "Ethan Production CEO"
  }
];

    

