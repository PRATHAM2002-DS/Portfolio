import chat from "../images/chat.jpg";
import submission from "../images/submission.jpeg";
import arch from "../images/arch.jpeg";
import pulzion from "../images/pulzion.jpeg";
import covmeal from "../images/covmeal.jpeg";
import flipkart from "../images/flipkart.mp4";
import grid from "../images/grid.jpeg";
import travendo from "../images/travendo.jpeg";

export const projectsData = [
  {
    name: "Pulzion Event Management System",
    description:
      "The primary goal of the PULZION’23 website was to host the annual flagship event of PASC which received around 3400+ registrations and 40000+ requests.",
    image: pulzion,
    deployment: "https://pulzion.co.in/",
    code: "https://github.com/yellowflashofleaf/pulzion23",
    techStack: [
      "Next Js",
      "Tailwind CSS",
      "Node JS",
      "PostgresSQL",
      "Azure Cloud Services",
      "AWS",
      "Docker",
      "Firebase Push Notifications Service",
    ],
    sysArch: "https://www.instagram.com/p/Cqp6McYIlLt/",
  },
  {
    name: "CovMeal",
    description:
      "Contributed a helping hand to society by connecting foodservice providers with Covid patients for meal deliveries. Impact- 35+ food service provider registrations from major locations of Pune City.",
    image: covmeal,
    code: "https://github.com/Akash-213/Cov-Meal-Code",
    deployment: "https://covmeal.netlify.app/",
    techStack: ["ReactJs", "Firebase", "Tailwind CSS", "Netlify"],
    sysArch: "https://www.youtube.com/watch?v=-RddAECtSdY",
  },
  {
    name: "Submission Platform",
    description:
      "The primary goal of portal was to provide participants of Pulzion a platform to submit their solutions.",
    image: submission,
    code: "https://github.com/yellowflashofleaf/submission-frontend23",
    // website: "https://radiance21.in/",
    deployment: "https://submission.pulzion.co.in/",
    techStack: ["Next Js", "NodeJS", "AWS", "Docker", "Azure Cloud Services"],
  },
  {
    name: "Multi-layered Market Sentiment Aggregator",
    description:
      "As a part of Flipkart GRID 4.0 we developed a multi-layered market sentiment aggregator with a built-in signal detector offering real time analytics..",
    image: grid,
    code: "https://github.com/PRATHAM2002-DS/FlipkartGrid-ML-Models-",
    techStack: [
      "NLTK",
      "TextBlob",
      "Python",
      "Django Rest Framework",
      "ReactJS",
      "ChartJS",
      "AlchemyJs",
    ],
    deployment: flipkart,
    sysArch: arch,
  },
  {
    name: "Video Chat App (Ongoing)",
    description:
      "A video chat app developed using WebRTC and Socket.io with a backend written in Golang using GoFibre.",
    image: chat,
    code: "https://github.com/PRATHAM2002-DS/go-videochat-app",
    techStack: ["Golang", "GoFibre", "WebRTC", "Socket.io", "Docker"],
  },
  {
    name: "Travendo",
    description:
      "TRAVENDO helps people in enjoying authentic village products at an affordable price. We also hope that this platform helps in breaking all the trust issues between the urbanites and village products and thereby increases the employment rate in village/rural areas.",
    image: travendo,
    code: "https://github.com/PRATHAM2002-DS/travendo-frontend",
    techStack: ["React JS", "Node JS", "MongoDB", "Express JS"],
  },
];
