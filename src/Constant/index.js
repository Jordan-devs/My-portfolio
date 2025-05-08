export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
  {
    id: 5,
    name: "Resume",
    href: "#",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Deborah Williams",
    position: "Based in UK",
    img: "assets/review1.png",
    review:
      "From the very start, Olamide was professional, proactive, and super easy to collaborate with. He built a responsive dashboard for our internal tools, and the performance improvements were immediate. His frontend skills are top-tier.",
  },
  {
    id: 2,
    name: "Mark Ross",
    position: "Based in USA",
    img: "assets/review2.png",
    review:
      "Olamide exceeded our expectations with the landing page he built. The design was clean, the animations were smooth, and the user experience was on point. He took our vision and brought it to life flawlessly. Would definitely work with him again!",
  },
  {
    id: 3,
    name: "John Doe",
    position: "Based in Dubai ",
    img: "assets/review3.png",
    review:
      "We needed a fast, mobile-friendly portfolio site, and Olamide delivered exactly that — and then some. He was quick, communicative, and nailed every detail. Couldn’t have asked for a smoother process.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "Based in Germany",
    img: "assets/review4.png",
    review:
      "Olamide helped us launch our startup's MVP frontend with React and Tailwind, and the results were 🔥. Clean code, sharp design, and everything delivered on time. He’s a game changer if you need someone reliable and skilled.",
  },
];

export const myProjects = [
  {
    title: "Nike - E-commerce Landing Page",
    desc: "A high-converting landing page for a Nike-inspired e-commerce concept, built to grab attention and showcase products with bold visuals and modern aesthetics.",
    subdesc:
      "Crafted with Next.js 14, Tailwind CSS, TypeScript, and Framer Motion, this responsive frontend focuses solely on sleek design, engaging animations, and clear calls to action — no backend functionality included.",
    href: "https://nike-landing-page-pi-tan.vercel.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Brainwave - Real-Time AI Chat App Landing Page",
    desc: "A sleek and modern landing page concept for Brainwave — a fictional real-time AI chat app, designed to showcase key features and attract early users or investors.",
    subdesc:
      "Built with Next.js, Tailwind CSS, TypeScript, and Framer Motion, this fully responsive frontend focuses on clean visuals, animated interactions, and clear messaging — no backend or real-time features included.",

    href: "https://brainwave-tau-six.vercel.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.svg",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "MovieApp - Watch Thrilling Movies",
    desc: "A visually engaging movie streaming app landing page built to showcase trending, popular, and upcoming films with a modern UI and smooth user experience.",
    subdesc:
      "Developed using React, Tailwind CSS, and Appwrite, this responsive frontend project demonstrates clean layout, dynamic content rendering, and a cinematic design — perfect for users looking to explore movies effortlessly.",
    href: "https://movie-app-nine-ivory.vercel.app/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Appwrite",
        path: "/assets/appwrite.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Freelance Projects",
    pos: "Frontend Developer",
    duration: "Oct 2023 – Present",
    title:
      "Developed and deployed responsive web interfaces using React, Tailwind CSS, and TypeScript. Projects include a movie discovery app, SaaS landing pages, and portfolios, with a focus on clean UI and optimized performance.",
    icon: "/assets/react.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Open Source Contributor",
    pos: "Contributor",
    duration: "Jul 2023 – Oct 2023",
    title:
      "Contributed to open-source projects by improving React components, fixing Tailwind layouts, and enhancing UI interactions. Gained practical experience with GitHub and collaborative development workflows.",
    icon: "/assets/github.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Personal Projects",
    pos: "Intern (Self-Initiated)",
    duration: "Apr 2023 – Jul 2023",
    title:
      "Built foundational frontend skills through hands-on projects using JavaScript, React, and Tailwind CSS. Focused on reusable components, responsive layouts, and developing a strong UI/UX sense.",
    icon: "/assets/code.png",
    animation: "salute",
  },
];
