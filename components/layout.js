import Head from "next/head";
import YandexMetrika from "../shared/yandexMetrika";

function YandexMetrikaConfigured() {
  const yandexMetrikaEnabled =
    process.env.NEXT_PUBLIC_YANDEX_METRIKA_ENABLED &&
    process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID != 0;

  return (
    <>
      {yandexMetrikaEnabled && (
        <YandexMetrika
          yid={process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID}
          clickmap={true}
          trackLinks={true}
          webvisor={true}
          accurateTrackBounce={true}
        />
      )}
    </>
  );
}

function CookieWidgetConfigured() {
  const cookieWidgetEnabled = process.env.NEXT_PUBLIC_COOKIE_WIDGET_ID;
  const cookieWidgetSource = `https://cookie-widget.ru/widget.js?id=${process.env.NEXT_PUBLIC_COOKIE_WIDGET_ID}`;
  return (
    <>
      {cookieWidgetEnabled && <script async src={cookieWidgetSource}></script>}
    </>
  );
}

function LayoutHead() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link
        rel="shortcut icon"
        href="https://avatars.githubusercontent.com/u/79853674?v=4"
      />
      <link
        rel="apple-touch-icon"
        href="https://avatars.githubusercontent.com/u/79853674?v=4"
      />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="icon"
        href="https://avatars.githubusercontent.com/u/79853674?v=4"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Kirill Zhosul" />
      <meta
        name="keywords"
        content="kirillzhosul, zhosul, kirill, developer, кирилл жосул, жосул"
      />
      <link rel="canonical" href={process.env.NEXT_PUBLIC_DEPLOYED_HREF} />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={process.env.NEXT_PUBLIC_DEPLOYED_HREF}
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="author" content="Kirill Zhosul" />

      <meta name="title" content="Kirill Zhosul" />
      <title>Kirill Zhosul</title>
      <YandexMetrikaConfigured />
    </Head>
  );
}

export default function Layout({ children }) {
  return (
    <>
      <LayoutHead />
      <CookieWidgetConfigured />
      {children}
    </>
  );
}
