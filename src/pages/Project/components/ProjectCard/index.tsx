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
                "flex flex-col h-full border border-border rounded-2xl transition-all duration-500 shadow-md hover:-translate-y-4 hover:shadow-2xl hover:scale-[1.05] dark:shadow-[0_0_5px_rgba(56,189,248,0.9)] dark:hover:shadow-[0_0_30px_rgba(56,189,248,1)]",
                className
            )}
        >
            {/* Image */}
            <div className="w-full h-[250px] rounded-t-2xl shrink-0">
                <img
                    className="w-full h-full object-cover flex rounded-t-[inherit]"
                    src={imgPath}
                    alt={titleText}
                    loading="lazy"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 py-6 px-5">
                <h3 className="font-semibold text-sm md:text-base lg:text-xl text-text2">
                    {titleText}
                </h3>
                <p className="line-clamp-5 mt-3 text-xs md:text-sm lg:text-base">
                    {descText}
                </p>
                <div className="flex gap-3 mt-auto pt-3">
                    <Button
                        rounded={false}
                        className="rounded-lg flex items-center gap-1"
                        size="sm"
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon fontSize="inherit" />
                        Github
                    </Button>
                    {demoLink && demoLink !== "#!" && (
                        <Button
                            rounded={false}
                            className="rounded-lg flex items-center gap-1"
                            size="sm"
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Demo <EastIcon fontSize="inherit" />
                        </Button>
                    )}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
