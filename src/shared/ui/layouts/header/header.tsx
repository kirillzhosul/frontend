import clsx from "clsx";
import { Logo } from "./logo";
import { HeaderProps } from "./types";

export function Header({ className, rightContent, logo }: HeaderProps) {
  return (
    <header
      className={clsx(
        className,
        "px-4 py-5 border-b border-b-slate-300 flex justify-between items-center bg-white"
      )}
    >
      {logo ? logo : <Logo />}
      {rightContent}
    </header>
  );
}
