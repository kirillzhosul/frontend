import clsx from "clsx";
import { PropsWithRef, SelectHTMLAttributes, useId } from "react";

export type UiSelectOption = {
  value: string;
  label: string;
};

export type UiSelectFieldProps = {
  label?: string;
  className?: string;
  error?: string;
  selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
  options?: UiSelectOption[];
};

export function UiSelectField({
  className,
  label,
  error,
  options,
  selectProps,
}: UiSelectFieldProps) {
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
