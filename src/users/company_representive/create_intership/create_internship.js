import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createInternship, getMentors, getPrograms } from "./requests";
import PopUp from "../../../components/popup";
import { useHistory } from "react-router-dom";
import Select from "react-select";

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
`;

const Input = styled.input`
  width: 500px;
  height: 40px;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  margin-top: 20px;
  background: #7a5cfa;
  color: #ffffff;
`;

const CreateInternshipCom = ({ username }) => {
  const [mentor, setMentor] = useState("");
  const [program, setProgram] = useState("");
  const [internshipName, setInternshipName] = useState("");
  const [internshipDescription, setInternshipDescription] = useState("");
  const [demands, setDemands] = useState("");
  const [popup, setPopup] = useState(false);
  const [programs, setPrograms] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [error, setError] = useState(null);
  let history = useHistory();

  useEffect(() => {
    getPrograms({ setPrograms, formatPrograms });
    getMentors(setMentors, username);
  }, []);

  const formatPrograms = (programs) =>
    programs.map((option, index) => ({ value: index, label: option }));

  const onSubmit = () => {
    createInternship(
      setPopup,
      setError,
      program,
      internshipName,
      internshipDescription,
      demands,
      username,
      mentor
    );
  };

  return (
    <Container className="font-rubik mt-35">
      <h2>יצירת התמחות</h2>
      <img src="/njsw36/static/images/shape/line-shape-3.svg" alt="shape" />
      {popup && (
        <PopUp trigger={popup} setTrigger={() => history.push("/njsw36/")}>
          {`נוצרה ההתמחות:  "${internshipName}"  `}
        </PopUp>
      )}
      <Label>שם התוכנית</Label>
      <Dropdown
        value={program}
        onChange={setProgram}
        options={programs}
        menuPosition={"fixed"}
        placeholder={"בחר תוכנית"}
      />
      <Label>שם המנטור\ית</Label>
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
      <Input
        type="text"
        value={internshipDescription}
        onChange={(e) => setInternshipDescription(e.target.value)}
      />
      <Label>דרישות</Label>
      <Input
        type="text"
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
          !(program && internshipName && internshipDescription && demands)
        }
      >
        צור התמחות
      </Button>
    </Container>
  );
};
export default CreateInternshipCom;
