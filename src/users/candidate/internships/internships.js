import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getInternships } from "./requests";

const Internships = ({ program }) => {
  const [internships, setInternships] = useState([]);
  const [showInternships, setShowInternships] = useState([]);

  useEffect(() => {
    getInternships(program, setInternships);
  }, []);

  useEffect(() => {
    setShowInternships(
      internships.map((internship) => (
        <div>
          <h2>
            {internship.companyName}- {internship.internshipName}
          </h2>
          <p>{internship.about}</p>
          <p>
            <h4>דרישות: </h4>
            {internship.requirements}
          </p>
        </div>
      ))
    );
  }, [internships]);

  return (
    <div>
      <div>
        <h1>התמחויות</h1>
        {showInternships}
      </div>
    </div>
  );
};

export default Internships;
