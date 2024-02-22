import type { AppProps } from "next/app";
import { AppProvider } from "./app-provider";
import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <div className={clsx(inter.className, "")}>
        <Component {...pageProps} />
      </div>
    </AppProvider>
  );
}
