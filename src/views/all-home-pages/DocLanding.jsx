import React from "react";
import { Helmet } from "react-helmet";
import HeaderThree from "../../components/header/HeaderThree";
import HeroBannerThree from "../../components/hero-banner/HeroBannerThree";
import FancyFeatureEight from "../../components/features/FancyFeatureEight";
import DocSlickAsNav from "../../components/block-slider/DocSlickAsNav";
import TestimonialTwo from "../../components/testimonial/TestimonialTwo";
import BrandThree from "../../components/brand/BrandThree";
import FaqClassic from "../../components/faq/FaqClassic";
import CopyRight from "../../components/footer/CopyRight";
import FooterThree from "../../components/footer/FooterThree";
import CallToActionTwo from "../../components/call-to-action/CallToActionTwo";
import Home from "../../users/common/home/home";
import ChangePass from "../../users/common/changePass/changePass";

const DocLanding = (props) => {
  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>תוכנית ההתמחות להייטק</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderThree {...props} />
      {/* End Header */}

      <HeroBannerThree />
      {/* End Hero Banner Three */}
      <Home />
      <ChangePass />
    </div>
  );
};

export default DocLanding;
