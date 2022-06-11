import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import MaterialTable from "material-table";
import tableIcons from "../../program_manager/assign_internships/MaterialTableIcons";
import Button from "../../../button";
import { approveCandidates, getCandidates } from "./requests";
import { getPrograms } from "../../company_representive/create_intership/requests";
import Select from "react-select";

const Dropdown = styled(Select)`
  margin: 20px 0 60px;
  width: 300px;
`;

const Div = styled.div`
  height: auto;
  margin-top: 50px;
  display: flex;
`;

const ButtonWrapper = styled.div`
  margin: 150px 400px 200px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ApproveCandidate = ({ username, userType }) => {
  const [candidates, setCandidates] = useState([]);
  const [disableButton, setDisableButton] = useState(true);
  const [programs, setPrograms] = useState([{ value: 0, label: "test" }]);
  const [selectedProgram, setSelectedProgram] = useState();

  console.log(userType);
  useEffect(() => {
    getPrograms(setPrograms, formatPrograms);
  }, []);

  const formatPrograms = (programs) =>
    programs.map((option, index) => ({ value: index, label: option }));

  useEffect(() => {
    if (selectedProgram) {
      getCandidates(
        username,
        userType,
        selectedProgram,
        setCandidates,
        formatCandidates
      );
    }
  }, [selectedProgram]);

  const formatCandidates = (candidates) =>
    candidates.map((candidate, index) => ({
      ...candidate,
      checked: false,
      id: index,
    }));

  const columns = [
    {
      title: "שם פרטי",
      field: "first_name",
    },
    {
      title: "שם משפחה",
      field: "last_name",
    },
    {
      title: "שם ההתמחות",
      field: "internship_name",
    },
    {
      title: "עדיפות",
      field: "priority",
    },
    {
      title: "אישור המועמד",
      field: "assign",
      type: "boolean",
      render: (rowData) => (
        <>
          {!rowData.status_decision_by_company && (
            <input type="checkbox" onClick={() => handleOnChange(rowData.id)} />
          )}
        </>
      ),
    },
  ];

  const handleOnChange = (position) => {
    const updatedCheckedState = candidates.map((candidate, index) => {
      const newChecked =
        index === position ? !candidate.checked : candidate.checked;
      return { ...candidate, checked: newChecked };
    });
    setCandidates(updatedCheckedState);
    updatedCheckedState.map(({ checked }) => {
      if (checked) {
        setDisableButton(false);
      }
    });
  };

  const onClick = () => {
    approveCandidates(
      username,
      userType,
      selectedProgram,
      getApprovedCandidates(candidates)
    ).then(() =>
      getCandidates(
        username,
        userType,
        selectedProgram,
        setCandidates,
        formatCandidates
      )
    );
  };

  const getApprovedCandidates = (candidates) =>
    candidates
      .filter((candidate) => candidate.checked === true)
      .map((candidate) => ({
        username: candidate.username,
        internship_id: candidate.internship_id,
      }));

  return (
    <Container className="font-rubik">
      <h2>אישור מועמדים</h2>
      <img src="/njsw36/static/images/shape/line-shape-3.svg" alt="shape" />
      <Dropdown
        options={programs}
        value={selectedProgram}
        placeholder={"בחר תוכנית"}
        onChange={setSelectedProgram}
      />
      {selectedProgram && (
        <>
          <Div>
            <MaterialTable
              pageSize={30}
              title="מועמדים"
              data={candidates}
              columns={columns}
              icons={tableIcons}
              options={{
                search: false,
                paging: false,
                pageSize: 10,
                headerStyle: {
                  width: "200px",
                  textAlign: "center",
                },
                cellStyle: {
                  width: "200px",
                  textAlign: "center",
                },
              }}
            />
          </Div>
          <ButtonWrapper>
            <Button
              value={"אשר מתמחים"}
              disabled={disableButton}
              onClick={onClick}
            />
          </ButtonWrapper>
        </>
      )}
    </Container>
  );
};

export default ApproveCandidate;
