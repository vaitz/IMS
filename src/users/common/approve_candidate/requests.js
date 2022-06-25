import { SERVER_ADDRESS } from "../../../utils/config";
import fetchMock from "fetch-mock";

export const getCandidates = (
  username,
  userType,
  program,
  setCandidates,
  formatCandidates
) => {
  fetch(
    SERVER_ADDRESS + `/${userType}/${username}/candidates/${program.label}`,
    {
      method: "Get",
      mode: "cors",
    }
  ).then((response) =>
    response
      .json()
      .then((data) => {
        setCandidates(formatCandidates(data));
      })
      .catch((error) => {
        console.log("error");
      })
  );
};

const data = [
  {
    username: "haymatit",
    first_name: "חי",
    last_name: "מתתיהו",
    internship_id: "2030",
    internship_name: "google-1",
    priority: 1,
    status_decision_by_company: false,
  },
  {
    username: "mayvaitz",
    first_name: "מאי",
    last_name: "וייץ",
    internship_id: "2020",
    internship_name: "facebook-1",
    priority: 1,
    status_decision_by_company: false,
  },
  {
    username: "yuvalmor",
    first_name: "יובל",
    last_name: "מור יוסף",
    internship_id: "2031",
    internship_name: "elbit-2",
    priority: 2,
    status_decision_by_company: true,
  },
];

const data2 = [
  {
    username: "haymatit",
    first_name: "חי",
    last_name: "מתתיהו",
    internship_id: "2030",
    internship_name: "google-1",
    priority: 1,
  },
];
fetchMock.mock(SERVER_ADDRESS + "/mentor/user/candidates/starship", data);
fetchMock.mock(SERVER_ADDRESS + "/mentor/user/candidates/psyco", data2);
fetchMock.mock(SERVER_ADDRESS + "/companyRep/user/candidates/starship", data);
fetchMock.mock(SERVER_ADDRESS + "/companyRep/user/candidates/psyco", data2);

export const approveCandidates = (username, userType, program, approved) => {
  const data = {
    username: username,
    program: program.label,
    approved: approved,
  };

  return fetch(SERVER_ADDRESS + `/${userType}/setStatus`, {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => console.log(response));
};

fetchMock.mock(SERVER_ADDRESS + "/mentor/setStatus", { status: 200 });
fetchMock.mock(SERVER_ADDRESS + "/companyRep/setStatus", { status: 200 });
