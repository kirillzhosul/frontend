import clsx from "clsx";
import { useId } from "react";
import { SelectProps } from "./types";

export function Select({
  className,
  label,
  error,
  options,
  selectProps,
}: SelectProps) {
  const id = useId();
  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && (
        <label htmlFor={id} className="block">
          {label}
        </label>
      )}
      <select
        {...selectProps}
        id={id}
        className={clsx(
          selectProps?.className,
          "rounded border border-slate-300 focus:border-teal-600 psx-2 h-10 outline-none"
        )}
      >
        {options?.map((option, index) => (
          <option key={index} value={option.value} selected={index === 0}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="text-rose-400 text-sm">{error}</div>
    </div>
  );
}
