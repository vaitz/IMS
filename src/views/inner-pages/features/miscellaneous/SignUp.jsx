import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SignUpForm from "../../../../components/contact/form/SignUpForm";
import Register from "../../../../users/guest/register/register";

const SignUp = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>הרשמה</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="user-data-page clearfix d-lg-flex">
        <div className="illustration-wrapper d-flex align-items-center flex-column">
          <h3 className="font-rubik">
            אם אתם חברה או סטודנט/ית המעוניינים <br />
            לקחת חלק כדאי לכם להירשם בהקדם
            <br />
            ולהצטרף לחוויה.
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
          <div className="font-rubik mt-10">
            <Link className="font-rubik go-back-button" to="/njsw36/">
              חזור לדף הבית
            </Link>
            <h2 className="font-rubik">הצטרפו אלינו!</h2>
            <p className="header-info pt-20 pb-30">
              נרשמת למערכת כבר? מעבר ל<Link to="/njsw36/login">התחברות</Link>
            </p>
          </div>
          <Register />
          {/*<SignUpForm />*/}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
