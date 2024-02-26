import { InputHTMLAttributes, PropsWithRef, SelectHTMLAttributes } from "react";

export type InputProps = {
  label?: string;
  className?: string;
  error?: string;
  inputProps: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

export type SelectOption = {
  value: string;
  label: string;
};

export type SelectProps = {
  label?: string;
  className?: string;
  error?: string;
  selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
  options?: SelectOption[];
};
