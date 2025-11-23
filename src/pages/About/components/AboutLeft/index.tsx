import { useTranslation } from "react-i18next";

function AboutLeft() {
    const { t } = useTranslation();

    const objectives = [
        <>
            {t("introSection.heading5")}
            <span className="text-brand-name-200 font-bold">
                {t("introSection.heading5-bold")}
            </span>
            {t("introSection.heading6")}
        </>,
        <>
            {t("introSection.heading7")}
            <span className="text-brand-name-200 font-bold">
                {t("introSection.heading7-bold")}
            </span>
            {t("introSection.heading8")}
        </>,
        <>
            {t("introSection.heading9")}
            <span className="text-brand-name-200 font-bold">
                {t("introSection.languages")}
            </span>
            {t("introSection.heading10")}
        </>,
        <>
            {t("introSection.heading11")}
            <span className="text-brand-name-200 font-bold">
                {t("introSection.heading11-bold")}
            </span>
            {t("introSection.heading12")}
        </>,
    ];

    return (
        <div className="max-w-1/2">
            <div className="flex flex-col gap-5">
                <div>
                    <h3 className="font-semibold text-base md:text-xl lg:text-2xl text-brand-name-100">
                        {t("introSection.about")}
                    </h3>
                    <div className="mt-3 text-xs md:text-sm lg:text-base">
                        <p className="">
                            {t("introSection.heading1")}{" "}
                            <span className="text-brand-name-200 font-bold">
                                {t("introSection.name")}
                            </span>
                            {t("introSection.heading2")}
                        </p>
                        <p className="mt-2">
                            {t("introSection.heading3")}
                            <span className="text-brand-name-200 font-bold">
                                {t("introSection.languages")}
                            </span>
                            {t("introSection.heading4")}
                        </p>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-base md:text-xl lg:text-2xl text-brand-name-100">
                        {t("introSection.objectives")}
                    </h3>
                    <ul className="mt-3 text-xs md:text-sm lg:text-base flex flex-col gap-2">
                        {objectives.map((item, index) => (
                            <li
                                className="flex items-start gap-2 ml-6"
                                key={index}
                            >
                                <span className="mt-2.5 shrink-0 h-1.5 w-1.5 rounded-full bg-brand-name-200"></span>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutLeft;
