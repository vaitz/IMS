import { SERVER_ADDRESS } from "../../../utils/config";
import fetchMock from "fetch-mock";

export const sendFile = (username, report, intern, setSubmitted) => {
  return fetch(
    SERVER_ADDRESS + `/mentor/${username}/uploadReport/${intern.username}`,
    {
      method: "POST",
      mode: "cors",
      body: report,
    }
  ).then((response) => {
    console.log(response);
    if (response.status === 200) {
      setSubmitted(true);
    }
  });
};

fetchMock.mock(SERVER_ADDRESS + "/mentor/user/uploadReport/hay", {
  status: 200,
});
