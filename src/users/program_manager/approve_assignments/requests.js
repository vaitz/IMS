import { SERVER_ADDRESS } from "../../../config";

export const approveAssignments = ({ programId, history }) => {
  const data = {
    program: programId,
    status: true,
  };
  return fetch(SERVER_ADDRESS + "/programManager/updateProgramStatus", {
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
