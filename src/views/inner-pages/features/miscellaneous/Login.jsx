import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import LoginForm from "../../../../components/contact/form/LoginForm";

const Login = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>התחברות</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="user-data-page clearfix d-lg-flex">
        <div className="illustration-wrapper d-flex align-items-center justify-content-between flex-column">
          <h3 className="font-rubik">
            רוצה חלק חלק מתוכנית <br />
            ההתמחות? <Link to="/njsw36/signup">הרשמ/י כאן</Link>
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
        {/* /.illustration-wrapper */}

        <div className="form-wrapper">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <Link to="/njsw36/">
                <img src="/njsw36/static/images/logo/logo.png" alt="logo"  width="190" height="70" />
              </Link>
            </div>
            <Link
              className="font-rubik go-back-button"
              to="/njsw36/"
            >
              חזור לדף הבית
            </Link>
          </div>
          <div className="mt-80 md-mt-40">
            <h2>
              שלום, ברוכים הבאים! <br />
            </h2>
            <p className="header-info pt-30 pb-50">
               עדיין איך לך משתמש?  <Link to="/njsw36/signup">הרשם כאן</Link>
            </p>
          </div>

          <LoginForm />
          {/* Login Form End */}
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
        </div>
        {/* /.form-wrapper */}
      </div>
      {/* /.user-data-page */}
    </div>
  );
};

export default Login;
