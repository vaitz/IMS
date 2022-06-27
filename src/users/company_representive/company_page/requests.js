import { SERVER_ADDRESS } from "../../../utils/config";
import fetchMock from "fetch-mock";

export const createCompanyPage = (
  setError,
  setPopup,
  companyName,
  employees,
  location,
  yearEstablish,
  about,
  linkedinLink
) => {
  const data = {
    companyName: companyName,
    workersAmount: employees,
    location: location,
    yearEstablish: yearEstablish,
    about: about,
    linkedinLink: linkedinLink,
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
      if (response.status === 201 || response.status === 200) setPopup(true);
      else setError("משהו השתבש, אנא נסה שנית מאוחר יותר");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCompanyName = (setCompanyName, username) => {
  fetch(SERVER_ADDRESS + `/companyRep/${username}/companyName`, {
    method: "Get",
    mode: "cors",
  })
    .then((response) => {
      response.json().then((data) => {
        console.log(data);
        setCompanyName(data.data);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCompanyData = (
  companyName,
  setEmployees,
  setLocation,
  setYearEstablish,
  setLinkedinLink,
  setAbout
) => {
  fetch(SERVER_ADDRESS + `/company/${companyName}`, {
    method: "Get",
    mode: "cors",
  })
    .then((response) => {
      response.json().then((data) => {
        setEmployees(data.workersAmount);
        setLocation(data.location);
        setYearEstablish(data.yearEstablish);
        setAbout(data.about);
        setLinkedinLink(data.linkedinLink);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchMock.mock(SERVER_ADDRESS + "/companyRep/createCompanyProfile", {
  status: 201,
});

fetchMock.mock(SERVER_ADDRESS + "/companyRep/user/companyName", {
  data: "company1",
});

fetchMock.mock(SERVER_ADDRESS + "/company/company1", {
  companyName: "companyName",
  workersAmount: "100",
  location: "bs",
  yearEstablish: "1990",
  about: "dscdscsdc",
  linkedinLink: "link",
});
