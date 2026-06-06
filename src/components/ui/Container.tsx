import React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("max-w-page mx-auto px-gutter md:px-gutter-lg w-full", className)}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";
