import { SERVER_ADDRESS } from "../../../config";
import fetchMock from "fetch-mock";

export const createCompanyPage = (
  setError,
  setPopup,
  companyName,
  employees,
  location,
  yearEstablish,
  about
) => {
  const data = {
    companyName: companyName,
    employees: employees,
    location: location,
    yearEstablish: yearEstablish,
    about: about,
  };
  const response = fetch(SERVER_ADDRESS + "/companyRep/createCompanyProfile", {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log(response);
      if (response.status === 201) setPopup(true);
      else setError("משהו השתבש, אנא נסה שנית מאוחר יותר");
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchMock.mock(SERVER_ADDRESS + "/companyRep/createCompanyProfile", {
  status: 201,
});
