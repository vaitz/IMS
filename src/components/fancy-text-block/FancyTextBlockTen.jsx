import React from "react";

const FancyTextBlockTen = () => {
  return (
    <>
      <div className="row align-items-end">
        <div
          className="col-xl-5 col-lg-6 ml-auto order-lg-last"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <img
            src="/njsw36/static/images/icon/34.svg"
            alt=""
            className="icon"
          />
          <p className="font-rubik">
            Deski combines excellent live chat, ticketing and automation that
            allow us to provide quality.
          </p>
          <div className="name sm-mb-40">
            Mike Lucas.{" "}
            <span>
              CEO & Founder <br />
              deksi
            </span>
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-6 order-lg-first">
          <div className="row align-items-end">
            <div
              className="col-6"
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <img
                src="/njsw36/static/images/media/img_25.png"
                alt=""
                className="img-meta"
              />
            </div>
            <div
              className="col-6"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <img
                src="/njsw36/static/images/media/img_26.png"
                alt=""
                className="img-meta"
              />
            </div>
          </div>
        </div>
      </div>
      {/* End .row */}

      <div className="row">
        <div className="col-lg-10 ml-auto">
          <div className="img-gallery mt-60 md-mt-20">
            <div className="row">
              <div
                className="col-sm-5 sm-mb-20"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <img
                  src="/njsw36/static/images/media/img_27.png"
                  alt="media"
                  className="img-meta"
                />
              </div>
              <div
                className="col-sm-7"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <img
                  src="/njsw36/static/images/media/img_28.png"
                  alt="media"
                  className="img-meta"
                />
              </div>
            </div>
          </div>
          {/* /.img-gallery */}
        </div>
      </div>
      {/* End .row */}
    </>
  );
};

export default FancyTextBlockTen;
