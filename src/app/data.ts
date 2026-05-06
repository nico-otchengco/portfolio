import activitylogo from '@/assets/activitylog.png';
import boardview from '@/assets/boardview.png';
import calender from '@/assets/calendar.png';
import createorg from '@/assets/createorg.png';
import homepage from '@/assets/homepage.png';
import login from  '@/assets/login.png';
import orgdashboard from '@/assets/orgdashboard.png';
import orgplan from '@/assets/orgplan.png';
import signup from '@/assets/signup.png';
import teammember from '@/assets/teammember.png';
import profilepic from '@/assets/profilepic.jpg';

import floracast1 from '@/assets/floracast1.jpg';
import floracast2 from '@/assets/floracast2.jpg';
import floracast3 from '@/assets/floracast3.jpg';
import floracast4 from '@/assets/floracast4.jpg';


export interface Project {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  overview: string;
  features: string[];
  liveUrl: string;
  image: string;
  screenshots: string[];
}

export interface Skill {
  logo: string;
  name: string;
  invert?: boolean;
}

export const skills: Skill[] = [
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React' },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript' },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript' },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', name: 'Tailwind' },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', name: 'Java' },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', name: 'Python' },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js' },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg', name: 'Supabase' },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', name: 'PostgreSQL' },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', name: 'Oracle' },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', name: 'PL/SQL' },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', name: 'Git' },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', name: 'GitHub', invert: true },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', name: 'CSS3' },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg', name: 'WordPress' },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', name: 'Machine Learning (Ensemble Models)' },
  { logo: 'https://n8n.io/favicon.ico', name: 'n8n' },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg', name: 'LLM / AI', invert: true },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg', name: 'Embedded Systems',},
];

export const projects: Project[] = [
  {
    num: '01',
    title: 'Structura Workspace',
    desc: 'Structura is a project I built to really understand how multi-tenant SaaS apps work behind the scenes. Instead of just cloning a basic Trello board, I wanted something closer to how real systems handle organizations, permissions, and data isolation.',
    tags: ['React', 'Vite', 'CSS3', 'Supabase', 'REST API', 'Groq LLM', 'SaaS'],
    overview: 'A lightweight project management tool where multiple teams (organizations) can manage their own boards, tasks, and members — all within the same app, but completely isolated from each other.',
    features: ['Create multiple organizations (multi-tenant setup)', 'Manage Kanban boards', 'Drag and drop tasks between columns', 'Track activity logs per organization', 'View simple analytics (completion rate, priorities)', 'Secure data per organization using RLS in Supabase'],
    liveUrl: 'https://structura-workspace.vercel.app',
    image: homepage,
    screenshots: [homepage, login, signup, createorg, orgplan, orgdashboard, boardview, teammember, activitylogo, calender],
  },

  {
    num: '02',
    title: 'SmartSoil: Soil Health Monitoring System',
    desc: 'A full-stack IoT-based system designed for real-time soil health analysis and data-driven agricultural decision-making.',
    tags: ['React', 'TypeScript', 'CSS3', 'Supabase', 'REST API', 'IoT', 'Embedded System'],
    overview: 'The system collects and processes soil data. Then, ata is transmitted from the device to the cloud and visualized through a web dashboard, enabling users to monitor soil conditions and make informed decisions such as crop selection and soil treatment.',
    features: ['Real-time Soil Monitoring', 'Data Visualization', 'Crop Recommendation System', 'Soil Treatment Insights', 'Cloud Integration'],
    liveUrl: 'https://smartsoil-system.vercel.app',
    image: floracast1,
    screenshots: [],
  },

  {
    num: '03',
    title: 'FloraCast AI',
    desc: 'FloraCast AI is an IoT and machine learning-based system that predicts marigold bloom quantity using soil NPK data through ensemble regression models.',
    tags: ['Mobile App', 'Ensemble Learning', 'Embedded System', 'Machine Learning', 'IoT'],
    overview: 'An intelligent agriculture system that integrates IoT soil monitoring with ensemble machine learning (XGBoost, Random Forest, Gradient Boosting, Extra Trees) to improve and predict marigold bloom yield with high accuracy.',
    features: ['Real-time Soil Monitoring', 'Predicts marigold bloom quantity', 'IoT-Based Data Collection System', 'Ensemble Machine Learning Model', 'Automated Environmental Monitoring', 'Data-Driven Decision Support for Farmers'],
    liveUrl: 'https://drive.google.com/file/d/1LetYUyUT-Ox-XFA3QKro2tOIE9ljySXn/view?usp=sharing',
    image: floracast1,
    screenshots: [floracast1, floracast2, floracast4, floracast3],
  },
];

export const contact = {
  email: 'otchengco.nico@gmail.com',
  emailUrl: 'mailto:otchengco.nico@gmail.com',

  github: 'nico-otchengco',
  githubUrl: 'https://github.com/nico-otchengco',

  linkedin: 'Gian Nico Otchengco',
  linkedinUrl: 'https://www.linkedin.com/in/gian-nico-otchengco-78a982383/',

  resume: 'Gian Nico A. Otchengco - Resume.pdf',
  resumeUrl: 'https://drive.google.com/file/d/1kRutovf6kb8oNOVGOEP259KA6i75iysh/view?usp=sharing',
};

export const person = {
  name: 'Gian Nico Otchengco',
  nameShort: 'NICO',
  title: 'Aspiring Full Stack Developer / Software Engineer',
  bio1: 'I\'m a Developer based in Muntinlupa City who\'s spent 1.5 years building things on the web that actually work — not just things that look like they work.',
  bio2: 'My stack is React/TypeScript on the front, Node.js and Java on the back, and PostgreSQL/Oracle/Supabase for data. I automate workflows with n8n and I\'m comfortable across the full pipeline — from writing PL/SQL queries to shipping polished, responsive UIs.',
  bio3: 'I care about clean architecture, readable code, and user experience — in that order. I also build AI-powered features, integrating LLMs like OpenAI into real products. If a feature is too complex to explain simply, it probably needs to be redesigned.',
  photo: profilepic,
  coords: '14.4081° N, 121.0415° E',
  location: 'Muntinlupa City, PH',
  locationLabel: 'Muntinlupa City, PH · Open to Remote',
  experience: '1.5 years',
  focus: 'Full-Stack Development',
  languages: 'Java · Javascript · TypeScript · Python · SQL',
};
