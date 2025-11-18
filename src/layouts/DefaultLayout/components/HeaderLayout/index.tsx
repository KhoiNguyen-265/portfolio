import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useTranslation } from "react-i18next";
import LanguageSelect from "../../../../components/LanguageSelect";
import Navigation from "../../../../components/Navigation";
import { useTheme } from "../../../../hooks/useTheme";

function HeaderLayout() {
    const { t } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    return (
        <header className="bg-bg-tertiary text-text2/80 sticky top-0 z-999">
            <div className="container">
                <div className="flex items-center justify-between py-2">
                    <a href="#" className="text-text1 text-3xl font-bold">
                        {t("headerDefaultLayout.brand")}
                    </a>
                    <Navigation />

                    <div className="text- flex items-center gap-5">
                        <button
                            className="cursor-pointer"
                            onClick={toggleTheme}
                        >
                            {theme === "light" ? (
                                <LightModeOutlinedIcon />
                            ) : (
                                <DarkModeOutlinedIcon />
                            )}
                        </button>
                        <LanguageSelect />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderLayout;
