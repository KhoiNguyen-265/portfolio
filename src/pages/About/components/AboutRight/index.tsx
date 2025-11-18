import { useTranslation } from "react-i18next";
import { avatar } from "../../../../assets/images";
import LabelSection from "../../../../components/LabelSection";
function AboutRight() {
    const { t } = useTranslation();
    return (
        <>
            <div className="relative flex-1">
                <div className="overflow-hidden max-w-[400px] rounded-2xl">
                    <img
                        className="object-cover w-full rounded-[inherit] me-10  hover:scale-120 transition-all duration-700"
                        src={avatar}
                        alt=""
                    />
                </div>
                <LabelSection
                    label={t("introSection.about")}
                    className="rotate-90 absolute -right-[136px] top-1/2 -translate-y-1/2 uppercase"
                />
            </div>
        </>
    );
}

export default AboutRight;
