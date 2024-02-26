import clsx from "clsx";
import { useId } from "react";
import { InputProps } from "./types";

export function Input({ className, label, error, inputProps }: InputProps) {
  const id = useId();
  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && (
        <label htmlFor={id} className="block">
          {label}
        </label>
      )}
      <input
        {...inputProps}
        id={id}
        className={clsx(
          inputProps?.className,
          "rounded border border-slate-300 focus:border-teal-600 psx-2 h-10 outline-none"
        )}
      />
      <div className="text-rose-400 text-sm">{error}</div>
    </div>
  );
}
