import React, { useEffect, useState } from "react";
import tableIcons from "../../../components/MaterialTableIcons";
import { getStudentsRequest } from "./requests";
import MaterialTable from "material-table";

const Interns = ({ username }) => {
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
    <div className="font-rubik container nav-container mt-35">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>מתמחים</h2>
        <img src="/njsw36/static/images/shape/line-shape-3.svg" alt="shape" />
      </div>
      <MaterialTable
        pageSize={30}
        data={students}
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
          rowStyle: (rowData) => ({
            backgroundColor:
              selectedRow === rowData.tableData.id ? "#EEE" : "#FFF",
            textAlign: "center",
          }),
        }}
        // onRowClick={(evt, selectedRow) =>
        //   setSelectedRow(selectedRow.tableData.id)
        // }
      />
    </div>
  );
};

export default Interns;
