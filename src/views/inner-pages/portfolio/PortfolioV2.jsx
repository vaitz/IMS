import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../components/header/Header";
import PortfolioThree from "../../../components/portfolio/PortfolioThree";
import FooterSeven from "../../../components/footer/FooterSeven";
import CopyRightThree from "../../../components/footer/CopyRightThree";

const PortfolioV2 = () => {
  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>
          Portfolio Grid 2 Column || Deski-Saas & Software React Template
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <Header />
      {/* End Header */}

      {/* =============================================
         Fancy Hero Six
        ==============================================  */}
      <div className="fancy-hero-six">
        <div className="container">
          <h1 className="heading">Grid 2 Columns</h1>
          <p className="sub-heading">
            An original way to show your works in a good appearance
          </p>
        </div>
      </div>
      {/* /.fancy-hero-six */}

      {/*  =============================================
            Fancy Portfolio Two
        ==============================================  */}
      <div className="fancy-portfolio-three lg-container">
        <div className="container">
          <div className="top-border bottom-border pb-130 md-pb-90">
            <PortfolioThree />
            <div className="text-center mt-90 md-mt-50">
              <h2 className="contact-title font-gordita">
                Do you have any projects? <br />
                Contact us.
              </h2>
              <a href="#" className="theme-btn-nine mt-35">
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-portfolio-two */}

      {/* =====================================================
            Footer Style Seven
        ===================================================== */}
      <footer className="theme-footer-seven mt-120 md-mt-100">
        <div className="lg-container">
          <div className="container inner-btn-black">
            <FooterSeven />
          </div>

          <div className="container">
            <div className="bottom-footer">
              <CopyRightThree />
            </div>
          </div>
        </div>
        {/* /.lg-container */}
      </footer>
      {/* /.theme-footer-seven */}
    </div>
  );
};

export default PortfolioV2;
