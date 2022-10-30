import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";

export default function Projects() {
  const { t, lang } = useTranslation("common");
  return (
    <>
      <div className="bc-head bc-head-withlogo">
        <div className="bc-logo bc-logo-userpic">
          <Image
            style={{ borderRadius: "80px" }}
            className="bc-logo-image"
            src="https://avatars.githubusercontent.com/u/79853674"
            width="80"
            height="80"
            alt="avatar"
          />
        </div>
        <div className="bc-texts">
          <h1 className="bc-title">{t("kirillzhosul")}</h1>{" "}
          <small>
            <b>{t("programmer-developer")}</b>
          </small>
          <p className="bc-text">
            <Link href="/">{t("home")}</Link> |{" "}
            <Link href="/projects">{t("projects")}</Link> |{" "}
            <a
              href="#"
              onClick={async () =>
                await setLanguage(lang === "ru" ? "en" : "ru")
              }
            >
              {lang === "ru" ? "english" : "русский"}
            </a>
          </p>
          <div>
            <hr />
          </div>
          <p className="bc-text">
            <b>
              <i>My GitHub projects</i>
            </b>
            <br />
            <b>&nbsp;APIs and Web</b>
            <br />
            <a href="https://github.com/florgon/api">florgon/api</a>, FastAPI
            backend for my website with OAuth and other stuff.
            <br />
            <a href="https://github.com/kirillzhosul/shop">kirillzhosul/shop</a>
            , Merchandise shop for the competition.
            <br />
            <b>&nbsp;Tools and libs</b>
            <br />
            <a href="https://github.com/florgon/gatey-sdk-py">
              florgon/gatey-sdk-py
            </a>
            , Python library that works with my error logging service and doing
            logging errors.
            <br />
            <a href="https://github.com/kirillzhosul/dotfiles">
              kirillzhosul/dotfiles
            </a>
            , Collection of scripts / configs files that I actively use during
            work (Docker / Nginx / etc)
            <br />
            <a href="https://github.com/kirillzhosul/hhru">kirillzhosul/hhru</a>
            , hh.ru simple wrapper-library. Works with HeadHunter API.
            <br />
            <a href="https://github.com/kirillzhosul/next-yandex-metrika">
              kirillzhosul/next-yandex-metrika
            </a>
            , Small component that allows to use Yandex.Metrika in Next.js
            <br />
            <b>&nbsp;Looking for more?</b>
            <br />
            <i>
              There is not all of my projects, some are not listed here (old
              ones or Game Maker), <br />
              you can checkout all my projects on my GitHub{" "}
              <a href="https://github.com/kirillzhosul">[link, click]</a>.
            </i>
          </p>
          <br />
          <p className="bc-text">
            <b>
              <i>My deployed projects</i>
            </b>
            <br />
            <a href="https://api.florgon.space/v1">Florgon API</a> [
            <a href="https://github.com/florgon/api">source</a>] , Root API for
            my project, OAuth etc.
            <br />
            <a href="https://kirillzhosul.github.io/matrix-webcam">
              Matrix Webcam
            </a>{" "}
            [<a href="https://github.com/kirillzhosul/matrix-webcam">source</a>]
            , Page that makes your webcam behave like matrix.
            <br />
            <a href="https://kirillzhosul.github.io/cookie-widget">
              Cookie Widget
            </a>{" "}
            [<a href="https://github.com/kirillzhosul/cookie-widget">source</a>]
            , Simple static cookie widget that notifies about cookie usage.
            <br />
            <a href="https://kirillzhosul.site/tests/stripe">Django Stripe</a> [
            <a href="https://github.com/kirillzhosul/django-stripe">source</a>],
            Test solution for Stripe in Django (mini *shop*).
          </p>
          <br />
          <p className="bc-text">
            <b>
              <i>My other websites</i>
            </b>
            <br />
            <a href="https://florgon.space">florgon.space</a>, My website with
            different services and SSO (OAuth).
            <br />
            <a href="https://gatey.florgon.space">gatey.florgon.space</a>, Error
            logging / monitoring service.
          </p>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
}
