import Navbar from "../../components/navbar";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";

export default function Courses() {
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
          <Navbar t={t} lang={lang} setLanguage={setLanguage} />
          <p className="bc-text">
            <b>
              <i>{t("profile-wip")}</i>
              <br />
              <a href="https://florgon.space/oauth/authorize?client_id=9&redirect_uri=https://kirillzhosul.site/profile&response_type=code">
                {t("signin-florgon-sso")}
              </a>
            </b>
          </p>
        </div>
      </div>
    </>
  );
}
