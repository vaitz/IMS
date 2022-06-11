import React, { useEffect, useState } from "react";
import { getInternships, sendInternshipsToServer } from "./requests";
import Button from "../../../button";
import styled from "styled-components";
import Select from "react-select";
import PopUp from "../../../popup";
import { useHistory } from "react-router-dom";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px;
`;
const Dropdown = styled(Select)`
  width: 300px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 260px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Title = styled.div`
  margin: 10px 0;
`;

const InternshipsPriorities = ({ username, program }) => {
  const [error, setError] = useState(null);
  const [options, setOptions] = useState([]);
  const [select1, setSelect1] = useState({});
  const [select2, setSelect2] = useState({});
  const [select3, setSelect3] = useState({});
  const [popup, setPopup] = useState(false);
  let history = useHistory();

  const handleChange1 = (selected) => {
    console.log(selected);
    setSelect1(selected);
  };

  const handleChange2 = (selected) => {
    console.log(selected);
    setSelect2(selected);
  };

  const handleChange3 = (selected) => {
    console.log(selected);
    setSelect3(selected);
  };

  useEffect(() => {
    getInternships(program, setOptions);
  }, []);

  const handleClick = () => {
    setError(null);
    const selected = [select1, select2, select3];
    const unique = selected.filter((q, idx) => selected.indexOf(q) === idx);

    if (selected.length !== unique.length) {
      setError(`אי אפשר לבחור התמחות כמה פעמים, נא לבחור התמחויות שונות`);
    } else {
      const selectedObj = selected.map((obj) => ({
        companyName: obj.object.companyName,
        internshipName: obj.object.internshipName,
      }));
      console.log(selectedObj);
      sendInternshipsToServer(username, selectedObj);
      setPopup(true);
    }
  };

  return (
    <Container className="font-rubik">
      <Row>
        {popup && (
          <PopUp trigger={popup} setTrigger={() => history.push("/njsw36/")}>
            {"בחירת התמחויות לפי סדר עדיפויות בוצע בהצלחה!"}
          </PopUp>
        )}
        <Column>
          <h1>בחירת עדיפויות</h1>
          <img src="/njsw36/static/images/shape/line-shape-3.svg" alt="shape" />
          <Title>
            נא לבחור את ההתמחויות לפי סדר עדיפות (יש חשיבות לסדר בחירה)
          </Title>

          <Title> עדיפות 1-</Title>
          <Dropdown
            options={options}
            value={select1}
            onChange={handleChange1}
            placeholder={"בחר התמחות"}
            width="200px"
            height="100px"
          />

          <Title> עדיפות 2-</Title>
          <Dropdown
            options={options}
            value={select2}
            onChange={handleChange2}
            placeholder={"בחר התמחות"}
            width="200px"
            height="100px"
          />

          <Title> עדיפות 3-</Title>
          <Dropdown
            options={options}
            value={select3}
            onChange={handleChange3}
            placeholder={"בחר התמחות"}
            width="200px"
            height="100px"
          />

          {error && (
            <>
              <small style={{ color: "red" }}>{error}</small>
            </>
          )}
          <ButtonWrapper>
            <Button value={"שלח עדיפויות"} onClick={handleClick} />
          </ButtonWrapper>
        </Column>
        <img src={"/njsw36/static/images/assets/ils_03.svg"} />
      </Row>
    </Container>
  );
};

export default InternshipsPriorities;
