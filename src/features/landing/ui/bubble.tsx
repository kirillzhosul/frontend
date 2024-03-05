import clsx from "clsx";

/**
 * Bubble circle
 */
export function Bubble({
  size,
  className,
  z = undefined,
}: {
  size: number;
  className: string;
  z?: number;
}) {
  return (
    <div
      className={clsx("absolute animate-wiggle", className)}
      style={{
        borderRadius: "100%",
        width: size,
        height: size,
        zIndex: z || -1,
      }}
    ></div>
  );
}
