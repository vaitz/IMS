import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MaterialTable from "material-table";
import tableIcons from "../assign_internships/MaterialTableIcons";
import { getStudentsRequest } from "./requests";

const Div = styled.div`
  height: auto;
  display: flex;
  background-color: #f7f8fc;
`;

const Students = ({ programId }) => {
  const [students, setStudents] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    {
      title: "שם פרטי",
      field: "firstName",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "שם משפחה",
      field: "lastName",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "מייל",
      field: "email",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "סטטוס",
      field: "status",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "התמחות",
      field: "internship",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "חברה",
      field: "company",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "שעות בהתמחות",
      field: "hours",
      cellStyle: {
        textAlign: "center",
      },
    },
  ];

  useEffect(() => {
    getStudentsRequest(setStudents, programId);
  }, []);

  return (
    <>
      <MaterialTable
        pageSize={30}
        title="סטודנטים"
        data={students}
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
          },
        }}
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
      />
    </>
  );
};

export default Students;
