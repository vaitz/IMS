import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortfolioImages = ["screen_21", "screen_22", "screen_23", "screen_22"];

const MobileAppPortfolio = () => {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 900,
    rtl: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {PortfolioImages.map((val, i) => (
          <div className="item" key={i}>
            <div className="img-holder">
              <img src={`images/assets/${val}.png`} alt="screen" />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default MobileAppPortfolio;
