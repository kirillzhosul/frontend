import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function NotFound() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <meta name="title" content={t("page-not-found")} />
        <title>{t("page-not-found")}</title>
      </Head>
      <div className="bc bc-list">
        <div className="bc-head bc-head-withlogo">
          <div className="bc-texts">
            <h1 className="bc-title">{t("page-not-found-title")}</h1>
            <p className="bc-text">{t("page-not-found-description")}</p>
            <br />
            <Link href="/">{t("go-home")}</Link>
          </div>
        </div>
      </div>
    </>
  );
}
