import Links from "../components/links";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="bc-head bc-head-withlogo">
        <div className="bc-logo bc-logo-userpic">
          <img
            className="bc-logo-image"
            src="https://avatars.githubusercontent.com/u/79853674?v=4"
            alt="Profile"
          />
        </div>
        <div className="bc-texts">
          <h1 className="bc-title">Kirill Zhosul</h1>{" "}
          <small>
            <b>Programmer - Developer</b>
          </small>
          <p className="bc-text">
            <Link href="/">Home</Link> | <Link href="/projects">Projects</Link>
          </p>
          <div>
            <hr />
          </div>
          <p className="bc-text">
            <b>
              <i>About me</i>
            </b>
            <br />
            Hello there! My name is <b>Kirill</b>. <br />I am doing programming
            for about <b>6</b> years (Or <b>3</b> years of professional)! <br />
            Currently I realize myself more as <b>Backend Developer</b> (
            <i>Python</i>). <br />
            Started from <b>Game Development</b>, currently interested also in{" "}
            <b>Frontend Development</b>.
          </p>
          <br />
          <p className="bc-text">
            <b>
              <i>My current stack</i>
            </b>
            <br />
            <ul style={{ marginLeft: "10px" }}>
              <li>
                - Backend:
                <ul style={{ marginLeft: "30px" }}>
                  <li>
                    - <b>Python</b> as core language (2 years experience).
                  </li>
                  <li>
                    - <b>FastAPI</b>, <b>Flask</b>, <b>Django</b> as frameworks.
                  </li>
                  <li>
                    - <b>PostgreSQL</b>, with <b>SQLAlchemy</b> as DBMS with
                    ORM.
                  </li>
                  <li>
                    - Other: <b>Nginx</b>, <b>Unix</b>, <b>Docker</b>, and
                    more...
                  </li>
                </ul>
              </li>
              <li>
                - Frontend:{" "}
                <ul style={{ marginLeft: "30px" }}>
                  <li>
                    - <b>React.js (Next.js) </b> as core framework (1 year
                    experience).
                  </li>
                </ul>
              </li>
              <li>
                - Gamedev:{" "}
                <ul style={{ marginLeft: "30px" }}>
                  <li>
                    - <b>Game Maker: Studio</b> as main game engine (6 years
                    experience).
                  </li>
                  <li>
                    - <b>Unity</b> as second game engine.
                  </li>
                </ul>
              </li>
              <li>
                - Other languages:{" "}
                <ul style={{ marginLeft: "30px" }}>
                  <li>
                    - <b>C#</b>, <b>Java</b>, <b>C++</b> but I do not have any
                    major projects that used that languages (for now).
                  </li>
                </ul>
              </li>
            </ul>
          </p>
          <br />
          <p className="bc-text">
            <b>
              <i>My projects and websites</i>
            </b>
            <br />
            <Link href="/projects">Go to projects page...</Link>
          </p>
        </div>
      </div>
      <Links />
    </>
  );
}
