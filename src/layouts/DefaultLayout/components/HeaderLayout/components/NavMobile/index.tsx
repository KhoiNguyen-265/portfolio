import ContactlessOutlinedIcon from "@mui/icons-material/ContactlessOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { useTranslation } from "react-i18next";

interface INavMobile {
    isOpen: boolean;
    onClose: () => void;
}

function NavMobile({ isOpen = false, onClose }: INavMobile) {
    const { t } = useTranslation();

    const navLinks = [
        {
            id: "home",
            label: t("headerDefaultLayout.home"),
            icon: <HomeOutlinedIcon />,
        },
        {
            id: "about",
            label: t("headerDefaultLayout.about"),
            icon: <PersonOutlinedIcon />,
        },
        {
            id: "skills",
            label: t("headerDefaultLayout.skill"),
            icon: <HandymanOutlinedIcon />,
        },
        {
            id: "projects",
            label: t("headerDefaultLayout.project"),
            icon: <WorkOutlineOutlinedIcon />,
        },
        {
            id: "awards",
            label: t("headerDefaultLayout.awards"),
            icon: <EmojiEventsOutlinedIcon />,
        },
        {
            id: "contact",
            label: t("headerDefaultLayout.contact"),
            icon: <ContactlessOutlinedIcon />,
        },
    ];

    if (!isOpen) return;

    return (
        <div className="lg:hidden flex">
            {/* Overlay */}
            <div
                onClick={onClose}
                className="fixed inset-0 bg-black/50 z-49"
            ></div>

            {/* Content */}
            <div
                className={`fixed z-999 top-0 right-0 bg-bg-body w-[60%] h-[calc(100vh+64px)] transition-all duration-500 slide-in`}
            >
                <div className="px-10 py-5">
                    <a
                        href="#"
                        className="text-text1 text-3xl font-bold shrink-0"
                        onClick={onClose}
                    >
                        {t("headerDefaultLayout.brand")}
                    </a>
                    <nav className="flex flex-col justify-center gap-1 mt-5 -ml-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                className="link flex flex-1 items-center py-4 px-3 gap-2 text-sm"
                                onClick={onClose}
                            >
                                <span>{link.icon}</span>
                                <span>{link.label}</span>
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavMobile;
