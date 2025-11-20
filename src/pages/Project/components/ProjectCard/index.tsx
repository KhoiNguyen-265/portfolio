import EastIcon from "@mui/icons-material/East";
import GitHubIcon from "@mui/icons-material/GitHub";
import clsx from "clsx";
import Button from "../../../../components/Button";
import type { IProject, Locale } from "../../types";

interface IProjectCard {
    project: IProject;
    locale: Locale;
    className?: string;
}

function ProjectCard({ project, locale, className = "" }: IProjectCard) {
    const {
        imgPath,
        title,
        desc,
        githubLink = "#!",
        demoLink = "#!",
    } = project;
    const titleText = title[locale];
    const descText = desc[locale];

    return (
        <article
            className={clsx(
                "border border-border rounded-2xl transition-all duration-500 shadow-md hover:-translate-y-4 hover:shadow-2xl hover:scale-[1.05] dark:shadow-[0_0_5px_rgba(56,189,248,0.9)] dark:hover:shadow-[0_0_30px_rgba(56,189,248,1)]",
                className
            )}
        >
            {/* Image */}
            <div className="w-full h-[250px] rounded-t-2xl">
                <img
                    className="w-full h-full object-cover flex rounded-t-[inherit]"
                    src={imgPath}
                    alt={titleText}
                    loading="lazy"
                />
            </div>

            {/* Content */}
            <div className="py-6 px-5">
                <h3 className="font-semibold text-sm md:text-base lg:text-xl text-text2">
                    {titleText}
                </h3>
                <p className="line-clamp-5 mt-3 text-xs md:text-sm lg:text-base">
                    {descText}
                </p>
                <div className="flex gap-3 mt-3">
                    <Button
                        rounded={false}
                        className="rounded-lg flex items-center gap-1"
                        size="sm"
                        href={githubLink}
                    >
                        <GitHubIcon fontSize="inherit" />
                        Github
                    </Button>
                    <Button
                        rounded={false}
                        className="rounded-lg flex items-center gap-1"
                        size="sm"
                        href={demoLink}
                    >
                        Demo <EastIcon fontSize="inherit" />
                    </Button>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
