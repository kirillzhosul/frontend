import React from "react";

const NotFoundPage = function () {
  return (
    <>
      <div className="bc bc-list">
        <div className="bc-head bc-head-withlogo">
          <div className="bc-texts">
            <h1 className="bc-title">Page not found!</h1>
            <p className="bc-text">
              Oops! Page that you were looking for is not found or not exists
              yet!
            </p>
            <br />
            <a href="/">Go home</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
