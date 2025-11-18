import { heroBg } from "../../assets/images";

function Section({ children, className = "", id = "" }) {
    return (
        <section id={id} className={`relative ${className}`}>
            <div
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundRepeat: "no-repeat",
                }}
                className="absolute top-0 left-1/2 h-full w-full -translate-x-1/2"
            ></div>
            {children}
        </section>
    );
}

export default Section;
