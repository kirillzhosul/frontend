/**
 * Loader spinners
 */
import clsx from "clsx";

/**
 * Properties of the spinners
 */
export type SpinnerProps = {
  className?: string;
};
export type PageSpinnerProps = {} & SpinnerProps;

/**
 * Fullscreen spinner loader component
 * @param className Styles to apply
 * @returns Spinner page react component
 */
export function PageSpinner({ className }: PageSpinnerProps) {
  return (
    <div
      className={clsx(
        "fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-slate-100",
        className,
      )}
    >
      <Spinner className="text-blue-500 w-24 h-24" />
    </div>
  );
}

/**
 * Spinner loader icon component
 * @param className Styles to apply
 * @returns Spinner react component
 */
export function Spinner({ className }: SpinnerProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
      />
      <path
        fill="currentColor"
        d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
      >
        <animateTransform
          attributeName="transform"
          dur="0.75s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        />
      </path>
    </svg>
  );
}
