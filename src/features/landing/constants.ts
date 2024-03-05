export type Project = {
  url: string;
  banner?: {
    url: string;
    width: number;
    height: number;
  };
  title: string;
  description: string;
  categories: string[];
};

export const PROJECTS: Project[] = [
  {
    url: "https://kirillzhosul.ru",
    banner: {
      url: "/showcase1.png",
      width: 1317,
      height: 670,
    },
    title: "Portfolio Website",
    categories: ["Tailwind", "Next.js"],
    description:
      "This page that you looking at, place with information about me (landing)",
  },
  {
    url: "https://florgon.com",
    banner: {
      url: "/showcase2.jpg",
      width: 100,
      height: 100,
    },
    title: "Florgon",
    description:
      "My own project that combines multiple services for users, currently unavailable for some period of time",
    categories: ["Next.js", "Tailwind", "Docker", "PostgreSQL"],
  },
];
