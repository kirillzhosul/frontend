import clsx from "clsx";

export type UiErrorProps = {
  title?: string;
  className?: string;
};

export function UiError({ className, title }: UiErrorProps) {
  return (
    <div
      className={clsx(
        className,
        "text-rose-500 bg-rose-100 rounded-xl px-10 items-center flex gap-2  h-10 mx-auto"
      )}
    >
      <p>{title}</p>
    </div>
  );
}
