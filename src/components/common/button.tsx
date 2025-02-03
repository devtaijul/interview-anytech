// components/Button.tsx
import React from "react";
import Link from "next/link";
import { cn } from "@/utils/tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", href, children, ...props }, ref) => {
    // Base button styles
    const baseStyles = cn(
      "px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
      className
    );

    // Variant-specific styles
    const variantStyles = cn({
      "bg-primary text-white hover:bg-secondary focus:ring-blue-500":
        variant === "primary",
      "bg-transparent border border-primary text-primary hover:bg-blue-50 focus:ring-blue-500":
        variant === "outline",
    });

    // If href is provided, render as Next.js Link
    if (href) {
      return (
        <Link
          href={href}
          className={cn(baseStyles, variantStyles, "inline-block text-center")}
        >
          {children}
        </Link>
      );
    }

    // Otherwise, render as a button
    return (
      <button ref={ref} className={cn(baseStyles, variantStyles)} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
