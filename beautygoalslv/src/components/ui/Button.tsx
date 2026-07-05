import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "gold" | "outline" | "outline-white" | "black";
type ButtonSize = "default" | "sm";

const variantStyles: Record<ButtonVariant, string> = {
  gold: "border border-transparent bg-teak text-black hover:bg-teak-light",
  outline:
    "border border-teak bg-transparent text-teak hover:bg-teak hover:text-black",
  "outline-white":
    "border border-white/40 bg-transparent text-white hover:bg-white/10",
  black: "border border-transparent bg-black text-white hover:bg-[#222222]",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-8 py-3.5",
  sm: "px-[22px] py-2.5 text-[0.76rem]",
};

const baseStyles =
  "inline-block cursor-pointer rounded-[2px] font-body text-[0.82rem] font-semibold uppercase tracking-[0.07em] transition-all duration-200";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsLinkProps = ButtonBaseProps & {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  type?: never;
};

type ButtonAsButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

const Button = ({
  children,
  className,
  variant = "gold",
  size = "default",
  ...props
}: ButtonProps) => {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if ("href" in props && typeof props.href === "string") {
    const { href, onClick } = props;

    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const {
    onClick,
    type = "button",
    disabled,
    ...buttonProps
  } = props as ButtonAsButtonProps;

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
