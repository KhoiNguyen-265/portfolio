import emailjs from "@emailjs/browser";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import clsx from "clsx";
import Lottie from "lottie-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { errorAnimation, successAnimation } from "../../../../assets/lottie";
import Button from "../../../../components/Button";
import FormField from "../FormField";
import Modal from "../Modal";

type ContactFormValues = {
    name: string;
    email: string;
    message: string;
};

function ContactForm() {
    const { t } = useTranslation();
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [modal, setModal] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormValues>({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (values: ContactFormValues) => {
        setStatus("idle");

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: values.name,
                    email: values.email,
                    message: values.message,
                    title: "New message from portfolio",
                },
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );

            setStatus("success");
            setModal(true);
            reset();
        } catch (error) {
            console.error(error);
            setStatus("error");
            setModal(true);
        }
    };

    const inputBaseClasses =
        "border-2 border-border-row-section px-3 py-2 rounded-md focus:border-text1 transition-all duration-300";

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <FormField
                className=""
                id="name"
                label={t("contactSection.form.nameLabel")}
                error={errors.name?.message}
            >
                <input
                    type="text"
                    id="name"
                    placeholder={t("contactSection.form.placeholderName")}
                    className={inputBaseClasses}
                    autoComplete="off"
                    {...register("name", {
                        required: t("contactSection.errors.nameRequired"),
                        minLength: {
                            value: 2,
                            message: t("contactSection.errors.nameMin"),
                        },
                    })}
                />
            </FormField>

            {/* Email */}
            <FormField
                className="mt-4"
                id="email"
                label={t("contactSection.form.emailLabel")}
                error={errors.email?.message}
            >
                <input
                    type="email"
                    id="email"
                    autoComplete="off"
                    placeholder={t("contactSection.form.placeholderEmail")}
                    className={inputBaseClasses}
                    {...register("email", {
                        required: t("contactSection.errors.emailRequired"),
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: t("contactSection.errors.emailInvalid"),
                        },
                    })}
                />
            </FormField>

            {/* Email */}
            <FormField
                className="mt-4"
                id="message"
                label={t("contactSection.form.messageLabel")}
                error={errors.message?.message}
            >
                <textarea
                    rows={4}
                    id="message"
                    placeholder={t("contactSection.form.placeholderMessage")}
                    className={clsx(inputBaseClasses, "resize-none")}
                    {...register("message", {
                        required: t("contactSection.errors.messageRequired"),
                        minLength: {
                            value: 10,
                            message: t("contactSection.errors.messageMin"),
                        },
                    })}
                />
            </FormField>

            <div className="flex justify-center mt-4">
                <Button
                    disable={isSubmitting}
                    size="lg"
                    className="uppercase text-sm font-semibold flex gap-2 items-center"
                >
                    {isSubmitting ? (
                        t("contactSection.form.sending")
                    ) : (
                        <>
                            <span>{t("contactSection.form.submit")}</span>
                            <ForwardToInboxIcon />
                        </>
                    )}
                </Button>
            </div>
            {/* Modal */}
            <Modal
                open={modal}
                onClose={() => {
                    setModal(false);
                    setStatus("idle");
                }}
            >
                {status === "error" && (
                    <div className="flex items-center mt-10 gap-5">
                        <div className="max-w-[150px]">
                            <Lottie animationData={errorAnimation} />
                        </div>
                        <div className="">
                            <h2 className="text-xl font-light">
                                {t("contactSection.status.error")}
                            </h2>
                        </div>
                    </div>
                )}
                {status === "success" && (
                    <div className="flex items-center mt-10">
                        <div className="max-w-[150px]">
                            <Lottie
                                loop={false}
                                animationData={successAnimation}
                            />
                        </div>
                        <div className="">
                            <h2 className="text-xl font-light">
                                {t("contactSection.status.success")}
                            </h2>
                        </div>
                    </div>
                )}
            </Modal>
        </form>
    );
}

export default ContactForm;
