export type Locale = "en" | "vi";

export interface IProject {
    id: number;
    imgPath: string;
    title: {
        en: string;
        vi: string;
    };
    desc: {
        en: string;
        vi: string;
    };
    githubLink?: string;
    demoLink?: string;
}
