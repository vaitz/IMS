import { SERVER_ADDRESS } from "../../../utils/config";
import fetchMock from "fetch-mock";

export const getPrograms = (setPrograms) => {
  fetch(SERVER_ADDRESS + `/admin/programs`, {
    method: "Get",
    mode: "cors",
  }).then((response) =>
    response
      .json()
      .then((data) => {
        const formattedData = data.map((program) => ({
          ...program,
          managerName:
            program.programManager_first_name +
            " " +
            program.programManager_last_name,
          activeProgram: program.active ? "כן" : "לא",
        }));
        setPrograms(formattedData);
      })
      .catch((error) => {
        console.log("error");
      })
  );
};

const data = [
  {
    program: "starship",
    year: "2022",
    semester: "א",
    prioritiesAmount: 2,
    hoursRequired: 2,
    department: "מערכות מידע",
    programManager_first_name: "ארנון",
    programManager_last_name: "סטורם",
    active: true,
  },
  {
    program: "פסיכולוגיה",
    year: "2020",
    semester: "א",
    prioritiesAmount: 2,
    hoursRequired: 2,
    department: "מערכות מידע",
    programManager_first_name: "טל",
    programManager_last_name: "בשן",
    active: false,
  },
  {
    program: "starship",
    year: "2022",
    semester: "ב",
    prioritiesAmount: 3,
    hoursRequired: 30,
    department: "מערכות מידע",
    programManager_first_name: "ארנון",
    programManager_last_name: "סטורם",
    active: true,
  },
  {
    program: "פסיכולוגיה",
    year: "2020",
    semester: "ב",
    prioritiesAmount: 2,
    hoursRequired: 2,
    department: "מערכות מידע",
    programManager_first_name: "טל",
    programManager_last_name: "בשן",
    active: false,
  },
  {
    program: "רפואה",
    year: "2020",
    semester: "א",
    prioritiesAmount: 3,
    hoursRequired: 22,
    department: "מערכות מידע",
    programManager_first_name: "טל",
    programManager_last_name: "בשן",
    active: false,
  },
];
fetchMock.mock(SERVER_ADDRESS + "/admin/programs", data);
