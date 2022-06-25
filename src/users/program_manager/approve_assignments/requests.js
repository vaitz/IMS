import { SERVER_ADDRESS } from "../../../utils/config";
import fetchMock from "fetch-mock";

export const approveAssignments = ({ programId, history, username }) => {
  const data = {
    program: programId,
    username: username,
  };
  return fetch(SERVER_ADDRESS + "/programManager/approveAssign", {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status === 200) {
      history.push("/njsw36/");
    }
  });
};

fetchMock.mock(SERVER_ADDRESS + "/programManager/approveAssign", {
  status: 200,
});
