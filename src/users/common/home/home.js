import React from "react";
import TestimonialTwo from "../../../components/testimonial/TestimonialTwo";
import Companies from "../../../components/brand/Companies";
import HeroBannerThree from "../../../components/hero-banner/HeroBannerThree";
const socialContent = [
  {
    icon: "fa-facebook",
    link: "https://www.facebook.com/GavYamN/",
  },
  {
    icon: "fa-instagram",
    link: "https://www.instagram.com/gavyamnegev/",
  },
  {
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/company/gav-yam-negev-advanced-technologies-park-atp-/",
  },
];
const Home = () => {
  return (
    <div>
      <HeroBannerThree />
      <div className="fancy-feature-eight mt-110 md-mt-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 m-auto">
              <div className="title-style-four text-center mb-80 md-mb-30">
                <h3 data-aos="fade-up" data-aos-duration="1200">
                  תכנית ההתמחות הינה תכנית ייחודית וראשונה מסוגה שנבנתה בשיתוף
                  פעולה בין פארק ההיי-טק גב-ים נגב למחלקה להנדסת מערכות תוכנה
                  ומידע, המרכז לפיתוח קריירה באוניברסיטת בן-גוריון בנגב ועמותת
                  "אלומה".
                  <br />
                  מטרת התוכנית היא לאפשר לסטודנטים הלומדים באוניברסיטה גישה
                  לחברות ההיי-טק המובילות הפועלות בפארק,
                  <span>
                    {" "}
                    והיכרות מעשית עם סביבת הפיתוח{" "}
                    <img
                      src="/njsw36/static/images/shape/line-shape-3.svg"
                      alt="shape"
                    />
                  </span>
                  בתעשיית ההיי-טק המקומית.
                </h3>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row justify-content-center">
            <img
              src="/njsw36/static/images/logo/GavYam.jpg"
              className="images"
            />
            <img src="/njsw36/static/images/logo/BGU.jpg" className="images" />
            <img
              src="/njsw36/static/images/logo/aloma.png"
              className="images"
            />

            {/*<div className="col-xl-11 m-auto">*/}
            {/*  <FancyFeatureEight />*/}
            {/*</div>*/}
            {/*<img src="/njsw36/static/images/logo/starship.jpg" className="illustration" />*/}
          </div>
          {/* End .row */}
        </div>
      </div>
      {/*  /.fancy-feature-eight */}
      {/*
     =============================================
				Document Slide As Nav
		============================================== */}
      {/*<div className="fancy-text-block-sixteen mt-200 md-mt-80">*/}
      {/*  <div className="container">*/}
      {/*    <DocSlickAsNav />*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/* End text block based image slide */}
      <div className="fancy-feature-eight pt-150 md-pt-100">
        <div className="container">
          <div className="title-style-four text-center mb-60 md-mb-40">
            <div className="row">
              <div className="col-lg-10 m-auto">
                <h6 className="font-rubik">הצטרפו לתוכנית</h6>
                <h2 className="font-rubik">
                  סטודנט/ית או חברה שמעוניינת לקחת חלק בתוכנית?{" "}
                  <span>
                    מהרו והירשמו בהקדם{" "}
                    <img
                      src="/njsw36/static/images/shape/line-shape-2.svg"
                      alt="shape"
                    />
                  </span>
                  כדי לקחת חלק במחזור הקרוב.
                </h2>
              </div>
            </div>
          </div>

          <div className="block-style-twelve">
            <div className="row">
              <div
                className="col-lg-6 col-md-8 ml-auto order-lg-last"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="illustration-holder">
                  <img
                    src="/njsw36/static/images/assets/ils_10.svg"
                    alt="illustration"
                  />
                </div>
              </div>
              <div
                className="col-lg-5 order-lg-first"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>משתתפים</h6>
                  <h2 className="font-rubik title">
                    100 סטודנטיות וסטודנטים מצטיינים
                  </h2>
                  <p>
                    במחזור הראשון, השני והשלישי של התכנית השתתפו 100 סטודנטיות
                    וסטודנטים מצטיינים מהתוכניות להנדסת תוכנה הנדסת מערכות מידע
                    ומדעי המחשב אשר שובצו להתמחות בכ-20 חברות היי-טק מובילות
                    בפארק גב-ים נגב.
                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twelve */}

          <div className="block-style-twelve">
            <div className="row">
              <div
                className="col-lg-6 col-md-8 mr-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="illustration-holder">
                  <img
                    src="/njsw36/static/images/assets/ils_11.svg"
                    alt="illustration"
                  />
                </div>
              </div>
              <div
                className="col-lg-5"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>נסיון מעשי</h6>
                  <h2 className="font-rubik title">פרויקט פיתוח טכנולוגי</h2>
                  <p>
                    במסגרת ההתמחות המתמחים עבדו על פרויקט פיתוח טכנולוגי בליווי
                    מנטור מקצועי מטעם החברה.
                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twelve */}

          <div className="block-style-twelve">
            <div className="row">
              <div
                className="col-lg-6 col-md-8 ml-auto order-lg-last"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="illustration-holder">
                  <img
                    src="/njsw36/static/images/assets/ils_12.svg"
                    alt="illustration"
                  />
                </div>
              </div>
              <div
                className="col-lg-5 order-lg-first"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>מפגשים</h6>
                  <h2 className="font-rubik title">מפגשים מקצועיים</h2>
                  <p>
                    המתמחים השתתפו ב-13 מפגשי Meetup מקצועיים שהועברו ע"י אנשי
                    פיתוח בכירים מקרב חברות ההיי-טק בפארק, בדגש על יישום
                    בתעשייה. במפגשים אלו שולבו גם תכנים תעסוקתיים ומיומנויות
                    לקידום הקריירה בהובלת המרכז לפיתוח קריירה באוניברסיטת
                    בן-גוריון.
                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twelve */}
        </div>
      </div>
      {/* /.fancy-feature-eight */}
      {/*
     =============================================
			Client Feedback Slider Two
		============================================== */}
      <div className="client-feedback-slider-two mt-180 md-mt-100">
        <img
          src="/njsw36/static/images/shape/78.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="/njsw36/static/images/shape/79.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <img
          src="/njsw36/static/images/shape/80.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <img
          src="/njsw36/static/images/shape/81.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <img
          src="/njsw36/static/images/shape/82.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <img
          src="/njsw36/static/images/shape/83.svg"
          alt="shape"
          className="shapes shape-six"
        />
        <img
          src="/njsw36/static/images/shape/84.svg"
          alt="shape"
          className="shapes shape-seven"
        />
        <img
          src="/njsw36/static/images/shape/85.svg"
          alt="shape"
          className="shapes shape-eight"
        />
        <div className="container">
          <div className="title-style-four text-center mb-100 md-mb-60">
            <div className="row">
              <div className="col-lg-7 col-md-9 m-auto">
                <h6>פידבק</h6>
                <h2 className="font-rubik">
                  מה המשתתפים בתוכנית <br />
                  <span>
                    אומרים עליה{" "}
                    <img
                      src="/njsw36/static/images/shape/line-shape-2.svg"
                      alt="shape"
                    />
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-content">
          <div className="clientSliderTwo slick-nav-none">
            <TestimonialTwo />
          </div>
        </div>
        {/* /.slider-content */}
      </div>
      {/* /.client-feedback-slider-two */}
      <div className="useable-tools-section-three pt-200 pb-200 md-pt-100 md-pb-80 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title-style-four">
                <h2>
                  <span className="font-rubik">
                    החברות החונכות
                    <img src="/njsw36/static/images/shape/line-shape-10.svg" />
                  </span>
                </h2>
              </div>
              <p className="sub-text">
                החברות נמצאות בפארק ההייטק גב-ים בבאר שבע
              </p>
            </div>
          </div>
        </div>

        <div
          className="
        logo-wrapper
        d-flex
        flex-wrap
        justify-content-center
        align-items-center
      "
        >
          <Companies />
        </div>
      </div>

      <div className="faq-classic with-bg">
        <img
          src="/njsw36/static/images/shape/86.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="/njsw36/static/images/shape/87.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <img
          src="/njsw36/static/images/shape/88.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <div className="connect">
          <div
            className="font-rubik"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="150"
          >
            <h3 className="footer-title">צרו קשר</h3>
            <br />
            <p className="font-rubik">08-6387930, 08-6479259</p>
            <ul className="info">
              <li>
                <a href="mailto:Negev@gav-yam.co.il">Negev@gav-yam.co.il</a>
              </li>
            </ul>
            <ul className="social-icon align-items-center d-flex justify-content-center">
              {socialContent.map((val, i) => (
                <li key={i}>
                  <a href={val.link} target="_blank" rel="noreferrer">
                    <i className={`fa ${val.icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <img
          src="/njsw36/static/images/shape/89.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <img
          src="/njsw36/static/images/shape/90.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <img
          src="/njsw36/static/images/shape/91.svg"
          alt="shape"
          className="shapes shape-six"
        />
      </div>
    </div>
  );
};

export default Home;
