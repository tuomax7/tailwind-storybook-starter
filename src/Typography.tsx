import React, { FC } from "react";

import classNames from "classnames";

type Variant =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "h6"
  | "h5"
  | "h4"
  | "h3"
  | "h2"
  | "h1";

type WeightOption = "regular" | "medium" | "semibold" | "bold";

type WeightValue =
  | "font-normal"
  | "font-medium"
  | "font-semibold"
  | "font-bold";

const VariantClasses: Record<Variant, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  h6: "text-h6",
  h5: "text-h5",
  h4: "text-h4",
  h3: "text-h3",
  h2: "text-h2",
  h1: "text-h1",
};

const WeightClasses: Record<WeightOption, WeightValue> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export interface TypographyProps {
  variant: Variant;
  customColor?: string;
  customWeight?: WeightOption;
  className?: string;
  children: string | React.ReactNode;
}

const Typography: FC<TypographyProps> = ({
  variant = "md",
  customColor,
  customWeight = "regular",
  className,
  children,
}) => {
  const VariantClass = VariantClasses[variant];
  const WeightClass = WeightClasses[customWeight];

  const isHeading = variant.startsWith("h");

  const Component = (isHeading ? variant : "p") as keyof JSX.IntrinsicElements;

  return (
    <Component
      className={classNames(VariantClass, WeightClass, className, {
        ["tracking-tight"]: ["h1", "h2", "h3"].includes(variant),
        ["text-black dark:text-white"]: !customColor,
      })}
    >
      {children}
    </Component>
  );
};

export default Typography;
