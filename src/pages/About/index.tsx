import { useTranslation } from "react-i18next";
import Section from "../../components/Section";
import AboutLeft from "./components/AboutLeft";
import AboutRight from "./components/AboutRight";

function About() {
    const { i18n } = useTranslation();
    return (
        <Section id="about" className="py-20">
            <div className="container">
                {/* Heading */}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                    {i18n.resolvedLanguage === "en" ? (
                        <>
                            LET ME{" "}
                            <span className="text-brand-name-200 font-bold">
                                INTRODUCE
                            </span>{" "}
                            MYSELF
                        </>
                    ) : (
                        <>
                            <span className="text-brand-name-200 font-bold">
                                GIỚI THIỆU
                            </span>{" "}
                            BẢN THÂN
                        </>
                    )}
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-10 xl:gap-30 mt-10">
                    <AboutLeft />
                    <AboutRight />
                </div>
            </div>
        </Section>
    );
}

export default About;
