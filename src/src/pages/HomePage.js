import React from "react";

const HomePage = function () {
  return (
    <>
      <div className="bc bc-list bc-withjinologo">
        <div className="bc-head bc-head-withlogo">
          <div className="bc-logo bc-logo-userpic">
            <img
              className="bc-logo-image"
              src="//media.jino.ru/userpics/52/d9d9/7a6d104bee885d4bd1d338fff2/regular@2x.png"
              alt="Profile"
            />
          </div>
          <div className="bc-texts">
            <h1 className="bc-title">Kirill Zhosul</h1>
            <p className="bc-text">
              <b>Programmer - Developer. </b>
              <br />
              <i>Backend | Gamedev | Frontend</i>
            </p>
            <small>(Currently opened to job offers!)</small>
            <div>
              <hr />
            </div>
            <p className="bc-text">
              Hello there! My name is Kirill, I am doing programming websites,
              games and programs for about 3-6 years!
            </p>

            <br />
            <p className="bc-text">
              <b>
                <i>My stack</i>
              </b>
              <br />
              My stack is <b>Python</b> with (<b>FastAPI</b> | <b>Flask</b> |{" "}
              <b>Django</b>) for Backend, <br />
              for Frontend I am mostly using <b>React</b> with <b>Next.js</b>,{" "}
              <br /> for Games I prefer to use <b>Game Maker</b> but also have
              experience in <b>Unity</b>.
              <br />
              Also I tried to worked with <b>C#</b>, <b>C++</b>, <b>Java</b>
            </p>
            <br />
            <p className="bc-text">
              <b>
                <i>My projects</i>
              </b>
              <br />
              <a href="https://github.com/florgon/gatey-sdk-py">
                florgon/gatey-sdk-py
              </a>
              , Python library that works with my error logging service and
              doing logging errors.
              <br />
              <a href="https://github.com/florgon/api">florgon/api</a>, FastAPI
              backend for my website with OAuth and other stuff.
              <br />
              <a href="https://github.com/kirillzhosul/shop">
                kirillzhosul/shop
              </a>
              , Merchandise shop for the competition.
            </p>

            <br />
            <p className="bc-text">
              <b>
                <i>My websites</i>
              </b>
              <br />
              <a href="https://kirillzhosul.site">kirillzhosul.site</a>, This
              website, personal page.
              <br />
              <a href="https://kirillzhosul.github.io">
                kirillzhosul.github.io
              </a>
              , Storage for GitHub pages projects.
              <br />
              <a href="https://florgon.space">florgon.space</a>, My website with
              different services.
            </p>
          </div>
        </div>
        <ul className="bc-links bc-links-4">
          <li className="bc-link bc-link-email bc-link-defaultcolor">
            <span className="bc-link-icon"></span>
            <a href="mailto:me@florgon.space" className="bc-link-anchor">
              me@florgon.space
            </a>
          </li>
          <li className="bc-link bc-link-github bc-link-defaultcolor">
            <span className="bc-link-icon"></span>
            <a
              href="https://github.com/kirillzhosul"
              className="bc-link-anchor"
              target="_blank"
              rel="nofollow noreferrer"
            >
              kirillzhosul
            </a>
          </li>
          <li className="bc-link bc-link-telegram bc-link-defaultcolor">
            <span className="bc-link-icon"></span>
            <a
              href="https://telegram.me/kirillzhosul"
              className="bc-link-anchor"
              target="_blank"
              rel="nofollow noreferrer"
            >
              kirillzhosul
            </a>
          </li>
          <li className="bc-link bc-link-vk bc-link-defaultcolor">
            <span className="bc-link-icon"></span>
            <a
              href="https://vk.com/kirillzhosul"
              className="bc-link-anchor"
              target="_blank"
              rel="nofollow noreferrer"
            >
              kirillzhosul
            </a>
          </li>
          <li className="bc-link bc-link-address bc-link-defaultcolor">
            <span className="bc-link-icon"></span>
            Russia, Syzran
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomePage;
