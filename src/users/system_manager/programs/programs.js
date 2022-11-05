import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPrograms } from "./requests";
import MaterialTable from "material-table";
import tableIcons from "../../../components/MaterialTableIcons";

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 20px;
`;

const Programs = () => {
  const [programs, setPrograms] = useState();

  useEffect(() => {
    getPrograms(setPrograms);
  }, []);

  const columns = [
    {
      title: "שם התוכנית",
      field: "program",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "שנה",
      field: "year",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "סמסטר",
      field: "semester",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "מספר עדיפויות לבחירה",
      field: "prioritiesAmount",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "שעות נדרשות",
      field: "hoursRequired",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "מחלקה",
      field: "department",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "מנהל תוכנית",
      field: "managerName",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "פעיל",
      field: "activeProgram",
      cellStyle: {
        textAlign: "center",
      },
    },
  ];

  return (
    <div className="font-rubik container nav-container mt-35">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>תוכניות קיימות</h2>
        <img src="/static/images/shape/line-shape-3.svg" alt="shape" />
      </div>
      <MaterialTable
        pageSize={30}
        data={programs}
        columns={columns}
        icons={tableIcons}
        options={{
          search: false,
          paging: false,
          pageSize: 10,
          headerStyle: {
            textAlign: "center",
            fontSize: "20px",
            fontFamily: "Rubik",
          },
          showTitle: false,
        }}
      />
    </div>
  );
};

export default Programs;
