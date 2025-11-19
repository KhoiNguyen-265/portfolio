import { project01, project02, project03 } from "../../../assets/images";
import type { IProject } from "../types";

export const PROJECTS_DATA: IProject[] = [
    {
        id: 1,
        imgPath: project01,
        title: {
            en: "Project 01",
            vi: "Dự án 01",
        },
        desc: {
            en: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, nihil amet laboriosam beatae dolores sint molestias numquam molestiae similique quia!",
            vi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, suscipit? Illo, aperiam deleniti? Impedit sint quisquam, dignissimos officiis tempora iure!",
        },
        githubLink: "#!",
        demoLink: "#!",
    },
    {
        id: 2,
        imgPath: project02,
        title: {
            en: "Project 02",
            vi: "Dự án 02",
        },
        desc: {
            en: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, nihil amet laboriosam beatae dolores sint molestias numquam molestiae similique quia!",
            vi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, suscipit? Illo, aperiam deleniti? Impedit sint quisquam, dignissimos officiis tempora iure!",
        },
        githubLink: "#!",
        demoLink: "#!",
    },
    {
        id: 3,
        imgPath: project03,
        title: {
            en: "Project 03",
            vi: "Dự án 03",
        },
        desc: {
            en: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, nihil amet laboriosam beatae dolores sint molestias numquam molestiae similique quia!",
            vi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, suscipit? Illo, aperiam deleniti? Impedit sint quisquam, dignissimos officiis tempora iure!",
        },
        githubLink: "#!",
        demoLink: "#!",
    },
];
