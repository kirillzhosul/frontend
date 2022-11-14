import Link from "next/link";

export default function Navbar({ t, lang, setLanguage }) {
  return (
    <>
      <h1 className="bc-title">{t("kirillzhosul")}</h1>{" "}
      <small>
        <b>{t("programmer-developer")}</b>
      </small>
      <p className="bc-text">
        <Link href="/">{t("home")}</Link> |{" "}
        <Link href="/projects">{t("projects")}</Link> |{" "}
        <Link href="/courses">{t("courses")}</Link> |{" "}
        <Link href="/profile">{t("profile")}</Link> |{" "}
        <a
          href="#"
          onClick={async () => await setLanguage(lang === "ru" ? "en" : "ru")}
        >
          {lang === "ru" ? "english" : "русский"}
        </a>
      </p>
      <div>
        <hr />
      </div>
      <br />
    </>
  );
}
