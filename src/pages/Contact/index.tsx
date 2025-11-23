import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import { contactAnimation } from "../../assets/lottie";
import LabelSection from "../../components/LabelSection";
import Section from "../../components/Section";
import ContactForm from "./components/ContactForm";

function Contact() {
    const { t } = useTranslation();
    return (
        <Section id="contact" className="py-20">
            <div className="container">
                {/* Header */}
                <div className="flex justify-center">
                    <LabelSection
                        className="uppercase"
                        label={t("contactSection.contact")}
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-center mt-10">
                    {/* Left */}
                    <div className="w-[60%] md:w-[40%] shrink-0">
                        <Lottie animationData={contactAnimation} />
                    </div>

                    {/* Right */}
                    <div className="w lg:w-1/2 ml-auto">
                        <h2 className="font-medium mb-5 text-brand-name-100 text-xl uppercase">
                            {t("contactSection.heading1")}
                        </h2>
                        <div className="border-2 border-border-row-section rounded-lg p-3 lg:p-5">
                            <p className="text-sm text-text2/80">
                                {t("contactSection.desc")}
                            </p>

                            {/* Form */}
                            <div className="mt-6">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Contact;
