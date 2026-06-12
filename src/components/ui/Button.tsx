import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  withArrow?: boolean;
}

// Combine button and anchor properties to type check polymorphic parameters
type PolymorphicProps = ButtonProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "onClick"> & {
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
};

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, PolymorphicProps>(
  ({ variant = "primary", size = "md", href, withArrow = false, className, children, ...props }, ref) => {

    // Check if dot should be rendered (primary and accent variants)
    const hasDot = variant === "primary" || variant === "accent";

    // Dot styles mapping
    const dotColors = {
      primary: "bg-brand-primary", // #FC6900
      accent: "bg-white",
      ghost: "",
    };

    const dotLeftClasses = {
      sm: "left-[14px]",
      md: "left-4",
      lg: "left-5",
    };

    const hoverTextColors = {
      primary: "group-hover:text-ink motion-reduce:group-hover:text-paper",
      accent: "group-hover:text-brand-primary motion-reduce:group-hover:text-white",
      ghost: "",
    };

    // Variant classes
    const variantClasses = {
      primary: "bg-ink text-paper motion-reduce:hover:opacity-90",
      accent: "bg-brand-primary text-white motion-reduce:hover:opacity-90",
      ghost: "bg-transparent border border-ink text-ink hover:bg-ink hover:text-paper",
    };

    // Padding & Height sizes
    // If dot is present, apply asymmetric padding for optical alignment
    let paddingClasses = "";
    if (size === "sm") {
      paddingClasses = hasDot ? "pl-3.5 pr-4" : "px-4";
    } else if (size === "md") {
      paddingClasses = hasDot ? "pl-4 pr-5" : "px-5";
    } else { // lg
      paddingClasses = hasDot ? "pl-5 pr-6" : "px-6";
    }

    const sizeClasses = {
      sm: cn("h-10 text-sm", paddingClasses),
      md: cn("h-11 text-[14px]", paddingClasses),
      lg: cn("h-12 text-[15px]", paddingClasses),
    };

    // Arrow icon size mapping
    const arrowIconSizes = {
      sm: "w-[14px] h-[14px]",
      md: "w-4 h-4",
      lg: "w-4 h-4",
    };

    // Main combined classes
    const combinedClasses = cn(
      "inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 leading-none outline-none select-none relative overflow-hidden group",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary",
      "gap-2.5",
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    const textWrapperClasses = cn(
      "relative z-10 transition-colors duration-300",
      variant !== "ghost" && "delay-0 group-hover:delay-[250ms] motion-reduce:delay-0",
      hoverTextColors[variant]
    );

    // Render contents inside the button/anchor
    const content = (
      <>
        {hasDot && (
          <span
            aria-hidden="true"
            className={cn(
              "absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full transition-transform duration-[700ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-[60] motion-reduce:transition-none motion-reduce:group-hover:scale-100 pointer-events-none",
              dotLeftClasses[size],
              dotColors[variant]
            )}
          />
        )}
        {hasDot && (
          <span className="w-1.5 h-1.5 shrink-0 opacity-0 pointer-events-none" aria-hidden="true" />
        )}
        <span className={textWrapperClasses}>{children}</span>
        {withArrow && (
          <span className={textWrapperClasses}>
            <ArrowUpRight
              className={cn("shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5", arrowIconSizes[size])}
            />
          </span>
        )}
      </>
    );

    if (href) {
      // Use Next.js Link for internal routes (client-side nav), plain <a> for external URLs or same-page hash links
      const isInternalRoute = href.startsWith("/") && !href.startsWith("//");
      if (isInternalRoute) {
        return (
          <Link
            ref={ref as React.ForwardedRef<HTMLAnchorElement>}
            href={href}
            className={cn("group", combinedClasses)}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {content}
          </Link>
        );
      }
      return (
        <a
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          href={href}
          className={cn("group", combinedClasses)}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        type={props.type || "button"}
        className={cn("group", combinedClasses)}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
