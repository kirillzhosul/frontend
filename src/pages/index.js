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
      <h4>Проекты и вклады</h4>
      <ul>
        <li>
          <s>
            Владелец замороженного проекта{" "}
            <a href="https://florgon.com">Florgon</a>.
          </s>
        </li>
        <li>Множество open-source (и не только) проектов</li>
        <li>
          <i>
            В последнее время - большая доля моих вкладов остаётся за закрытыми
            дверями, но Вы всё ещё можете посмотреть пример моего кода{" "}
            <a href="https://github.com/florgon/api">здесь </a> или{" "}
            <a href="https://github.com/florgon/gatey-sdk-py">здесь</a>
          </i>
        </li>
        <li>Коммерческий опыт разработки</li>
      </ul>
      <hr />
      <h4>Связаться со мной</h4>{" "}
      <ul>
        <li>
          <a href="mailto: kirillzhosul@florgon.com">
            kirillzhosul@florgon.com
          </a>
          , любителям электронных почт.
        </li>
        <li>
          <a href="t.me/kirillzhosul">t.me/kirillzhosul</a>, любителям
          мессенджеров.
        </li>
        <li>
          <a href="github.com/kirillzhosul">github.com/kirillzhosul</a>,
          любителям систем контроля версий.
        </li>
        <li>
          <s>
            Не нашли то что нужно? Вы всё так же можете найти меня в других
            местах по тегу-нику @kirillzhosul
          </s>
        </li>
      </ul>
    </>
  );
}
