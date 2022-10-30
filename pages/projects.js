import Footer from "../components/footer";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";

export default function Projects() {
  const { t, lang } = useTranslation("common");
  return (
    <>
      <div className="bc-head bc-head-withlogo">
        <div className="bc-logo bc-logo-userpic">
          <img
            className="bc-logo-image"
            src="https://avatars.githubusercontent.com/u/79853674?v=4"
            alt="Profile"
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
              <i>My projects</i>
            </b>
            <br />
            <a href="https://github.com/florgon/gatey-sdk-py">
              florgon/gatey-sdk-py
            </a>
            , Python library that works with my error logging service and doing
            logging errors.
            <br />
            <a href="https://github.com/florgon/api">florgon/api</a>, FastAPI
            backend for my website with OAuth and other stuff.
            <br />
            <a href="https://github.com/kirillzhosul/shop">kirillzhosul/shop</a>
            , Merchandise shop for the competition.
            <br />
            <a href="https://github.com/kirillzhosul/hhru">kirillzhosul/hhru</a>
            , hh.ru simple wrapper-library. Works with HeadHunter API.
            <br />
            <a href="https://github.com/kirillzhosul/cookie-widget">
              kirillzhosul/cookie-widget
            </a>
            , Widget about using cookies hosted on GitHub pages.
            <br />
            <a href="https://github.com/kirillzhosul/next-yandex-metrika">
              kirillzhosul/next-yandex-metrika
            </a>
            , Small component that allows to use Yandex.Metrika in Next.js
            <br />
            <a href="https://github.com/kirillzhosul/dotfiles">
              kirillzhosul/dotfiles
            </a>
            , Collection of scripts / configs files that I actively use during
            work (Docker / Nginx / etc)
            <br />
            <a href="https://github.com/kirillzhosul/matrix-webcam">
              kirillzhosul/matrix-webcam
            </a>
            , Page that makes your webcam behave like matrix. (Hosted on GitHub
            pages).
            <br />
            <a href="https://github.com/kirillzhosul/django-stripe">
              kirillzhosul/django-stripe
            </a>
            , Test task for one of the companies. Django simple *shop* with
            Stripe.
          </p>
          <br />
          <p className="bc-text">
            <b>
              <i>My websites</i>
            </b>
            <br />
            <a href="https://kirillzhosul.site">kirillzhosul.site</a>, This
            website, personal page.
            <br />
            <a href="https://kirillzhosul.github.io">kirillzhosul.github.io</a>
            , Storage for GitHub pages projects.
            <br />
            <a href="https://florgon.space">florgon.space</a>, My website with
            different services and SSO (OAuth).
            <br />
            <a href="https://cc.florgon.space">cc.florgon.space</a>, Link
            shortener.
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
