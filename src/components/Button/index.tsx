import clsx from "clsx";

interface IButtonProps {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    href?: string;
    rounded?: boolean;
    disable?: boolean;
}

function Button({
    children,
    className,
    variant = "primary",
    size = "md",
    href,
    rounded = true,
    disable = false,
    ...rest
}: IButtonProps) {
    const basesStyles =
        "inline-flex items-center justify-center transition-all duration-300 font-medium z-1";

    const variantStyles: Record<string, string> = {
        primary: "btn-bg text-white",
        outline: "",
    };

    const sizeStyles: Record<string, string> = {
        sm: "px-3 py-1.5 text-sm min-w-[100px]",
        md: "px-6 py-2 text-md min-w-[140px]",
        lg: "px-8 py-3 text-base min-w-[180px]",
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
                    "rounded-full": rounded,
                    "pointer-events-none": disable,
                    "cursor-pointer": !disable,
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
