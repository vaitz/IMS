import React, { useState } from "react";
import Slider from "react-slick";

export default function SlickAsNav() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  var settings = {
    slidesToShow: 3,
    rtl: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>

      <Slider
        {...settings}
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        swipeToSlide={true}
        focusOnSelect={true}
        className="slick-nav-custom"
      >
        <div className="block-style-eleven mt-40">
          <div className="num font-rubik">01</div>
          <div className="title">Personal Notes</div>
          <img src="/njsw36/images/logo/GavYam.jpg"/>
          <p className="font-rubik">
            A place to think and track ideas for you and your team
          </p>
        </div>
        {/* /.block-style-eleven */}
        <div className="block-style-eleven mt-40">
          <div className="num font-rubik">02</div>
          <div className="title">Knowledge Base</div>
          <img src="/njsw36/images/logo/BGU.jpg"  />
          <p className="font-rubik">
            A home for your team, best practices and thoughts.
          </p>
        </div>
        {/* /.block-style-eleven */}
        <div className="block-style-eleven mt-40">
          <div className="num font-rubik">03</div>
          <div className="title">Products Doc</div>
          <img src="/njsw36/images/logo/aloma.png" />
        </div>
        {/* /.block-style-eleven */}
      </Slider>
      {/* Bottom text slide */}
    </>
  );
}
