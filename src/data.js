import bontravel from "./Assets/projects/bontravel/bontravel.png";
import bontravel1 from "./Assets/projects/bontravel/bontravel1.png";
import bontravel2 from "./Assets/projects/bontravel/bontravel2.png";
import bontravel3 from "./Assets/projects/bontravel/bontravel3.png";
import bontravel4 from "./Assets/projects/bontravel/bontravel4.png";
import bontravel5 from "./Assets/projects/bontravel/bontravel5.png";
import bontravel6 from "./Assets/projects/bontravel/bontravel6.png";
import bontravel7 from "./Assets/projects/bontravel/bontravel7.png";
import bontravel8 from "./Assets/projects/bontravel/bontravel8.png";

// import csharp from "./Assets/projects/c#";

import pklant from "./Assets/projects/portfolioklant/pklant.png";
import pklant1 from "./Assets/projects/portfolioklant/pklant1.png";
import pklant2 from "./Assets/projects/portfolioklant/pklant2.png";
import pklant3 from "./Assets/projects/portfolioklant/pklant3.png";
import pklant4 from "./Assets/projects/portfolioklant/pklant4.png";
import pklant5 from "./Assets/projects/portfolioklant/pklant5.png";
import pklant6 from "./Assets/projects/portfolioklant/pklant6.png";
import pklant7 from "./Assets/projects/portfolioklant/pklant7.png";

import pPatricia_v1 from "./Assets/projects/portfoliopatricia_v1/pPatricia_v1.png";
import pPatricia_v1_1 from "./Assets/projects/portfoliopatricia_v1/pPatricia_v1_1.png";
import pPatricia_v1_2 from "./Assets/projects/portfoliopatricia_v1/pPatricia_v1_2.png";
import pPatricia_v1_3 from "./Assets/projects/portfoliopatricia_v1/pPatricia_v1_3.png";

import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";



// portfolio projects
export const projects = [
    {
        images: bontravel,
        images1: bontravel1,
        images2: bontravel2,
        images3: bontravel3,
        images4: bontravel4,
        images5: bontravel5,
        images6: bontravel6,
        images7: bontravel7,
        images8: bontravel8,
        // images9: bontravel8,
        title: 'pftitle1',
        body: 'pfbody1',
    },
    // {
    //     img: csharp,
    //     title: '{t("pftitle2")}',
    //     body: '{t("pfbody2")}',
    // },
    {
        images: pklant1,
        images1: pklant,
        images2: pklant2,
        images3: pklant3,
        images4: pklant4,
        images5: pklant5,
        images6: pklant6,
        images7: pklant7,
        // images8: pklant8,
        title: 'pftitle3',
        body: 'pfbody3',
    },
    {
        images: pPatricia_v1,
        images1: pPatricia_v1_1,
        images2: pPatricia_v1_2,
        images3: pPatricia_v1_3,
        // images4: pPatricia_v1_4,
        // images5: bontravel5,
        // images6: bontravel6,
        // images7: bontravel7,
        // images8: bontravel8,
        title: 'pftitle4',
        body: 'pfbody4',
    },
];

// export const swiper_images = [
//     {
//         images: bontravel,
//         images1: bontravel1,
//         images2: bontravel2,
//         images3: bontravel3,
//         images4: bontravel4,
//         images5: bontravel5,
//         images6: bontravel6,
//         images7: bontravel7,
//         images8: bontravel8,
//         // images9: bontravel8,
//     },
//     {
//         images: pklant,
//         images1: pklant1,
//         images2: pklant2,
//         images3: pklant3,
//         images4: pklant4,
//         images5: pklant5,
//         images6: pklant6,
//         images7: pklant7,
//         // images8: pklant8,
//     },
//     {
//         images: pPatricia_v1,
//         images1: pPatricia_v1_1,
//         images2: pPatricia_v1_2,
//         images3: pPatricia_v1_3,
//         // images4: pPatricia_v1_4,
//         // images5: bontravel5,
//         // images6: bontravel6,
//         // images7: bontravel7,
//         // images8: bontravel8,
//     },
// ]

// social media
export const socials = [
    {
        icon: <HiOutlineMail />,
        href: 'mailto:patriciapodhradska1@gmail.com',
    },
    {
        icon: <FaLinkedin />,
        href: 'https://www.linkedin.com/in/patricia-p-34984227a',
    },
    {
        icon: <IoCall />,
        href: 'tel:+31649123302',
    },
    {
        icon: <BsGithub />,
        href: 'https://github.com/patriciaParsa',
    },
];


// contact
export const contacts = [
    {
        icon: <HiOutlineMail />,
        title: 'contact-email',
        href: 'mailto:patriciapodhradska1@gmail.com',
        description: 'contact-email'
    },
    {
        icon: <IoCall />,
        title: 'contact-bellen',
        href: 'tel:+31649123302',
        description: 'contact-bellen'
    },
    {
        icon: <BsGithub />,
        title: 'contact-github',
        href: 'https://github.com/patriciaParsa',
        description: 'contact-github'
    },
    {
        icon: <FaLinkedin />,
        title: 'contact-linkedin',
        href: 'https://www.linkedin.com/in/patricia-p-34984227a',
        description: 'contact-linkedin'
    },
];

export const navlinks = [
    {
        name: 'home',
        dest: '/'
    },
    {
        name: 'portfolio',
        dest: '/portfolio'
    },
    {
        name: 'contact',
        dest: '/contact'
    },
    {
        name: 'about',
        dest: '/about'
    }
]