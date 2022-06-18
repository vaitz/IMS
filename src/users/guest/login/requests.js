import { setUserSession } from "../../../utils/common";
import { SERVER_ADDRESS } from "../../../config";
import fetchMock from "fetch-mock";
import {
  PROGRAM_MANAGER,
  MENTOR,
  COMPANY_REPRESENTATIVE,
  INTERN,
  SYSTEM_MANAGER,
  ADVANCED_CANDIDATE,
} from "../../../constants";

export const loginRequest = (
  setLoading,
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
  console.log(data);
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
          setLoading(false);
          setUserType(data.userType);
          setUserSession(data.session, data.username);
          setFirstName(data.firstName);
          setUsername(data.username);
          if (data.program) {
            setProgramId(data.program);
          }
          history.push("/njsw36/");
        } else {
          setError(`שם משתמש או סיסמא לא תקינים`);
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401)
          setError(error.response.data.message);
        else setError("משהו השתבש, אנא נסה שנית מאוחר יותר");
      })
  );
};

const data = {
  userType: SYSTEM_MANAGER,
  session: 2,
  username: "user",
  firstName: "יובל",
  program: "starship",
};
fetchMock.mock(SERVER_ADDRESS + "/users/login", data);
