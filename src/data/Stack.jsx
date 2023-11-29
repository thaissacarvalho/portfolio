import {
    BiLogoBootstrap, BiLogoFigma, BiLogoGithub, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoReact,
    /*BiLogoRedux*/ BiLogoSass, BiLogoPostgresql, BiLogoTailwindCss, BiLogoTrello, BiLogoTypescript
} from "react-icons/bi";
import { FaCss3Alt, FaNode } from "react-icons/fa";
import { PiWallFill } from 'react-icons/pi'
import { /*SiMysql*/ SiNextdotjs, SiNotion, SiSequelize, SiStyledcomponents, SiVite } from "react-icons/si";

const Stack = {
    Frontend: [
        {
            id: 1,
            icon: <BiLogoHtml5 />,
            title: "HTML",
        },
        {
            id: 2,
            icon: <FaCss3Alt />,
            title: "CSS",
        },
        {
            id: 3,
            icon: <BiLogoJavascript />,
            title: "Javascript",
        },
        {
            id: 4,
            icon: <BiLogoSass />,
            title: "SASS",
        },
        {
            id: 5,
            icon: <BiLogoTailwindCss />,
            title: "Tailwind CSS",
        },
        {
            id: 6,
            icon: <BiLogoReact />,
            title: "React",
        },
        {
            id: 7,
            icon: <BiLogoBootstrap />,
            title: "Bootstrap",
        },
        {
            id: 8,
            icon: <SiStyledcomponents />,
            title: "Styled Components",
            style: "styled-components",
        },
        {
            id: 9,
            icon: <SiNextdotjs />,
            title: "Next.js",
            style: "next-js",
        }
    ],
    Backend: [
        {
            id: 1,
            icon: <FaNode />,
            title: "Node.js",
            style: "node-js",
        },
        /*{
            id: 2,
            icon: <SiMysql/>,
            title: "MySQL",
            style: "text-[#] md:text-2xl"
    ]    },*/
        {
            id: 3,
            icon: <BiLogoMongodb />,
            title: "MongoDB",
            style: "text-[#] md:text-2xl"

        },
        {
            id: 4,
            icon: <SiSequelize />,
            title: "Sequelize",
            style: "text-[#] md:text-2xl"
        },
        {
            id: 5,
            icon: <BiLogoTypescript/>,
            title: "Typescript",
            style: "text-[#] md:text-2xl"
        },
        {
            id: 6,
            icon: <BiLogoPostgresql/>,
            title: "PostgreSQL",
            style: "text-[#] md:text-2xl"
        },
    ],
    Tools: [
        {
            id: 1,
            icon: <BiLogoFigma />,
            title: "Figma",
        },
        {
            id: 2,
            icon: <BiLogoGithub />,
            title: "GitHub",
        },
        {
            id: 3,
            icon: <SiVite />,
            title: "Vite",
        },
        {
            id: 4,
            icon: <BiLogoTrello />,
            title: "Trello",
        },
        {
            id: 5,
            icon: <SiNotion />,
            title: "Notion",
        },
        {
            id: 6,
            icon: <PiWallFill />,
            title: "Formik",
        },
    ]
}

export default Stack;