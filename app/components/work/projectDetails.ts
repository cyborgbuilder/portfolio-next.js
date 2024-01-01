

import {
    SiCplusplus,
    SiExpress,
    SiFramer,
    SiGithub, SiMongodb, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRemix,
    SiRust,
    SiSolidity,
    SiTailwindcss,
    SiTypescript,
    SiZig
} from "react-icons/si";
import {IconType} from "react-icons";


export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Prasara Washing Plant",
        description:
            "Built a resilient web app for Prasara Washing Plant using MERN technologies. The platform supports seamless order processing, real-time tracking, secure payments (including cryptocurrency transactions), and features a dynamic blog for engaging content.",
        technologies: [ SiReact, SiNextdotjs, SiMongodb, SiExpress, SiSolidity],
        techNames: ["React", "NextJs", "Mongodb", "ExpressJs", "Solidity"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/nuIIpointerexception/www.seekvisualartist.com",
        demo: "https://www.seekvisualartist.com/",
        image: "/prasara.jpg",
        available: true,
    },
    {
        id: 1,
        name: "Metamoth Minting Web",
        description:
            "Created Metamoth, an NFT minting web application tailored for a UK-based artist. The platform ensures a seamless minting process for unique digital artworks",
        technologies: [SiReact, SiSolidity, SiRemix],
        techNames: ["React", "Solidity", "Remix"],
        techLinks: ["https://cplusplus.com/", "https://www.rust-lang.org/", "https://neovim.io/"],
        github: "https://github.com/nuIIpointerexception/codewars",
        demo: "https://www.codewars.com/",
        image: "/metamoth.jpg",
        available: true,
    },
    {
        id: 2,
        name: "Sokari Music Event",
        description:
            "Programmed a distinctive and animated ticket booking website for the Sokari event at Uva Wellassa University, showcasing unique animations through hard coding.",
        technologies: [SiZig],
        techNames: ["Zig"],
        techLinks: ["https://www.ziglang.org/"],
        github: "https://github.com/nuIIpointerexception/",
        demo: "https://github.com/nuIIpointerexception/",
        image: "/sokari.jpg",
        available: true,
    },
    {
        id: 2,
        name: "Sokari Music Event",
        description:
            "Programmed a distinctive and animated ticket booking website for the Sokari event at Uva Wellassa University, showcasing unique animations through hard coding.",
        technologies: [SiZig],
        techNames: ["Zig"],
        techLinks: ["https://www.ziglang.org/"],
        github: "https://github.com/nuIIpointerexception/",
        demo: "https://github.com/nuIIpointerexception/",
        image: "/sokari.jpg",
        available: true,
    }
];
