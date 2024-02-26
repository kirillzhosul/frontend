import { LinkProps as NextLinkProps } from "next/link";
import { LinkHTMLAttributes, ReactNode } from "react";

export type LinkProps = {
  className?: string;
  children?: ReactNode;
} & NextLinkProps;
