import Section from "../../../../components/Section";
import HeroLeft from "./components/HeroLeft";
import HeroRight from "./components/HeroRight";

function Hero() {
    return (
        <Section className="py-20">
            <div className="container">
                <div className="flex items-center justify-between">
                    <HeroLeft />
                    <HeroRight />
                </div>
            </div>
        </Section>
    );
}

export default Hero;
