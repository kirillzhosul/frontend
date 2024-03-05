/**
 * Button UI component
 *
 * Provides components with border that is clickable
 * (hyperlink or event callback)
 */

import clsx from "clsx";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { LinkProps as NextLinkProps } from "next/link";
import { Spinner } from ".";

/**
 * Size of the button, can be modified with custom class names
 */
export type ButtonSize = "sm" | "md" | "lg" | "xl";

/**
 * Styling variant of the button, should be extended here
 */
export type ButtonVariant =
  | "link"
  | "linkAnimated"
  | "primary"
  | "secondary"
  | "outlinePrimary"
  | "outlineSecondary"
  | "success"
  | "none";

/**
 * State of the button to deal with
 */
export type ButtonState = "default" | "loading" | "disabled";

/**
 * Properties of the buttons
 */
export type ButtonLinkProps = {
  href: string;
  linkProps?: ButtonInternalLinkProps;
} & ButtonProps;
export type ButtonInternalLinkProps = Omit<NextLinkProps, "href">;
export type ButtonProps = {
  children?: ReactNode;
  className?: string;
  state?: ButtonState;
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  size?: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Button component with styling
 * @param children Content of the button (text or blocks)
 * @param className Custom styling
 * @param disabled Will tint the button
 * @param variant Styling of the button
 * @param size Size of the button and text
 * @returns Button react component
 */
export function Button({
  children,
  className,
  state,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  ...htmlProps
}: ButtonProps) {
  state = loading ? "loading" : disabled ? "disabled" : "default";
  const isLink = variant === "link" || variant === "linkAnimated";
  const animate = !(
    variant === "link" ||
    variant === "none" ||
    state !== "default"
  );
  /*
     <button className="
     relative flex h-[50px] w-40 items-center justify-center 
     overflow-hidden bg-gray-800 text-white 
     shadow-2xl transition-all 
     before:absolute 
     before:h-0 before:w-0 
     before:rounded-full 
     before:bg-orange-600 
     before:duration-500 
     before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
        <span className="relative">Circle hover</span>
      </button>
  */
  return (
    <button
      disabled={state !== "default"}
      className={clsx(
        className,
        "font-medium",
        "transition rounded-xl",
        isLink ? "mr-2" : "px-5 py-2.5 mr-2",
        state !== "default" ? "opacity-50" : "",
        animate ? "hover:scale-110 duration-150" : "",
        {
          none: "",
          linkAnimated: "text-black hover:text-gray-500",
          link: "text-black hover:text-gray-500",
          primary: "text-white bg-blue-700 hover:bg-blue-600",
          secondary: "text-white bg-gray-700 hover:bg-gray-600",
          success: "text-white bg-green-700 hover:bg-green-600",
          outlinePrimary:
            "text-blue-700 border border-blue-700 hover:bg-blue-600 hover:text-white",
          outlineSecondary:
            "text-gray-700 border border-gray-700 hover:bg-gray-700 hover:text-white",
        }[variant || "primary"],
        {
          sm: "text-sm",
          md: "text-md",
          lg: "text-lg",
          xl: "text-xl",
        }[size || "md"],
      )}
      {...htmlProps}
    >
      {state === "loading" ? <Spinner className="w-5 h-5" /> : children}
    </button>
  );
}

/**
 *
 * @param href URL where to go
 * @param children Content of the button, if enabled will be wrapped inside link
 * @param disabled Will tint the button and remove link wrapping (disabled link)
 * @returns Button react component
 */
export function ButtonLink({
  href,
  children,
  disabled,
  linkProps,
  variant = "link",
  ...props
}: ButtonLinkProps) {
  return (
    <Button disabled={disabled} variant={variant} {...props}>
      {disabled ? (
        children
      ) : (
        <Link {...linkProps} href={disabled ? "" : href}>
          {children}
        </Link>
      )}
    </Button>
  );
}
