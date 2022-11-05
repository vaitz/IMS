import React from "react";

const CompaniesImages = [
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
  "company11",
  "company12",
  "company13",
  "company14",
  "company15",
  "company16",
  "company17",
  "company18",
  "company19",
  "company20",
  "company21",
];

const Companies = () => {
  return (
    <>
      {CompaniesImages.map((val, i) => (
        <div
          className="companies d-flex align-items-center justify-content-center"
          key={i}
        >
          <img src={`/static/images/logo/${val}.png`} alt="logo" />
        </div>
      ))}
    </>
  );
};

export default Companies;
