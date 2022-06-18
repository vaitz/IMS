import React from "react";
import FormDoc from "../form/FormDoc";
import { Link } from "react-router-dom";

const HeroBannerThree = () => {
  return (
    <div className="hero-banner-three">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-11 col-md-8 m-auto">
            <h1 className="font-rubik">תכנית ההתמחות להיי-טק</h1>
          </div>
          {/* End .col */}

          <div className="col-xl-8 col-lg-9 m-auto">
            <p className="sub-text font-rubik">
              תכנית ההתמחות הינה תכנית ייחודית וראשונה מסוגה שנבנתה בשיתוף פעולה
              בין פארק ההיי-טק גב-ים נגב למחלקה להנדסת מערכות תוכנה ומידע, המרכז
              לפיתוח קריירה באוניברסיטת בן-גוריון בנגב ועמותת "אלומה".
              <br />
              מטרת התוכנית היא לאפשר לסטודנטים הלומדים באוניברסיטה גישה לחברות
              ההיי-טק המובילות הפועלות בפארק, והיכרות מעשית עם סביבת הפיתוח
              בתעשיית ההיי-טק המקומית.
            </p>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}

        <p className="sing-in-call">
          רוצה לקחת חלק מהתוכנית?{" "}
          <Link to="/njsw36/signup" className="font-rubik">
            הרשמה כאן
          </Link>
          .
        </p>

        <img
          src="/njsw36/static/images/assets/ils_09.svg"
          alt="illustration"
          className="illustration"
        />
      </div>
      {/* /.container */}

      <img
        src="/njsw36/static/images/shape/68.svg"
        alt="shape"
        className="shapes shape-one"
      />
      <img
        src="/njsw36/static/images/shape/69.svg"
        alt="shape"
        className="shapes shape-two"
      />
      <img
        src="/njsw36/static/images/shape/70.svg"
        alt="shape"
        className="shapes shape-three"
      />
      <img
        src="/njsw36/static/images/shape/71.svg"
        alt="shape"
        className="shapes shape-four"
      />
      <img
        src="/njsw36/static/images/shape/72.svg"
        alt="shape"
        className="shapes shape-five"
      />
      <img
        src="/njsw36/static/images/shape/73.svg"
        alt="shape"
        className="shapes shape-six"
      />
      <img
        src="/njsw36/static/images/shape/74.svg"
        alt="shape"
        className="shapes shape-seven"
      />
      <img
        src="/njsw36/static/images/shape/75.svg"
        alt="shape"
        className="shapes shape-eight"
      />
      <img
        src="/njsw36/static/images/shape/76.svg"
        alt="shape"
        className="shapes shape-nine"
      />
      <img
        src="/njsw36/static/images/shape/77.svg"
        alt="shape"
        className="shapes shape-ten"
      />
    </div>
    // End hero-banner-three
  );
};

export default HeroBannerThree;
