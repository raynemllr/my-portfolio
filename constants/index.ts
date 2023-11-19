import { Linkedin, Github, Facebook } from "lucide-react";

export const topbarData = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Experiences",
    link: "#experiences",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

// * for Footer
export const personalLinks = [
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/rayne-mallari-7476bb202/",
  },
  {
    icon: Github,
    link: "https://github.com/raynemllr",
  },
  {
    icon: Facebook,
    link: "https://www.facebook.com/rayne.mallari/",
  },
];

// * for Hero section - Tech stack
export const techStackIcons = [
  {
    name: "html",
    icon: "/assets/dev-icons/html.svg",
  },
  {
    name: "css",
    icon: "/assets/dev-icons/css.svg",
  },
  {
    name: "js",
    icon: "/assets/dev-icons/js.svg",
  },
  {
    name: "ts",
    icon: "/assets/dev-icons/ts.svg",
  },
  {
    name: "react",
    icon: "/assets/dev-icons/react.svg",
  },
  {
    name: "mongodb",
    icon: "/assets/dev-icons/mongodb.svg",
  },
  {
    name: "tailwind",
    icon: "/assets/dev-icons/tailwind.svg",
  },
  {
    name: "mui",
    icon: "/assets/dev-icons/mui.svg",
  },
];

// * for Vertical Timeline Component List (Experiences section)
export const experiencesData = [
  {
    position: "NextJS Developer",
    company: "PSI",
    location: "Remote",
    description:
      "Developed a Web3 Admin Dashboard and Country Villas application using React, Next, Typescript, Tailwind, etc.",
    date: "October 2023 - Present",
  },
  {
    position: "Front-End Developer",
    company: "Reclaim Healthcare Administrative Services",
    location: "Clark, Pampanga PH",
    description:
      "Developed two (2) internal projects using React, Next, Typescript, Tailwind, etc.",
    date: "March 2023 - Present",
  },
  {
    position: "Full-Stack Developer Trainee",
    company: "PenBrothers Academy",
    location: "Remote",
    description:
      "Participated in an extensive web architecture program within a corporate setting, focusing on technologies including MERN (MongoDB, ExpressJS, ReactJS & NodeJS) Stack and the Azure Cloud Platform. Successfully developed a basic carpool app and took part in two 5-day Hackathons.",
    date: "September 2022 - December 2022",
  },
  {
    position: "Client Success Intern",
    company: "Dashlabs.ai",
    location: "Remote",
    description:
      "Enhanced communication and problem-solving skills, contributing to company's success through proactive support and strategic collaboration.",
    date: "May 2022 - July 2022",
  },
];
