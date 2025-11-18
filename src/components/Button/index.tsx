import clsx from "clsx";

interface IButtonProps {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    href?: string;
}

function Button({
    children,
    className,
    variant = "primary",
    size = "md",
    href,
    ...rest
}: IButtonProps) {
    const basesStyles =
        "inline-flex items-center justify-center transition-all duration-300 rounded-full cursor-pointer font-medium min-w-[150px] z-1";

    const variantStyles: Record<string, string> = {
        primary: "btn-bg text-white",
        outline: "",
    };

    const sizeStyles: Record<string, string> = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-6 py-2 text-md",
        lg: "px-8 py-3 text-base",
    };

    const Component = href ? "a" : "button";

    const isOutline = variant === "outline";

    return (
        <Component
            className={clsx(
                basesStyles,
                variantStyles[variant],
                sizeStyles[size],
                className,
                {
                    "btn-outline": isOutline,
                }
            )}
            {...rest}
        >
            {isOutline ? (
                <span
                    className={clsx(
                        "btn-outline-inner w-full h-full bg-bg-body",
                        sizeStyles[size]
                    )}
                >
                    {children}
                </span>
            ) : (
                children
            )}
        </Component>
    );
}

export default Button;
