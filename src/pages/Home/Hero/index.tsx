import Section from "../../../components/Section";
import HeroLeft from "./components/HeroLeft";
import HeroRight from "./components/HeroRight";

function Hero() {
    return (
        <Section id="home" className="py-10 lg:py-20">
            <div className="container">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-5">
                    <HeroLeft />
                    <HeroRight />
                </div>
            </div>
        </Section>
    );
}

export default Hero;
