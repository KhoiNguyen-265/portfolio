import { useTranslation } from "react-i18next";
import Section from "../../components/Section";
import ProjectCard from "./components/ProjectCard";
import { PROJECTS_DATA } from "./data";

function Project() {
    const { t, i18n } = useTranslation();
    const locale = (i18n.language as "en" | "vi") || "en";
    return (
        <Section id="projects" className="py-20">
            <div className="container">
                {/* Head */}
                <div className="flex flex-col gap-2 items-center">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-brand-name-200 uppercase ">
                        {t("projectSection.project")}
                    </h2>
                    <p className="">{t("projectSection.desc")}</p>
                </div>
                <div className="mt-14 grid grid-cols-3 gap-8">
                    {PROJECTS_DATA.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            locale={locale}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}

export default Project;
