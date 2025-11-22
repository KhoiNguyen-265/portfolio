import About from "../About";
import Awards from "../Awards";
import Contact from "../Contact";
import Education from "../Education";
import Project from "../Project";
import Skills from "../Skills";
import Hero from "./Hero";

function Home() {
    return (
        <div className="bg-bg-body text-text2">
            <Hero />
            <About />
            <Skills />
            <Project />
            <Education />
            <Awards />
            <Contact />
        </div>
    );
}

export default Home;
