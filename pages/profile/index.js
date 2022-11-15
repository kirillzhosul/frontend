import Navbar from "../../components/navbar";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import useAuth from "../../contexts/auth";
import Link from "next/link";

export default function Profile() {
  const { t, lang } = useTranslation("common");
  const {
    user,
    isLoading,
    isAuthenticated,
    requestOauthAuthorization,
    purchasedCourses,
    accessToken,
  } = useAuth();

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
                <a onClick={requestOauthAuthorization} href="">
                  {t("signin-florgon-sso")}
                </a>
              </b>
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
                      - Course with ID <b>{course.course_id}</b> (Purchase ID:{" "}
                      <b>{course.purchase_id})</b>, purchased at{" "}
                      <b>
                        {new Date(
                          course.purchased_at * 1000
                        ).toLocaleDateString(lang)}
                      </b>{" "}
                      for <b>{course.purchased_for}</b> rubles.
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
