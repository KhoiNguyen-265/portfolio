import clsx from "clsx";
import type React from "react";

interface IFormFiled {
    id: string;
    label: string;
    children: React.ReactNode;
    className?: string;
    error?: string;
}

function FormField({ id, label, children, className = "", error }: IFormFiled) {
    return (
        <div className={clsx("flex flex-col gap-2", className)}>
            <label className="text-base cursor-pointer" htmlFor={id}>
                {label}
            </label>

            {children}

            {error && <p className="text-sm text-red-400">{error}</p>}
        </div>
    );
}

export default FormField;
