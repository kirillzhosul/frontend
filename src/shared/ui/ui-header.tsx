import clsx from "clsx";
import { UiLogo } from "./ui-logo";
import { ReactNode } from "react";

export function UiHeader({
  className,
  rightContent,
}: {
  className?: string;
  rightContent?: ReactNode;
}) {
  return (
    <header
      className={clsx(
        className,
        "px-4 py-5 border-b border-b-slate-300 flex justify-between items-center bg-white"
      )}
    >
      <UiLogo />
      {rightContent}
    </header>
  );
}
