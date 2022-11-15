import Navbar from "../../components/navbar";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import { apiRequest } from "../../shared/kirillzhosul-api";
import { useEffect, useState } from "react";
import Link from "next/link";

export async function getServerSideProps(context) {
  const courseName = context.query?.courseName;
  const accessToken =
    context.req.cookies[process.env.NEXT_PUBLIC_ACCESS_TOKEN_COOKIE_NAME];
  return {
    props: {
      courseName: courseName,
      accessToken,
    },
  };
}

export default function Courses({ courseName, accessToken }) {
  const { t, lang } = useTranslation("common");
  const [course, setCourse] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiRequest("courses/get", `name=${courseName}`, accessToken).then(
      (response) => {
        setCourse(response?.success?.course);
        setIsLoading(false);
      }
    );
  }, [accessToken, courseName, setCourse, setIsLoading]);

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
            {isLoading && <>...</>}
            {!isLoading && (
              <>
                <b>{course?.title}</b>
                <br />- {course?.description}
                <br />- - {course?.difficulty?.name} (level{" "}
                {course?.difficulty?.value})
                <br />- -{" "}
                <i>
                  <b>
                    {course?.is_public
                      ? "free, public!"
                      : `${course?.price} rubles.`}
                  </b>
                </i>
                <br />
                <br />
                Lectures: <br />-{" "}
                <b>Courses are currently in development yet!</b>
                <br />
                <br />
                <a
                  onClick={() => {
                    apiRequest(
                      "courses/buy",
                      `course_id=${course?.id}&__name=${course?.name}`,
                      accessToken
                    );
                    setIsLoading(true);
                  }}
                  href=""
                >
                  Purchase for {course?.price} rubles!
                </a>
                <br />
                <Link href="/courses">Go back...</Link>
              </>
            )}
          </p>
        </div>
      </div>
    </>
  );
}
