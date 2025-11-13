import * as React from "react";
import { cn } from "../lib/cn";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-primary text-accent-primary-foreground shadow-card hover:shadow-elevated hover:bg-accent-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary",
  ghost:
    "border border-accent-primary text-accent-primary hover:bg-accent-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "text-base px-md py-xs",
  lg: "text-base px-lg py-sm"
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      type = "button",
      asChild = false,
      children,
      ...buttonProps
    },
    ref
  ) => {
    const composedClassName = cn(
      "inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-xs rounded-pill font-medium transition-all duration-150",
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement, {
        className: cn((children as React.ReactElement).props.className, composedClassName),
        ...buttonProps
      });
    }

    return (
      <button ref={ref} type={type} className={composedClassName} {...buttonProps}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
