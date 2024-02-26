import clsx from "clsx";
import { LinkProps } from "./types";

export function Link({ className, ...props }: LinkProps) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        // "p-3",
        "text-teal-500 hover:text-teal-600 cursor:pointer"
      )}
    />
  );
}
