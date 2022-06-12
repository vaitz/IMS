import React from "react";
import { Link } from "react-router-dom";

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

const FooterThree = () => {
  return (
    <div className="row justify-content-between">
      <div
        className="col-lg-3 col-md-4 address-list"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="150"
      >
        <h5 className="footer-title">צרו קשר</h5>
        <p className="font-rubik">08-6387930, 08-6479259</p>
        <ul className="info">
          <li>
            <a href="mailto:Negev@gav-yam.co.il">Negev@gav-yam.co.il</a>
          </li>
        </ul>
        {/* End ul */}
        <ul className="social-icon d-flex pt-15">
          {socialContent.map((val, i) => (
            <li key={i}>
              <a href={val.link} target="_blank" rel="noreferrer">
                <i className={`fa ${val.icon}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/*  /.footer-list  */}
    </div>
    //    /.row
  );
};

export default FooterThree;
