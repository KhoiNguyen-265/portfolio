import clsx from "clsx";
import type React from "react";
import { blur } from "../../assets/images";

interface IGlowCard {
    className?: string;
    year: string;
    children: React.ReactNode;
}

function GlowCard({ className = "", year = "", children }: IGlowCard) {
    return (
        <div className={clsx("group relative rounded-xl", className)}>
            <div className="relative rounded-[inherit] p-px overflow-hidden">
                {/* border */}
                <div
                    className="
                        pointer-events-none
                        absolute inset-0 rounded-[inherit]
                        opacity-0 group-hover:opacity-100
                        bg-[conic-gradient(from_0deg,var(--color-cyan-400),var(--color-indigo-500),var(--color-fuchsia-500),var(--color-cyan-400))]
                    "
                />

                {/* Card content */}
                <div className="relative z-1 bg-bg-body p-3 text-text2 border group-hover:border-transparent border-border-row-section rounded-[inherit]">
                    <img
                        src={blur}
                        className="hidden dark:block w-full bottom-0 absolute left-1/2 -translate-x-1/2"
                        alt=""
                    />
                    <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-brand-name-100">
                            {year}
                        </p>
                    </div>
                    <div className="px-3 py-5">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default GlowCard;
