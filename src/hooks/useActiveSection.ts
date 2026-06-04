import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], offset: number = 100) {
    const [activeSection, setActiveSection] = useState<string>("home");

    useEffect(() => {
        const handleScroll = () => {
            // Check if we are at the bottom of the page
            const isBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 50;
            if (isBottom) {
                setActiveSection(sectionIds[sectionIds.length - 1]);
                return;
            }

            // Find the section that currently takes up the top part of the viewport
            let currentSection = activeSection;
            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the element is above or close to the offset line
                    // and the bottom of the element is below that line
                    if (rect.top <= offset && rect.bottom > offset) {
                        currentSection = id;
                        break;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        // Call once on mount to set initial active section
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sectionIds, offset, activeSection]);

    return activeSection;
}
