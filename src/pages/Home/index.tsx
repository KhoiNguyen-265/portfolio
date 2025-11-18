import About from "../About";
import Skills from "../Skills";
import Hero from "./Hero";

function Home() {
    return (
        <div className="bg-bg-body text-text2">
            <Hero />
            <About />
            <Skills />
        </div>
    );
}

export default Home;
