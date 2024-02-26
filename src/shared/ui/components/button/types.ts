import { ButtonHTMLAttributes } from "react";
import { SpinnerProps } from "@ui/components/spinner";

export type ButtonVariant = "primary" | "outlined" | "secondary";
export type ButtonProps = {
  variant: ButtonVariant;
  isLoading?: boolean;
  spinnerProps?: SpinnerProps;
} & ButtonHTMLAttributes<HTMLButtonElement>;
