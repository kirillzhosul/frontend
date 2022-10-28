import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head>
        <meta name="title" content="Page not found!" />
        <title>Page not found!</title>
      </Head>
      <div className="bc bc-list">
        <div className="bc-head bc-head-withlogo">
          <div className="bc-texts">
            <h1 className="bc-title">Page not found!</h1>
            <p className="bc-text">
              Oops! Page that you were looking for is not found or not exists
              yet!
            </p>
            <br />
            <Link href="/">Go home</Link>
          </div>
        </div>
      </div>
    </>
  );
}
