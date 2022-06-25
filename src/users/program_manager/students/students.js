import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import tableIcons from "../../../components/MaterialTableIcons";
import { getStudentsRequest } from "./requests";

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
    <div className="font-rubik container nav-container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>סטודנטים</h2>
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
        // onRowClick={(evt, selectedRow) =>
        //   setSelectedRow(selectedRow.tableData.id)
        // }
      />
    </div>
  );
};

export default Students;
