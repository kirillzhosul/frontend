import clsx from "clsx";
import { LogoProps } from "./types";
import { LogoIcon } from "./logo-icon";

export function Logo({ className }: LogoProps) {
  return (
    <div className={clsx(className, "flex items-center gap-2 text-xl")}>
      <LogoIcon className="w-12 h-12" />
      Kirill Zhosul
    </div>
  );
}
