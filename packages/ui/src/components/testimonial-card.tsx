import * as React from "react";
import { cn } from "../lib/cn";

export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string;
  author: string;
  role?: string;
}

export const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ className, quote, author, role, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex h-full flex-col justify-between gap-md rounded-xl bg-surface-base p-xl shadow-card",
          className
        )}
        {...props}
      >
        <p className="text-lg font-medium text-text-strong">“{quote}”</p>
        <div className="mt-md">
          <p className="text-base font-semibold text-text-strong">{author}</p>
          {role ? <p className="text-sm text-text-muted">{role}</p> : null}
          {children}
        </div>
      </div>
    );
  }
);

TestimonialCard.displayName = "TestimonialCard";
