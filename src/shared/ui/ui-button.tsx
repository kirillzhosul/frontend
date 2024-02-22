import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import { UiSpinner } from "./ui-spinner";

export type UiButtonVariant = "primary" | "outlined" | "secondary";
export type UiButtonProps = {
  variant: UiButtonVariant;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function UiButton({
  className,
  variant,
  isLoading,
  ...props
}: UiButtonProps) {
  if (isLoading) {
    props.children = <UiSpinner />;
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
