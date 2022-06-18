import fetchMock from "fetch-mock";
import { SERVER_ADDRESS } from "../../../config";

export const getCompanies = ({
  setCompanies,
  programId,
  formatCompanies,
  setSelectedCompany,
}) => {
  fetch(SERVER_ADDRESS + `/internships/${programId}`, {
    method: "Get",
    mode: "cors",
  }).then((response) =>
    response
      .json()
      .then((data) => {
        const formattedCompanies = formatCompanies(data);
        setCompanies(formattedCompanies);
        setSelectedCompany(formattedCompanies[0]);
      })
      .catch((error) => {
        console.log("error");
      })
  );
};

const data = [
  {
    companyName: "google",
    internshipName: "Fullstack",
    about: "blabla",
    requirements: "requirements",
  },
  {
    companyName: "apple",
    internshipName: "two",
    about: "blabla",
    requirements: "requirements",
  },
];
fetchMock.mock(SERVER_ADDRESS + "/internships/starship", data);

export const getCompanyData = (
  setCompanyData,
  companyName,
  internshipName,
  program,
  setRow
) => {
  fetch(
    SERVER_ADDRESS +
      `/programManager/${program}/${companyName}/${internshipName}/nominees`,
    {
      method: "Get",
      mode: "cors",
    }
  ).then((response) =>
    response
      .json()
      .then((data) => {
        setCompanyData(data);
        setRow(data);
      })
      .catch((error) => {
        console.log("getCompany", "error");
      })
  );
};

const studentsNames1 = [
  { username: "hay", firstName: "חי", lastName: "מתתיהו", assigned: false },
  { username: "hay", firstName: "מאי", lastName: "וייץ", assigned: true },
  { username: "hay", firstName: "לי ג'ו", lastName: "ברק", assigned: false },
  { username: "hay", firstName: "יובל", lastName: "מור יוסף", assigned: false },
];

fetchMock.mock(
  SERVER_ADDRESS + "/programManager/starship/google/Fullstack/nominees",
  studentsNames1
);
// fetchMock.mock(SERVER_ADDRESS+'/programManager/123/apple/two/nominees', studentsNames2);

export const assignIntern = (company, student) => {
  const data = {
    companyName: company.companyName,
    internshipName: company.internshipName,
    username: student.username,
  };
  fetch(SERVER_ADDRESS + `/assignIntern`, {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => console.log(response));
};

fetchMock.mock(SERVER_ADDRESS + "/assignIntern", { status: 200 });
