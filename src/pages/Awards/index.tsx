import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import { developerAnimation } from "../../assets/lottie";
import GlowCard from "../../components/GlowCard";
import Section from "../../components/Section";
import { AWARDS_DATA } from "./data";

function Awards() {
    const { t, i18n } = useTranslation();
    const locale = (i18n.language as "en" | "vi") || "en";
    return (
        <Section className="py-20" id="awards">
            <div className="container">
                {/* Header */}
                <div className="flex flex-col items-center gap-3">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-brand-name-200 uppercase">
                        {t("awardsSection.awards")}
                    </h2>
                    <p className="text-center max-w-[500px]">
                        {t("awardsSection.desc")}
                    </p>
                </div>

                {/* Content */}
                <div className="flex items-center mt-10">
                    {/* left */}
                    <div className="shrink-0 lg:w-[60%] xl:w-[65%]">
                        {AWARDS_DATA.map((award, index) => (
                            <GlowCard
                                key={index}
                                year={award.year}
                                className="transition-all duration-500 hover:-translate-y-6 mt-10"
                            >
                                <div className="flex items-center lg:gap-6 xl:gap-8 ">
                                    <div className="text-violet-500 lg:text-5xl xl:text-6xl">
                                        <MilitaryTechIcon fontSize="inherit" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {award.items.map((item, index) => (
                                            <p
                                                className="text-sm xl:text-base"
                                                key={index}
                                            >
                                                {item[locale]}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </GlowCard>
                        ))}
                    </div>

                    {/* Right */}
                    <div className="w-full max-w-[400px] ml-auto">
                        <Lottie animationData={developerAnimation} />
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Awards;
