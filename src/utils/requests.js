import { SERVER_ADDRESS } from "./config";
import fetchMock from "fetch-mock";
import {
  STUDENT,
  ADVANCED_CANDIDATE,
  INTERN,
  COMPANY_REPRESENTATIVE,
  MENTOR,
  PROGRAM_MANAGER,
  PROGRAM_COORDINATOR,
  SYSTEM_MANAGER,
} from "./constants";

export const logoutRequest = (token) => {
  const data = { Authorization: token };
  console.log(data);
  fetch(SERVER_ADDRESS + `/users/logout`, {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => console.log(res));
};

export const getDetails = (
  username,
  setUserType,
  setFirstName,
  setProgramId
) => {
  const res = fetch(SERVER_ADDRESS + `/users/details/` + username, {
    method: "Get",
    mode: "cors",
  }).then((response) =>
    response.json().then((data) => {
      if (response.status === 200) {
        setUserType(data.userType);
        setFirstName(data.firstName);
        if (data.program) {
          setProgramId(data.program);
        }
      }
    })
  );
};

fetchMock.mock(SERVER_ADDRESS + `/users/logout`, { data: "" });
fetchMock.mock(SERVER_ADDRESS + `/users/details/user`, {
  status: 200,
  userType: MENTOR,
  firstName: "יובל",
  program: "123",
});
