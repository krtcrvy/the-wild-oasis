import React from "react";

import { VariantProps, cva } from "class-variance-authority";
import { LoaderCircle } from "lucide-react";

import { cn } from "@/lib/utils";

const spinnerVariants = cva("flex-col items-center justify-center", {
  variants: {
    show: {
      true: "flex",
      false: "hidden",
    },
  },
  defaultVariants: {
    show: true,
  },
});

const loaderVariants = cva("animate-spin text-primary", {
  variants: {
    size: {
      default: "size-8",
      sm: "size-6",
      lg: "size-12",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface SpinnerContentProps
  extends VariantProps<typeof spinnerVariants>,
    VariantProps<typeof loaderVariants> {
  className?: string;
  children?: React.ReactNode;
}

export function Spinner({
  size,
  show,
  children,
  className,
}: SpinnerContentProps) {
  return (
    <span className={spinnerVariants({ show })}>
      <LoaderCircle className={cn(loaderVariants({ size }), className)} />
      {children}
    </span>
  );
}
