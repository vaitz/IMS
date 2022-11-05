import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>דף לא נמצא</title>
      </Helmet>
      {/* End Page SEO Content */}

      <div className="error-page d-lg-flex align-items-center">
        <div className="img-holder order-lg-last">
          <img
            src="/static/images/media/404.svg"
            alt="media"
            className="w-100 illustration"
          />
          <img
            src="/static/images/media/404-q.svg"
            alt="media"
            className="shapes qus"
          />
        </div>
        <div className="text-wrapper order-lg-first">
          <h1 className="font-rubik">
            מצטערים, <br />
            הדף לא נמצא או <br />
            לא מומש עדיין.
          </h1>
          <p className="font-rubik">כנראה ימומש בקרוב, הישארו מעודכנים!</p>

          <Link
            to=""
            className="back-home font-rubik d-flex align-items-center justify-content-center"
          >
            <span>חזור לדף הבית</span>
            <img
              className="rotate-180"
              src="/static/images/icon/53.svg"
              alt="icon"
            />
          </Link>
        </div>
        {/* /.text-wrapper */}
      </div>
      {/* /.error-page */}
    </div>
  );
};

export default NotFound;
