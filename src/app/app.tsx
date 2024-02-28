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
});

/**
 * Application renderer
 */

// pages/_app.tsx
import { YandexMetricaProvider } from "next-yandex-metrica";

export function App({ Component, pageProps }: AppProps) {
  return (
    <YandexMetricaProvider
      tagID={Number.parseInt(process.env.NEXT_PUBLIC_YANDEX_METRICA_ID || "0")}
      strategy="lazyOnload"
      shouldUseAlternativeCDN={false}
      initParameters={{
        accurateTrackBounce: true,
        childIframe: false,
        clickmap: true,
        defer: true,
        ecommerce: false,
        params: undefined,
        userParams: undefined,
        trackHash: true,
        trackLinks: true,
        trustedDomains: [],
        webvisor: true,
        type: 0,
        triggerEvent: false,
      }}
    >
      <div>
        <Head>
          <title>Kirill Zhosul</title>
        </Head>
        <div
          className={clsx(font.className, "min-h-screen font-sans antialiased")}
        >
          <Header />
          <Component {...pageProps} />
        </div>
      </div>
    </YandexMetricaProvider>
  );
}
