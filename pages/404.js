import Head from "next/head";
import React from "react";
export default function NotFoundPage() {
  return (
    <>
      <Head>
        <meta name="title" content="Страница не найдена" />
        <title>Страница не найдена</title>
      </Head>
      <header>
        <h1>Страница не найдена</h1>
        <aside>
          Так вышло, что такой страницы не существует, но не стоит печалиться,
          во
        </aside>
      </header>
      <hr />
      <span>
        <a href="/">На главную</a>
      </span>{" "}
      |{" "}
      <span>
        <a href="https://github.com/kirillzhosul/web/issues">
          Сообщить об ошибке
        </a>
      </span>
    </>
  );
}
