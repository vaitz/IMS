import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PopUp from "../../../components/popup";
import { useHistory } from "react-router-dom";
import { createCompanyPage, getCompanyName, getCompanyData } from "./requests";

const Label = styled.text`
  font-size: 18px;
  color: #666666;
  margin-top: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const Input = styled.input`
  width: 500px;
  height: 40px;
`;

const Button = styled.button`
  width: 200px;
  height: 30px;
  background: #7a5cfa;
  color: #ffffff;
`;

const CompanyPage = ({ username }) => {
  const [companyName, setCompanyName] = useState("");
  const [employees, setEmployees] = useState("");
  const [location, setLocation] = useState("");
  const [yearEstablish, setYearEstablish] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [about, setAbout] = useState("");
  const [popup, setPopup] = useState(false);
  const [error, setError] = useState(null);
  let history = useHistory();

  useEffect(() => {
    getCompanyName(setCompanyName, username);
  }, []);

  useEffect(() => {
    if (companyName) {
      getCompanyData(
        companyName,
        setEmployees,
        setLocation,
        setYearEstablish,
        setLinkedinLink,
        setAbout
      );
    }
  }, [companyName]);

  const onSubmit = () => {
    createCompanyPage(
      setError,
      setPopup,
      companyName,
      employees,
      location,
      yearEstablish,
      about,
      linkedinLink
    );
  };

  return (
    <Container>
      <h2>דף חברה</h2>
      {popup && (
        <PopUp trigger={popup} setTrigger={() => history.push("/njsw36/")}>
          הדף נשמר בהצלחה
        </PopUp>
      )}
      <Label>שם החברה: {companyName}</Label>
      {/*<Input*/}
      {/*  type="text"*/}
      {/*  value={companyName}*/}
      {/*  onChange={(e) => setCompanyName(e.target.value)}*/}
      {/*/>*/}
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
      />{" "}
      <Label>לינק ללניקדאין</Label>
      <Input
        type="text"
        value={linkedinLink}
        onChange={(e) => setLinkedinLink(e.target.value)}
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
