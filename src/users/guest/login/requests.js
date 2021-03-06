import { setUserSession } from "../../../utils/session";
import { SERVER_ADDRESS } from "../../../utils/config";
import fetchMock from "fetch-mock";
import {
  PROGRAM_MANAGER,
  MENTOR,
  COMPANY_REPRESENTATIVE,
  INTERN,
  SYSTEM_MANAGER,
  ADVANCED_CANDIDATE,
} from "../../../utils/constants";

export const loginRequest = (
  setError,
  username,
  password,
  setUserType,
  setFirstName,
  setProgramId,
  setUsername,
  history
) => {
  const data = {
    username: username,
    password: password,
  };
  fetch(SERVER_ADDRESS + "/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(data),
  }).then((response) =>
    response
      .json()
      .then((data) => {
        if (response.status === 200) {
          setUserType(data.userType);
          setUserSession(data.session, data.username);
          setFirstName(data.firstName);
          setUsername(data.username);
          if (data.program) {
            setProgramId(data.program);
          }
          history.push("/njsw36/");
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        setError(true);
      })
  );
};

const data = {
  userType: PROGRAM_MANAGER,
  session: 2,
  username: "user",
  firstName: "יובל",
  program: "starship",
};
fetchMock.mock(SERVER_ADDRESS + "/users/login", data);
