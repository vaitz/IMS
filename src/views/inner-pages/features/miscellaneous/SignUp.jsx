import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SignUpForm from "../../../../components/contact/form/SignUpForm";

const SignUp = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>הרשמה</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="user-data-page clearfix d-lg-flex">
        <div className="illustration-wrapper d-flex align-items-center justify-content-between flex-column">
          <h3 className="font-rubik">
            אם אתם חברה או סטודנט/ית המעוניינים לקחת חלק <br />
            כדאי לכם להירשם בהקדם ולהצטרף לחוויה.
          </h3>
          <div className="illustration-holder">
            <img
              src="/njsw36/static/images/assets/ils_08.svg"
              alt="illustration"
              className="illustration"
            />
            <img
              src="/njsw36/static/images/assets/ils_08.1.svg"
              alt="illustration"
              className="shapes shape-one"
            />
            <img
              src="/njsw36/static/images/assets/ils_08.2.svg"
              alt="illustration"
              className="shapes shape-two"
            />
          </div>
        </div>
        {/* /.illustration-wrapper  */}

        <div className="form-wrapper">
          {/*<div className="d-flex justify-content-between">*/}
          {/*  <div className="logo">*/}
          {/*    <Link to="/njsw36/">*/}
          {/*      <img src="/njsw36/static/images/logo/logo.png" alt="logo" width="190" height="70" />*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*  <Link className="font-rubik go-back-button" to="/njsw36">*/}
          {/*    חזור לדף הבית*/}
          {/*  </Link>*/}
          {/*</div>*/}
          {/* End d-flex */}
          <div className="font-rubik mt-10">
            <Link className="font-rubik go-back-button" to="/njsw36/">
              חזור לדף הבית
            </Link>
            <h3 className="font-rubik">הצטרפו אלינו!</h3>
            <p className="header-info pt-20 pb-30">
              נרשמת למערכת כבר? מעבר ל<Link to="/njsw36/login">התחברות</Link>
            </p>
          </div>
          <SignUpForm />
          {/* End Signup Form */}
          <p className="text-center font-rubik copyright-text">
            Copyright @{new Date().getFullYear()}{" "}
            <a
              href="https://themeforest.net/user/ib-themes/portfolio"
              target="_blank"
              title="myFrame"
              rel="noreferrer"
            >
              ib-themes
            </a>{" "}
            inc.
          </p>
          {/* End .copyright */}
        </div>
        {/* /.form-wrapper */}
      </div>
      {/* /.user-data-page */}
    </div>
  );
};

export default SignUp;
