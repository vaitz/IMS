import React, { useEffect, useState } from "react";
import { approvedHours, getInterns } from "./requests";
import Select from "react-select";
import styled from "styled-components";
import { getWorkingHours } from "./requests";
import Button from "../../../components/button";
import Popup from "../../../components/popup";

const Dropdown = styled(Select)`
  width: 500px;
  margin: 20px 0 100px;
`;
const Item = styled.div`
  width: auto;
  border-style: groove;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 5px;
`;

const HeaderWrapper = styled.div`
  margin-right: 35px;
`;

const StartTime = styled.div`
  margin-right: 78px;
`;

const EndTime = styled.div`
  margin-right: 59px;
`;

const DateTitle = styled.div`
  margin-right: 21px;
`;

const WorkingHours = styled.div`
  margin-right: 47px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  margin: 150px 400px 200px;
`;

const MarginDiv = styled.div`
  margin-right: 20px;
`;

const Width = styled.div`
  width: 1000px;
`;

const ApproveHours = ({ username }) => {
  const [interns, setInterns] = useState([]);
  const [selectedIntern, setSelectedIntern] = useState({});
  const [hours, setHours] = useState([]);
  const [showHours, setShowHours] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    getInterns(username, setInterns, formatInterns);
  }, []);

  useEffect(() => {
    if (selectedIntern.username) {
      getWorkingHours(selectedIntern.username, setHours, formatHours);
      setShowHours(true);
    }
  }, [selectedIntern]);

  const formatHours = (hours) =>
    hours.map((hour) => ({ ...hour, checked: false }));

  const formatInterns = (interns) => {
    return interns.map((intern, index) => ({
      ...intern,
      value: index,
      label: intern.first_name + " " + intern.last_name,
    }));
  };

  const handleOnChange = (position) => {
    const updatedCheckedState = hours.map((hour, index) => {
      const newChecked = index === position ? !hour.checked : hour.checked;
      return { ...hour, checked: newChecked };
    });
    setHours(updatedCheckedState);
    updatedCheckedState.map(({ checked }) => {
      if (checked) {
        setDisableButton(false);
      }
    });
  };

  const onApprove = () => {
    const hoursIds = hours
      .filter((hour) => hour.checked === true)
      .map(({ id }) => id);
    approvedHours(username, selectedIntern.username, hoursIds).then(() => {
      getWorkingHours(selectedIntern.username, setHours, formatHours);
      setPopUp(true);
    });
  };

  return (
    <Container className="font-rubik mt-35">
      <Popup trigger={popUp} setTrigger={() => setPopUp(false)}>
        השעות אושרו
      </Popup>
      <Width>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2>אישור דיווח שעות</h2>
          <img src="/njsw36/static/images/shape/line-shape-3.svg" alt="shape" />
          <div>בחר מתמחה</div>

          <Dropdown
            options={interns}
            value={selectedIntern}
            onChange={setSelectedIntern}
            placeholder={"בחר מתמחה"}
          />
        </div>
        {showHours && (
          <HeaderWrapper>
            <Row>
              <DateTitle>תאריך</DateTitle>
              <StartTime>שעת התחלה</StartTime>
              <EndTime>שעת סיום</EndTime>
              <WorkingHours>שעות עבודה</WorkingHours>
              <div>אושרו/מחכות לאישור</div>
            </Row>
          </HeaderWrapper>
        )}
        {hours.map(
          ({ date, startTime, endTime, totalTime, id, approved }, index) => (
            <Item>
              <div>{date}</div>
              <div>{startTime}</div>
              <div>{endTime}</div>
              <div>{totalTime}</div>
              {!approved ? (
                <input
                  id={id}
                  type={"checkbox"}
                  onClick={() => handleOnChange(index)}
                />
              ) : (
                <MarginDiv />
              )}
            </Item>
          )
        )}
        <ButtonWrapper>
          <Button
            value={"אישור"}
            onClick={onApprove}
            disabled={disableButton}
          />
        </ButtonWrapper>
      </Width>
    </Container>
  );
};

export default ApproveHours;
