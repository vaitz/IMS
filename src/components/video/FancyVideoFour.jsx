import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const FancyVideoFour = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      />
      <div className="video-meta position-relative" data-aos="fade-up">
        <img src="/njsw36/static/images/media/img_107.png" alt="group of people" />
        <div
          className="fancybox video-icon d-flex align-items-center justify-content-center"
          onClick={() => setOpen(true)}
        >
          <img src="/njsw36/static/images/icon/148.svg" alt="icon" />
        </div>
      </div>
    </>
  );
};

export default FancyVideoFour;
