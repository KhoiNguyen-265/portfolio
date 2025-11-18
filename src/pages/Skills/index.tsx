import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import LabelSection from "../../components/LabelSection";
import Section from "../../components/Section";
import { SKILLS_DATA } from "../../helpers/data";
import skillsImage from "../../helpers/skill-Imgae";

function Skills() {
    const { t } = useTranslation();
    return (
        <Section id="skills" className="py-20">
            <div className="">
                {/* Heading */}
                <div className="flex justify-center">
                    <LabelSection label={t("skillsSection.skill")} />
                </div>

                {/* Marquee */}
                <div className="overflow-hidden mt-20">
                    <Marquee pauseOnHover pauseOnClick>
                        {SKILLS_DATA.map((skill, index) => (
                            <div
                                className="cursor-pointer border border-[#1f223c] bg-skill-card-bg m-3 sm:m-5 w-36 rounded-lg transition-all duration-500 hover:scale-120 hover:border-text-blue-100"
                                key={index}
                            >
                                {/* Decorate top */}
                                <div className="flex justify-center">
                                    <div className="h-px w-3/4 top-skill-card"></div>
                                </div>

                                {/* Skill */}
                                <div className="flex flex-col items-center justify-center gap-3 p-6">
                                    <div className="h-8 sm:h-10">
                                        <img
                                            src={skillsImage(skill)}
                                            alt={skill}
                                            width={40}
                                            height={40}
                                            className="h-full"
                                        />
                                    </div>
                                    <p className="text-text2 text-sm sm:text-base">
                                        {skill}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </Section>
    );
}

export default Skills;
