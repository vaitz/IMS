import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tableIcons from "../../program_manager/assign_internships/MaterialTableIcons";
import { getStudentsRequest } from "./requests";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";

const Students = ({ username }) => {
  const [students, setStudents] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    {
      title: "שם פרטי",
      field: "first_name",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "שם משפחה",
      field: "last_name",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      title: "אימייל",
      field: "email",
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
  ];

  useEffect(() => {
    getStudentsRequest(setStudents, username);
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
          headerStyle: { position: "sticky", top: 0, textAlign: "center" },
          rowStyle: (rowData) => ({
            backgroundColor:
              selectedRow === rowData.tableData.id ? "#EEE" : "#FFF",
            textAlign: "center",
          }),
        }}
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
      />
    </>
  );
};

export default Students;
