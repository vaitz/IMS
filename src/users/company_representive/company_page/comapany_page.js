import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PopUp from "../../../popup";
import { createInternship } from "../../program_manager/create_intership/requests";
import { useHistory } from "react-router-dom";
import { createCompanyPage } from "./requests";

const Label = styled.text`
  font-size: 18px;
  color: #666666;
  margin-top: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 500px;
  height: 20px;
`;

const Button = styled.button`
  width: auto;
  height: 30px;
  margin: 150px 300px 200px;
  background: #7a5cfa;
  color: #ffffff;
`;

const CompanyPage = () => {
  const [companyName, setCompanyName] = useState("");
  const [employees, setEmployees] = useState("");
  const [location, setLocation] = useState("");
  const [yearEstablish, setYearEstablish] = useState("");
  const [about, setAbout] = useState("");
  const [popup, setPopup] = useState(false);
  const [error, setError] = useState(null);
  let history = useHistory();

  // useEffect(() => {
  //     companyData()
  // }, [])

  const onSubmit = () => {
    createCompanyPage(
      setError,
      setPopup,
      companyName,
      employees,
      location,
      yearEstablish,
      about
    );
  };

  return (
    <Container>
      {popup && (
        <PopUp trigger={popup} setTrigger={() => history.push("/njsw36/")}>
          הדף נשמר בהצלחה
        </PopUp>
      )}
      <Label>שם החברה</Label>
      <Input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <Label>מספר עובדים</Label>
      <Input
        type="text"
        value={employees}
        onChange={(e) => setEmployees(e.target.value)}
      />
      <Label>מיקום</Label>
      <Input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Label>שנת הקמה</Label>
      <Input
        type="text"
        value={yearEstablish}
        onChange={(e) => setYearEstablish(e.target.value)}
      />
      <Label>אודות</Label>
      <textarea
        rows="4"
        cols="50"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
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
          !(companyName && employees && location && yearEstablish && about)
        }
      >
        שמור
      </Button>
    </Container>
  );
};
export default CompanyPage;
