import React, { FC } from "react";

import classNames from "classnames";

type BadgeVariant = "gray" | "primary" | "error" | "warning" | "success";

type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
  variant: BadgeVariant;
  size?: BadgeSize;
  children: string | React.ReactElement;
  LeadingIcon?: React.ReactElement;
  TrailingIcon?: React.ReactElement;
  className?: string;
}

const BadgeVariantClasses: Record<BadgeVariant, string> = {
  gray: "badge-gray",
  primary: "badge-primary",
  error: "badge-error",
  warning: "badge-warning",
  success: "badge-success",
};

const BadgeSizeClasses: Record<BadgeSize, string> = {
  sm: "badge-sm",
  md: "badge-md ",
  lg: "badge-lg",
};

export const Badge: FC<BadgeProps> = ({
  variant,
  size = "md",
  children,
  LeadingIcon,
  TrailingIcon,
  className,
}) => {
  const BadgeVariantClassName = BadgeVariantClasses[variant];
  const BadgeSizeClassName = BadgeSizeClasses[size];
  return (
    <div
      className={classNames(
        "badge-base",
        BadgeVariantClassName,
        BadgeSizeClassName,
        className,
      )}
    >
      {LeadingIcon ? (
        <LeadingIcon.type
          {...LeadingIcon.props}
          className={classNames("mr-1.5", LeadingIcon.props.className)}
        />
      ) : null}
      {children}
      {TrailingIcon ? (
        <TrailingIcon.type
          {...TrailingIcon.props}
          className={classNames("mr-1.5", TrailingIcon.props.className)}
        />
      ) : null}
    </div>
  );
};
