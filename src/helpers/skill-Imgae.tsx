import {
    bootrap,
    c,
    canva,
    cplusplus,
    csharp,
    css,
    dart,
    docker,
    figma,
    git,
    html,
    java,
    javascript,
    kotlin,
    materialui,
    mongoDB,
    mysql,
    nestjs,
    nextJS,
    nodejs,
    php,
    postgresql,
    react,
    redux,
    swift,
    tailwind,
    typescript,
} from "../assets/skills";

function skillsImage(skill: string) {
    const skillID = skill.toLocaleLowerCase();

    switch (skillID) {
        case "bootrap":
            return bootrap;
        case "c":
            return c;
        case "canva":
            return canva;
        case "c++":
            return cplusplus;
        case "c#":
            return csharp;
        case "css":
            return css;
        case "dart":
            return dart;
        case "docker":
            return docker;
        case "figma":
            return figma;
        case "git":
            return git;
        case "html":
            return html;
        case "java":
            return java;
        case "javascript":
            return javascript;
        case "kotlin":
            return kotlin;
        case "materialui":
            return materialui;
        case "mongodb":
            return mongoDB;
        case "mysql":
            return mysql;
        case "nextjs":
            return nextJS;
        case "nodejs":
            return nodejs;
        case "php":
            return php;
        case "postgresql":
            return postgresql;
        case "react":
            return react;
        case "redux":
            return redux;
        case "swift":
            return swift;
        case "tailwind":
            return tailwind;
        case "typescript":
            return typescript;
        case "nestjs":
            return nestjs;
        default:
            break;
    }
}

export default skillsImage;
