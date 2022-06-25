import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import { createInternship, getCompanies, getMentors } from "./requests";
import PopUp from "../../../components/popup";
import { getPrograms } from "../../company_representive/create_intership/requests";
import { useHistory } from "react-router-dom";

const Dropdown = styled(Select)`
  width: 500px;
  height: 20px;
  margin-bottom: 20px;
`;
const Label = styled.text`
  font-size: 18px;
  color: #666666;
  margin-top: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  padding-top: 40px;
`;

const Input = styled.input`
  width: 500px;
  height: 40px;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  margin: 20px 0 40px;
  background: #7a5cfa;
  color: #ffffff;
`;

const CreateInternship = () => {
  const [program, setProgram] = useState("");
  const [company, setCompany] = useState("");
  const [mentor, setMentor] = useState("");
  const [internshipName, setInternshipName] = useState("");
  const [internshipDescription, setInternshipDescription] = useState("");
  const [demands, setDemands] = useState("");
  const [popup, setPopup] = useState(false);
  const [programs, setPrograms] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [error, setError] = useState(null);
  let history = useHistory();

  useEffect(() => {
    getPrograms({ setPrograms, formatPrograms: format });
    getCompanies({ setCompanies, formatCampaigns: format });
  }, []);

  const format = (programs) =>
    programs.map((option, index) => ({ value: index, label: option }));

  useEffect(() => {
    if (company) {
      getMentors({ setMentors, company });
    }
  }, [company]);

  const onSubmit = () => {
    createInternship(
      setPopup,
      setError,
      company,
      internshipName,
      internshipDescription,
      demands,
      program,
      mentor
    );
  };

  return (
    <Container className="font-rubik">
      {popup && (
        <PopUp trigger={popup} setTrigger={() => history.push("/njsw36/")}>
          {`נוצרה ההתמחות:  "${internshipName}"  `}
        </PopUp>
      )}
      <h2>יצירת התמחות</h2>
      <Label>שם התוכנית</Label>
      <Dropdown
        value={program}
        onChange={setProgram}
        options={programs}
        placeholder={"בחר תוכנית"}
      />
      <Label>שם החברה</Label>
      <Dropdown
        value={company}
        onChange={setCompany}
        options={companies}
        placeholder={"בחר חברה"}
      />
      <Label>שם המנטור</Label>
      <Dropdown
        value={mentor}
        onChange={setMentor}
        options={mentors}
        placeholder={"בחר מנטור"}
      />
      <Label>שם ההתמחות</Label>
      <Input
        type="text"
        value={internshipName}
        onChange={(e) => setInternshipName(e.target.value)}
      />
      <Label>תיאור ההתמחות</Label>
      <textarea
        rows="4"
        cols="50"
        value={internshipDescription}
        onChange={(e) => setInternshipDescription(e.target.value)}
      />
      <Label>דרישות</Label>
      <textarea
        rows="4"
        cols="50"
        value={demands}
        onChange={(e) => setDemands(e.target.value)}
      />
      {error && (
        <>
          <small style={{ color: "red" }}>{error}</small>
          <br />
        </>
      )}
      <br />
      <Button
        onClick={() => onSubmit()}
        disabled={
          !(
            company &&
            internshipName &&
            internshipDescription &&
            demands &&
            program
          )
        }
      >
        צור התמחות
      </Button>
    </Container>
  );
};
export default CreateInternship;
