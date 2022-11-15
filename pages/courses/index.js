import Navbar from "../../components/navbar";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import { apiRequest } from "../../shared/kirillzhosul-api";
import { useEffect, useState } from "react";

export default function Courses() {
  const { t, lang } = useTranslation("common");
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiRequest("courses/list").then((response) => {
      setCourses(response?.success?.courses);
      setIsLoading(false);
    });
  }, []);

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
                {courses.map((course) => {
                  return (
                    <>
                      {" "}
                      <a href={`/courses/${course?.name}`}>- {course?.title}</a>
                      <br />- - {course?.description}
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
                      <hr />
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
