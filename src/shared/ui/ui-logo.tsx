import clsx from "clsx";

export function UiLogo({ className }: { className?: string }) {
  return (
    <div className={clsx(className, "flex items-center gap-2 text-xl")}>
      <UiLogoIcon className="w-12 h-12" />
      Kirill Zhosul
    </div>
  );
}

export function UiLogoIcon({ className }: { className?: string }) {
  return null;
}
