import Navbar from "../../../components/navbar";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import { apiRequest } from "../../../shared/kirillzhosul-api";
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

function CourseLecture({ courseLecture, courseName }) {
  const isAllowed = courseLecture?.content && courseLecture?.is_active;
  return (
    <>
      -{" "}
      {isAllowed && (
        <Link href={`/courses/${courseName}/lecture/${courseLecture?.id}`}>
          {courseLecture?.title}
        </Link>
      )}
      {!isAllowed && (
        <>
          {courseLecture?.title} ({courseLecture.is_active && "[Inactive]"})
        </>
      )}
    </>
  );
}

function CourseLectures({ courseId, courseName, accessToken }) {
  const [isLoading, setIsLoading] = useState(true);
  const [lectures, setLectures] = useState([]);
  const [contentHiddenUntilPurchase, setContentHiddenUntilPurchase] =
    useState(false);
  useEffect(() => {
    apiRequest("courses/lectures/list", `course_id=${courseId}`, accessToken)
      .then((response) => {
        setLectures(response?.success?.course_lectures);
        setContentHiddenUntilPurchase(
          response?.success?.content_hidden_until_purchase
        );
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [
    accessToken,
    courseId,
    setLectures,
    setIsLoading,
    setContentHiddenUntilPurchase,
  ]);

  return (
    <>
      Lectures
      {!isLoading && !contentHiddenUntilPurchase && " (public)"}
      {!isLoading && contentHiddenUntilPurchase && " (purchase to unlock)"}
      :<br />
      {isLoading && <b>Loading lectures...</b>}
      {!isLoading && lectures.length === 0 && <>- no lectures yet...</>}
      {!isLoading && lectures.length !== 0 && (
        <>
          {lectures.map((lecture, index) => {
            return (
              <>
                <CourseLecture
                  courseName={courseName}
                  courseLecture={lecture}
                />
                {index < lectures.length - 1 && <br />}
              </>
            );
          })}
        </>
      )}
    </>
  );
}

export default function Courses({ courseName, accessToken }) {
  const { t, lang } = useTranslation("common");
  const [course, setCourse] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiRequest("courses/get", `name=${courseName}`, accessToken)
      .then((response) => {
        setCourse(response?.success?.course);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
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
            {isLoading && <>Loading...</>}
            {!isLoading && !course && <>Failed to fetch course information!</>}
            {!isLoading && course && (
              <>
                <b>{course?.title}</b>
                <br />- {course?.description}
                <br />- - {course?.difficulty?.name} (level{" "}
                {course?.difficulty?.value})
                <br />
                {!course?.is_public && (
                  <>
                    - - <b>{`${course?.price} rubles.`}</b>
                    <br />
                  </>
                )}
                <br />
                <CourseLectures
                  courseName={courseName}
                  courseId={course?.id}
                  accessToken={accessToken}
                />
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
