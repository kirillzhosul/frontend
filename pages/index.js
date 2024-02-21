import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="title" content="Кирилл Жосул" />
        <title>Кирилл Жосул</title>
      </Head>
      <header>
        <h3>
          Кирилл Жосул (<a href="#">@kirillzhosul</a>)
        </h3>
        <aside>
          <p>
            <i>Программист - Разработчик</i>
          </p>
        </aside>
      </header>
      <hr />
      <h4>Ни слова больше.</h4>
      <p>
        Этот сайт -{" "}
        <i>
          <b>заглушка</b>
        </i>
        , сделан как временное решение переработки моего личного сайта -
        портфолио, но к счастью, Вы всё ещё можете узнать обо мне побольше или
        связаться со мной!
      </p>
      <h4>Умения и hard-skills</h4>
      <ul>
        <li>
          <b>🔧 Backend</b> (★★★★☆)
          <p>
            Python (FastAPI, Flask, Django), работа в коммерческой сфере,
            поддержка объёмных API (code + deployment) (Сервис сбора и аналитики
            сбоев, другие проекты).
          </p>
        </li>
        <li>
          <b>🎮 Gamedev</b> (★★★☆☆)
          <p>
            GML / Unity, несколько релизов в Steam, работа в коммерческой сфере.
          </p>
        </li>
        <li>
          <b>🌐 Frontend</b> (★★☆☆☆)
          <p>
            React / Next.js / jQuery, разработка и поддержка достаточного
            количества сайтов
          </p>
        </li>
        <li>
          <b>💻 Desktop</b> (★☆☆☆☆)
          <p>Несколько разработок в прошлом.</p>
        </li>
      </ul>
      <hr />
      <h4>Связаться со мной</h4>{" "}
      <ul>
        <li>
          <a href="mailto: kirillzhosul@florgon.com">
            kirillzhosul@florgon.com
          </a>
        </li>
        <li>
          <a href="t.me/kirillzhosul">t.me/kirillzhosul</a>
        </li>
        <li>
          <a href="github.com/kirillzhosul">github.com/kirillzhosul</a>
        </li>
      </ul>
      <hr />
      <h4>Стэк сайта</h4>{" "}
      <ul>
        <li>Next.js (Frontend)</li>
        <li>FastAPI (Backend)</li>
        <li>PosgreSQL, Docker, Github Actions</li>
      </ul>
    </>
  );
}
