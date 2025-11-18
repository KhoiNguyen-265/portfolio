import Section from "../../components/Section";
import AboutLeft from "./components/AboutLeft";
import AboutRight from "./components/AboutRight";

function About() {
    return (
        <Section id="about" className="py-20">
            <div className="container">
                <div className="flex items-center gap-30">
                    <AboutLeft />
                    <AboutRight />
                </div>
            </div>
        </Section>
    );
}

export default About;
