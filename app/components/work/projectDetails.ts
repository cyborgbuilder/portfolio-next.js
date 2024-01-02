

import {
    SiCplusplus,
    SiCss3,
    SiExpress,
    SiFramer,
    SiGithub, SiHtml5, SiMongodb, SiNeovim,
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
        techLinks: ["https://react.dev/", "https://nextjs.org/", "https://www.mongodb.com/", "https://expressjs.com/", "https://soliditylang.org/"],
        github: "https://github.com/cyborgbuilder/Prasara_MERN",
        demo: "https://www.seekvisualartist.com/",
        image: "/prasara.jpg",
        available: false,
    },
    {
        id: 1,
        name: "Metamoth Minting Web",
        description:
            "Created Metamoth, an NFT minting web application tailored for a UK-based artist. The platform ensures a seamless minting process for unique digital artworks",
        technologies: [SiReact, SiSolidity, SiRemix],
        techNames: ["React", "Solidity", "Remix"],
        techLinks: ["https://react.dev/", "https://soliditylang.org/", "https://remix.ethereum.org/"],
        github: "https://github.com/cyborgbuilder/metamoth--v2",
        demo: "https://cheery-seahorse-e3e2e7.netlify.app/",
        image: "/metamoth.jpg",
        available: true,
    },
    {
        id: 2,
        name: "Sokari Music Event",
        description:
            "Programmed a distinctive and animated ticket booking website for the Sokari event at Uva Wellassa University, showcasing unique animations through hard coding.",
        technologies: [SiReact, SiHtml5, SiCss3],
        techNames: ["ReactJS", "HTML", "CSS"],
        techLinks: ["https://react.dev/", "", ""],
        github: "https://github.com/cyborgbuilder/sokari_uwu",
        demo: "https://sokari.click/",
        image: "/sokari.jpg",
        available: true,
    },
    {
        id: 3,
        name: "Yoogoo NFT Project",
        description:
            "Crafted a distinctive website for the Sri Lankan NFT project 'Yogoo,' offering a unique online presence for the platform.",
        technologies: [SiReact, SiHtml5, SiCss3],
        techNames: ["ReactJS", "HTML", "CSS"],
        techLinks: ["https://react.dev/", "", ""],
        github: "https://github.com/cyborgbuilder/yoogoo-nft",
        demo: "https://glowing-stroopwafel-d43d90.netlify.app/",
        image: "/yoogoo2.jpg",
        available: true,
    },
    {
        id: 4,
        name: "Crypto Cell Phones",
        description:
            "Developed an animated website for the Crypto Cell Phones NFT project, enhancing the online experience with dynamic visuals and engaging content",
        technologies: [SiReact, SiHtml5, SiCss3],
        techNames: ["ReactJS", "HTML", "CSS"],
        techLinks: ["https://react.dev/", "", ""],
        github: "https://github.com/cyborgbuilder/crypto-cellphones",
        demo: "",
        image: "/cell.jpg",
        available: true,
    }
];
