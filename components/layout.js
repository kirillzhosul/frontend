import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
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
          content="kirillzhosul, zhosul, kirill, developer"
        />
        <link rel="canonical" href="https://kirillzhosul.site" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://kirillzhosul.site"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Kirill Zhosul" />

        <meta name="title" content="Kirill Zhosul" />
        <title>Kirill Zhosul</title>
      </Head>
      <div className="bc bc-list">{children}</div>
    </>
  );
}
