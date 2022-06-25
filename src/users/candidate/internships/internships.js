import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getInternships } from "./requests";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  //margin: 20px 0;
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
        <div
          className="block-style-twelve font-rubik"
          style={{ paddingTop: "10px", padding: "35px 0" }}
        >
          <Container>
            <h3>
              {internship.companyName}- {internship.internshipName}
            </h3>
            <p>{internship.about}</p>
            <h4>דרישות </h4>
            {internship.requirements}
          </Container>
        </div>
      ))
    );
  }, [internships]);

  return (
    <Container>
      <h2 className="font-rubik">התמחויות</h2>
      <img src="/njsw36/static/images/shape/line-shape-3.svg" alt="shape" />
      {showInternships}
    </Container>
  );
};

export default Internships;
