import Navbar from "../../components/navbar";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import { apiRequest } from "../../shared/kirillzhosul-api";
import { useEffect, useState } from "react";
import router from "next/router";

export async function getServerSideProps(context) {
  return {
    props: { query: context?.query },
  };
}

export default function Courses({ query }) {
  const { t, lang } = useTranslation("common");
  const [courses, setCourses] = useState([]);
  const [pagination, setPagination] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const queryParams = `page=${query?.page ?? 1}&language=${
      query?.language ?? lang
    }&exclude_foreign_language=${query?.exclude_foreign_language ?? false}`;
    apiRequest("courses/list", queryParams)
      .then((response) => {
        setCourses(response?.success?.courses);
        setPagination(response?.success?.pagination);
        setPagination((o) => {
          o.current_total = response?.success?.current_total;
          return o;
        });
        const max_page = response?.success?.pagination?.max_page ?? 1;
        if ((query?.page ?? 1) > max_page) {
          query.page = max_page;
          router.push({
            pathname: "/courses",
            query: query,
          });
        }
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [lang, query]);

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
          <div className="bc-text">
            {isLoading && <>Loading...</>}
            {!isLoading && (
              <>
                {courses.length == 0 && (
                  <>
                    No courses found by your request!
                    <br />
                  </>
                )}
                {courses.map((course) => {
                  return (
                    <div key={course?.id}>
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
                    </div>
                  );
                })}
                <br />
                {pagination?.page > 1 && (
                  <a
                    onClick={(e) => {
                      query.page = pagination?.page - 1;
                      router.push({
                        pathname: "/courses",
                        query: query,
                      });
                      e.preventDefault();
                    }}
                    href="#"
                  >{`<-- Previous`}</a>
                )}
                <br />
                {`Page ${pagination?.page} / ${pagination?.max_page} `}
                <br />
                Shown {pagination?.current_total} courses (Total for this query:{" "}
                {pagination?.total}
                )
                <br />
                {pagination?.max_page > pagination?.page && (
                  <a
                    onClick={(e) => {
                      query.page = pagination?.page + 1;
                      router.push({
                        pathname: "/courses",
                        query: query,
                      });
                      e.preventDefault();
                    }}
                    href="#"
                  >{`Next -->`}</a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
