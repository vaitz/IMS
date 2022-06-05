import React from "react";

const BrandImages = [
  "company1",
  "company2",
  "company3",
  "company4",
  "company5",
  "company6",
  "company7",
  "company8",
  "company9",
  "company10",

];

const BrandThree = () => {
  return (
    <>
      {BrandImages.map((val, i) => (
        <div
          className="logo d-flex align-items-center justify-content-center"
          key={i}
        >
          <img src={`/njsw36/images/logo/${val}.png`} alt="logo" />
        </div>
      ))}
    </>
  );
};

export default BrandThree;
