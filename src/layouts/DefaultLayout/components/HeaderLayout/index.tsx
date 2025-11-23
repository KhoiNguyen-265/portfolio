import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelect from "../../../../components/LanguageSelect";
import { useTheme } from "../../../../hooks/useTheme";
import Navigation from "./components/Navigation";
import NavMobile from "./components/NavMobile";

function HeaderLayout() {
    const { t } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-bg-tertiary text-text2/80 sticky top-0 z-50">
            <div className="container">
                <div className="flex items-center justify-between py-2">
                    <a
                        href="#"
                        className="text-text1 text-3xl font-bold shrink-0"
                    >
                        {t("headerDefaultLayout.brand")}
                    </a>
                    <Navigation />

                    <div className="flex items-center gap-2">
                        <div className="text- flex items-center gap-2">
                            <div onClick={toggleTheme} className="btn-wrapper">
                                <button className="cursor-pointer">
                                    {theme === "light" ? (
                                        <LightModeOutlinedIcon />
                                    ) : (
                                        <DarkModeOutlinedIcon />
                                    )}
                                </button>
                            </div>
                            <LanguageSelect />
                        </div>

                        <div className="lg:hidden">
                            <button
                                className="btn-wrapper"
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <DensityMediumIcon fontSize="medium" />
                            </button>
                        </div>
                        <NavMobile
                            isOpen={isMenuOpen}
                            onClose={() => setIsMenuOpen(false)}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderLayout;
