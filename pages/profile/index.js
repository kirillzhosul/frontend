import Navbar from "../../components/navbar";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import useAuth from "../../contexts/auth";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Profile() {
  const { t, lang } = useTranslation("common");
  const {
    user,
    isLoading,
    isAuthenticated,
    getOAuthAuthorizationUrl,
    purchasedCourses,
    accessToken,
  } = useAuth();
  const router = useRouter();

  if (!isAuthenticated && !isLoading) {
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
                <i>{t("signin-title")}</i>
                <br />-{" "}
                <a
                  onClick={() => {
                    router.push(getOAuthAuthorizationUrl());
                  }}
                  href="#"
                >
                  {t("signin-florgon-sso")}
                </a>
              </b>
              <br />
              <i>
                {t("you-accepting")}{" "}
                <Link href="/legal/terms">{t("legal-terms")}</Link> {t("and")}{" "}
                <Link href="/legal/privacy">{t("legal-privacy")}</Link>!
              </i>
            </p>
          </div>
        </div>
      </>
    );
  }

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
            Your user id: <b>{user?.id}</b>.
            <br />
            Email: <b>{user?.email}</b>.
            <br />
            (to change contact:{" "}
            <a href="mailto: me@kirillzhosul.site">me@kirillzhosul.site</a>)
            <br />
            <br />
            Your purchased courses: <br />
            {purchasedCourses.length == 0 && (
              <>
                - <b>You are not purchased any course!</b>
                <br />- <Link href="/courses">Search for free courses...</Link>
              </>
            )}
            {purchasedCourses.length != 0 && (
              <>
                {purchasedCourses.map((course) => {
                  console.log(course);
                  return (
                    <>
                      - Course `
                      <b>
                        <Link href={`/courses/${course?.course?.name}`}>
                          {course?.course?.title}
                        </Link>
                      </b>
                      ` <br />- -{" "}
                      <i>
                        {new Date(
                          course.purchased_at * 1000
                        ).toLocaleDateString(lang)}
                      </i>{" "}
                      for <b>{course.purchased_for}</b> rubles (Purchase ID:{" "}
                      <b>{course.purchase_id})</b>.
                      <br />
                    </>
                  );
                })}
              </>
            )}
          </p>
        </div>
      </div>
    </>
  );
}
