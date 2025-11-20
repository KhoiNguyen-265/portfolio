import SchoolIcon from "@mui/icons-material/School";
import Lottie from "lottie-react";
import { educationAnimation } from "../../assets/lottie";
import GlowCard from "../../components/GlowCard";
import LabelSection from "../../components/LabelSection";
import Section from "../../components/Section";

function Education() {
    return (
        <Section className="py-20">
            <div className="container">
                <div>
                    {/* Heading */}
                    <div className="flex justify-center">
                        <LabelSection className="uppercase" label="Education" />
                    </div>

                    {/* Content */}
                    <div className="flex">
                        <div className="w-1/2 flex justify-center">
                            <Lottie
                                className="max-w-[400px] w-full"
                                animationData={educationAnimation}
                            />
                        </div>
                        <div className="flex-1 mt-20">
                            <GlowCard
                                className="transition-all duration-500 hover:-translate-y-10"
                                year="2023 - Present"
                            >
                                <div className="flex items-center gap-8">
                                    <div className="text-violet-500 text-5xl">
                                        <SchoolIcon fontSize="inherit" />
                                    </div>
                                    <div>
                                        <h3 className="text-base sm:text-xl mb-2 font-medium uppercase">
                                            Information Technology
                                        </h3>
                                        <p className="text-sm sm:text-base">
                                            Hanoi University of Mining and
                                            Geology (HUMG) - GPA: 3.63
                                        </p>
                                    </div>
                                </div>
                            </GlowCard>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Education;
