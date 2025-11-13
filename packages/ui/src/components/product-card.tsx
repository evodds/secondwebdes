import * as React from "react";
import { Badge, BadgeProps } from "./badge";
import { cn } from "../lib/cn";

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  price: string;
  image: {
    src: string;
    alt: string;
  };
  badge?: {
    tone?: BadgeProps["tone"];
    variant?: BadgeProps["variant"];
    label: string;
  };
}

export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ className, title, price, image, badge, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group flex h-full flex-col overflow-hidden rounded-xl bg-surface-base shadow-card transition-shadow hover:shadow-elevated",
          className
        )}
        {...props}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-subtle">
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
          {badge ? (
            <div className="absolute left-sm top-sm">
              <Badge tone={badge.tone} variant={badge.variant}>
                {badge.label}
              </Badge>
            </div>
          ) : null}
        </div>
        <div className="flex flex-1 flex-col gap-xs px-md py-md">
          <h3 className="text-lg font-semibold text-text-strong">{title}</h3>
          <p className="text-base font-medium text-accent-primary">{price}</p>
          {children}
        </div>
      </div>
    );
  }
);

ProductCard.displayName = "ProductCard";
