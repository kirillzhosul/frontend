import { LinkProps as NextLinkProps } from "next/link";
import { LinkHTMLAttributes } from "react";

export type LinkProps = { className: string } & NextLinkProps;
