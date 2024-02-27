import clsx from "clsx";

/**
 * Bubble circle
 */
export function Bubble({
  size,
  className,
}: {
  size: number;
  className: string;
}) {
  return (
    <div
      className={clsx("absolute animate-pulse", className)}
      style={{
        borderRadius: "100%",
        width: size,
        height: size,
        zIndex: -1,
      }}
    ></div>
  );
}
