import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import MaterialTable from "material-table";
import { assignIntern, getCompanies, getCompanyData } from "./requests";
import tableIcons from "../../../components/MaterialTableIcons";
import Button from "../../../components/button";
import Select from "react-select";

const Div = styled.div`
  width: 610px;
  height: auto;
  margin: 100px 0 50px;
`;
const BaseDropDown = styled(Select)`
  width: 300px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AssignInternships = ({ programId }) => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState({});
  const [companyData, setCompanyData] = useState();
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    getCompanies({
      setCompanies,
      programId,
      formatCompanies,
      setSelectedCompany,
    });
  }, []);

  useEffect(() => {
    if (selectedCompany.companyName) {
      getCompanyData(
        setCompanyData,
        selectedCompany.companyName,
        selectedCompany.internshipName,
        programId,
        setRow
      );
    }
  }, [selectedCompany]);

  const setRow = (data) => {
    for (let index = 0; index < data.length; index++) {
      if (data[index].assigned) setSelectedRow(data[index]);
    }
  };

  const formatCompanies = (data) =>
    data.map((company, index) => ({
      ...company,
      label: company.internshipName,
      value: index,
    }));

  const columns = [
    {
      title: "שם פרטי",
      field: "firstName",
      cellStyle: {
        textAlign: "center",
        width: "200px",
      },
    },
    {
      title: "שם משפחה",
      field: "lastName",
      cellStyle: {
        textAlign: "center",
        width: "200px",
      },
    },
    {
      title: "שבץ להתמחות",
      field: "assign",
      render: (rowData) => (
        <>
          <input
            type="radio"
            checked={rowData?.tableData.id === selectedRow?.tableData.id}
          />
        </>
      ),
      cellStyle: {
        textAlign: "center",
        width: "200px",
      },
    },
  ];

  const onClick = () => {
    assignIntern(selectedCompany, selectedRow);
    getCompanies({
      setCompanies,
      programId,
      formatCompanies,
      setSelectedCompany,
    });
    setSelectedRow(null);
  };

  return (
    <Container className="font-rubik text-center">
      <span>
        <h2>שיבוץ התמחויות</h2>
        <img src="/njsw36/static/images/shape/line-shape-3.svg" alt="shape" />
      </span>
      <p>בחר התמחות לשיבוץ:</p>
      <BaseDropDown
        options={companies}
        placeholder={"בחר חברה"}
        value={selectedCompany}
        onChange={(company) => setSelectedCompany(company)}
      />
      <Div>
        <MaterialTable
          pageSize={30}
          title="מועמדים"
          data={companyData}
          columns={columns}
          icons={tableIcons}
          options={{
            search: false,
            paging: false,
            pageSize: 10,
            rowStyle: (rowData) => ({
              backgroundColor:
                selectedRow === rowData.tableData.id ? "#EEE" : "#FFF",
            }),
            headerStyle: {
              textAlign: "center",
              fontSize: "20px",
              fontFamily: "Rubik",
            },
            showTitle: false,
          }}
          onRowClick={(evt, selectedRow) => setSelectedRow(selectedRow)}
        />
      </Div>
      <Button value={"שבץ להתמחות"} onClick={onClick} disabled={!selectedRow} />
    </Container>
  );
};
