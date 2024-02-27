/**
 * Application renderer
 */
import type { AppProps } from "next/app";

import { Inter as Font } from "next/font/google";
import clsx from "clsx";
import Head from "next/head";
import { Header } from "@ui";

/**
 * Global font
 */
const font = Font({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

/**
 * Application renderer
 */
export function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Kirill Zhosul</title>
      </Head>
      <div
        className={clsx(font.variable, "min-h-screen font-sans antialiased")}
      >
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
