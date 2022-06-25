import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getInternships } from "./requests";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const Internships = ({ program }) => {
  const [internships, setInternships] = useState([]);
  const [showInternships, setShowInternships] = useState([]);

  useEffect(() => {
    getInternships(program, setInternships);
  }, []);

  useEffect(() => {
    setShowInternships(
      internships.map((internship) => (
        <Container>
          <h3>
            {internship.companyName}- {internship.internshipName}
          </h3>
          <p>{internship.about}</p>
          <h4>דרישות </h4>
          {internship.requirements}
        </Container>
      ))
    );
  }, [internships]);

  return (
    <Container>
      <h2>התמחויות</h2>
      {showInternships}
    </Container>
  );
};

export default Internships;
