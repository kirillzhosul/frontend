import clsx from "clsx";
import { LinkProps } from "./types";
import NextLink from "next/link";

export function Link({ className, children, ...props }: LinkProps) {
  return (
    <NextLink
      {...props}
      className={clsx(
        className,
        // "p-3",
        "text-teal-500 hover:text-teal-600 cursor:pointer"
      )}
    >
      {children}
    </NextLink>
  );
}
