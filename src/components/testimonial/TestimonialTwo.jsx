import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialTwo() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    rtl: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      img: "company4",
      desc: `זכיתי להוביל את פעילות המתמחים, הם משולבים הלכה למעשה בפיתוח תוכנה במסגרת פרויקטמרכזי של החברה ועושים זאת בהצלחה רבה.`,
      reviewerName: "מנטור",
      designation: "Elbit Systems",
    },
    {
      img: "company10",
      desc: `We feel the students we chose are top-talent. They should be proud of what they accomplished. We are!`,
      reviewerName: "מנטור",
      designation: "Taboola",
    },
    {
      img: "company9",
      desc: `הם ענו על כל הציפיות ואף מעבר, ועמדו בהצלחה בכל המשימות.`,
      reviewerName: "מנטור",
      designation: "RAD",
    },
    {
      img: "logo-9",
      desc: `Having a home based business is a wonderful asset to your life. The problem still stands it comes time advertise your business for a cheap cost. I know you have looked answer everywhere.`,
      reviewerName: "Zibaiya Reian",
      designation: "Motion Graphy Expert",
    },
    {
      img: "logo-10",
      desc: `Having a home based business is a wonderful asset to your life. The problem still stands it comes time advertise your business for a cheap cost. I know you have looked answer everywhere.`,
      reviewerName: "Riana Sariya",
      designation: "Digital Photographer",
    },
  ];

  return (
    <Slider {...settings}>
      {TestimonilContent.map((val, i) => (
        <div className="item" key={i}>
          <div className="bg-wrapper">
            <img
              src={`/njsw36/static/images/logo/${val.img}.png`}
              alt=""
              className="logo mr-auto"
            />
            <p>{val.desc}</p>
            <div className="name">{val.reviewerName}</div>
            <div className="desig">{val.designation}</div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      ))}
    </Slider>
  );
}
