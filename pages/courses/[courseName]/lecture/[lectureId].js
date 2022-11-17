import Navbar from "../../../../components/navbar";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import { apiRequest } from "../../../../shared/kirillzhosul-api";
import { useEffect, useState } from "react";
import Link from "next/link";
import router from "next/router";

export async function getServerSideProps(context) {
  const courseName = context.query?.courseName;
  const lectureId = context.query?.lectureId;
  const accessToken =
    context.req.cookies[process.env.NEXT_PUBLIC_ACCESS_TOKEN_COOKIE_NAME];
  return {
    props: {
      courseName: courseName,
      lectureId: lectureId,
      accessToken,
    },
  };
}

export default function CourseLecture({ courseName, lectureId, accessToken }) {
  const { t, lang } = useTranslation("common");
  const [lecture, setLecture] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const isAllowed = isLoading || (lecture?.content && lecture?.is_active);

  if (!isAllowed) {
    router.replace(`/courses/${courseName}/lecture/${lectureId}`);
  }

  useEffect(() => {
    apiRequest(
      "courses/lectures/get",
      `course_name=${courseName}&course_lecture_id=${lectureId}`,
      accessToken
    )
      .then((response) => {
        setLecture(response?.success?.course_lecture);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [accessToken, courseName, setLecture, setIsLoading, lectureId]);

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
            {isLoading && <>Loading...</>}
            {!isLoading && !lecture && (
              <>Failed to fetch course lecture information!</>
            )}
            {!isLoading && lecture && (
              <>
                - <b>{lecture?.title}</b>
                <br />
                Description: {lecture?.description}
                <br /> <br />-{" "}
                <b>
                  <i>Lecture</i>
                </b>{" "}
                <br />
                <div>{lecture?.content}</div>
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
