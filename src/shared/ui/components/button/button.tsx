import clsx from "clsx";
import { Spinner } from "@ui";
import { ButtonProps } from "./types";

export function Button({
  className,
  variant,
  isLoading,
  spinnerProps,
  ...props
}: ButtonProps) {
  if (isLoading) {
    props.children = <Spinner {...spinnerProps} />;
  }

  return (
    <button
      {...props}
      className={clsx(
        className,
        "px-4 h-10 rounded cursor-pointer flex gap-2 items-center justify-center",
        {
          primary:
            "text-white bg-teal-500 hover:bg-teal-600 disabled:opacity-20 shadow shadow-teal-500/30",
          secondary:
            "text-white bg-rose-500 hover:bg-rose-600 disabled:opacity-20 shadow shadow-teal-500/30",
          outlined:
            "border border-slate-300 hover:bg-teal-100 disabled:opacity-20",
        }[variant]
      )}
    />
  );
}
