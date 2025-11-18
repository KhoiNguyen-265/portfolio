import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";
import Button from "../../../../../components/Button";

const socials: { icon: React.ReactElement; id: number }[] = [
    {
        id: 1,
        icon: <GitHubIcon fontSize="inherit" className="relative" />,
    },
    {
        id: 2,
        icon: <FacebookIcon fontSize="inherit" className="relative" />,
    },
];

function HeroLeft({ className = "" }) {
    const { t } = useTranslation();
    return (
        <div className={`shrink-0 w-1/2 ${className}`}>
            {/* Title */}
            <div className="text-2xl md:text-3xl lg:text-5xl font-semibold">
                <h2>
                    {t("heroSection.greet")}
                    <span className="wave">👋🏻</span>
                </h2>
                <h2 className="mt-5">
                    {t("heroSection.introduce")}{" "}
                    <span className="text-brand-name-200">
                        {t("headerDefaultLayout.brand")}
                    </span>
                </h2>
            </div>
            {/* Desc */}
            <p className="text-brand-name-100 mt-2">
                <Typewriter
                    words={[
                        "3rd-year Information Technology student at Hanoi University of Mining and Geology",
                        "Front-end Developer",
                        "Goal: Becoming a Software Engineer",
                    ]}
                    loop
                    cursor
                />
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 text-[40px] mt-3 ">
                {socials.map((item) => (
                    <a
                        href="https://github.com/KhoiNguyen-265"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={item.id}
                        className="transition-all duration-300 hover:text-brand-name-200 hover:scale-110"
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
            {/* CTA */}
            <div className="flex items-center gap-6 mt-8">
                <Button variant="outline" size="lg" className="uppercase">
                    <span className="flex items-center gap-1">
                        {t("heroSection.exp")}{" "}
                        <PersonOutlineOutlinedIcon className="text-inherit" />
                    </span>
                </Button>
                <Button size="lg" className="uppercase">
                    <span className="flex item-center gap-1">
                        {t("heroSection.cv")}{" "}
                        <FileDownloadOutlinedIcon className="text-inherit" />
                    </span>
                </Button>
            </div>
        </div>
    );
}

export default HeroLeft;
