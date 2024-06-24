// Developer Basic Information
import portfolioImg from "../../assets/images/portfolio.webp";

// Developer SoMe
import githubLogo from "../../assets/images/icon-github.svg";
import linkedIn from "../../assets/images/icon-linkedin.svg";


// Developer Skills
import bootstrap from "../../assets/icons/bootstrap5.svg";
import css from "../../assets/icons/css.svg";
import html from "../../assets/icons/html5.svg";
import sass from "../../assets/icons/sass.svg";
import vsCode from "../../assets/icons/vs.svg";
import git from "../../assets/icons/git.svg";
import figma from "../../assets/icons/figma.svg";
import js from "../../assets/icons/js.svg";
import github from "../../assets/icons/github.svg";
import react from "../../assets/icons/reactjs.svg";



export const devData = {
  basics: {
    name: "Rayshawn Jones",
    label: "Full stack engineer",
    image: portfolioImg,
    email: "RayshawnJones1991@gmail.com",
    phone: "(631) 123-4567",
    url: "https://.com",
    summary: ` Based in the US, In the state of NY, with experience in the health industry as an strength and conditioning coach with a specialization in martial arts, track and field, as well as football athletes. I'm looking to utilize previous experience and growing fullstack engineer to build accessible web apps that will help users with their daily lives particularly in areas of time organization and health monitoring.`,
    profiles: [
      {
        network: "LinkedIn",
        username: "RayshawnJones",
        url: "https://www.linkedin.com/in/rayshawnjones",
        icon: linkedIn,
      },
      {
        network: "GitHub",
        username: "RayshawnJones",
        url: "https://github.com/RayshawnJones",
        icon: githubLogo,
      },
    ],
  },
  
  education: [
    {
      institution: "General Assembly",
      url: "https://generalassemb.ly/students/courses/software-engineering/new-york-city",
      area: "Software Engineering immersive",
      studyType: "Certificate",
      startDate: "03/2024",
      endDate: "06/2024",
    },
  ],
  skills: [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },

    {
      name: "SASS",
      icon: sass,
    },
    {
      name: "GIT",
      icon: git,
    },
    {
      name: "VSCODE",
      icon: vsCode,
    },
    {
      name: "REACT",
      icon: react,
    },

    {
      name: "JS",
      icon: js,
    },
    {
      name: "GITHUB",
      icon: github,
    },
    {
      name: "FIGMA",
      icon: figma,
    },
    {
      name: "BOOTSTRAP",
      icon: bootstrap,
    }
  ],
  languages: [
    
    {
      language: "English",
      fluency: "Native",
    },
  ]
};