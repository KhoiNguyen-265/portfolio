import ContactlessOutlinedIcon from "@mui/icons-material/ContactlessOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { useTranslation } from "react-i18next";
function Navigation() {
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
            id: "Skills",
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
    return (
        <nav className="flex items-center">
            {navLinks.map((link) => (
                <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="link flex items-center gap-1 px-4 py-3 text-sm"
                >
                    <span>{link.icon}</span>
                    <span>{link.label}</span>
                </a>
            ))}
        </nav>
    );
}

export default Navigation;
