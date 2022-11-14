import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";

export default function Home() {
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
            <Link href="/courses">{t("courses")}</Link> |{" "}
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
              <i>{t("about-me-title")}</i>
            </b>
            <br />
            {t("about-me-text")}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
