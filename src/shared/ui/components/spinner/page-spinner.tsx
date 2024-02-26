/**
 * Spinner for the whole page (fullscreen spinner)
 */

import clsx from "clsx";
import { Spinner } from "./spinner";
import { PageSpinnerProps } from "./types";

export function PageSpinner({ className }: PageSpinnerProps) {
  /**
   * Spinner for the whole page (fullscreen spinner)
   * used for showing loading of the whole page
   */
  return (
    <div
      className={clsx(
        "fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-slate-100",
        className
      )}
    >
      <Spinner className="text-teal-600 w-24 h-24" />
    </div>
  );
}
