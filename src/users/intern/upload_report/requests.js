import { SERVER_ADDRESS } from "../../../utils/config";

export const sendFile = (username, report, setSubmitted) => {
  return fetch(SERVER_ADDRESS + `/intern/uploadReport/${username}`, {
    method: "POST",
    mode: "cors",
    body: report,
  }).then((response) => {
    console.log(response);
    if (response.status === 200) {
      setSubmitted(true);
    }
  });
};
