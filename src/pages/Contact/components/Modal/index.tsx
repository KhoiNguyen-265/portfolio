import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import clsx from "clsx";
import type React from "react";

interface IModal {
    className?: string;
    children?: React.ReactNode;
    open: boolean;
    onClose: () => void;
}

function Modal({ className = "", children, open, onClose }: IModal) {
    if (!open) return;

    return (
        <div
            className={clsx(
                "fixed inset-0 z-50 flex items-center justify-center",
                className
            )}
        >
            {/* Overlay */}
            <div
                onClick={onClose}
                className="fixed inset-0 bg-black/50 z-49"
            ></div>

            {/* Content */}
            <div className="relative z-50 bg-bg-body  rounded-2xl p-5 min-w-[500px] max-w-[700px]">
                {/* Close button */}
                <div
                    onClick={onClose}
                    className="absolute right-3 top-2 cursor-pointer hover:text-text2 text-text2/70"
                >
                    <HighlightOffIcon fontSize="large" />
                </div>

                {/* Modal content */}
                {children}
            </div>
        </div>
    );
}

export default Modal;
