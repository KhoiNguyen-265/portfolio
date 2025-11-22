import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { enFlag, viFlag } from "../../assets/language";

// type Lang = { code: string; label: string; flagSrc: string };
type langCode = "vi" | "en";

// const languages: Lang[] = [
//     { code: "vi", label: "Tiếng Việt", flagSrc: viFlag },
//     { code: "en", label: "English", flagSrc: enFlag },
// ];

function LanguageSelect() {
    const { i18n } = useTranslation();
    const currentLanguage = (i18n.resolvedLanguage as "en" | "vi") || "en";

    useEffect(() => {
        document.documentElement.setAttribute("lang", currentLanguage);
    }, [currentLanguage]);

    const renderFlag = (language: langCode) => (
        <div className="btn-wrapper">
            <img
                className="w-5 h-5"
                src={language === "en" ? enFlag : viFlag}
                alt={language}
            />
        </div>
    );

    const handleOnclick = () => {
        const nextLanguage = currentLanguage === "en" ? "vi" : "en";
        i18n.changeLanguage(nextLanguage);
    };

    return (
        <button onClick={handleOnclick} className="">
            {renderFlag(currentLanguage)}
        </button>
    );
}

export default LanguageSelect;
