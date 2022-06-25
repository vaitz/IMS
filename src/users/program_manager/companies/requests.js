import { SERVER_ADDRESS } from "../../../utils/config";
import fetchMock from "fetch-mock";

export const getCompanies = ({
  setCompanies,
  formatCompany,
  setSelectedCompany,
}) => {
  fetch(SERVER_ADDRESS + `/companies`, {
    method: "Get",
    mode: "cors",
  })
    .then((response) => {
      response.json().then((data) => {
        const formattedCompanies = formatCompany(data);
        setCompanies(formattedCompanies);
        setSelectedCompany(formattedCompanies[0]);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchMock.mock(SERVER_ADDRESS + "/companies", ["elbit", "meta"]);

export const getCompaniesDetails = ({
  selectedCompany,
  setSelectedCompanyData,
}) => {
  console.log(selectedCompany);
  fetch(SERVER_ADDRESS + `/company/${selectedCompany}`, {
    method: "Get",
    mode: "cors",
  })
    .then((response) => {
      response.json().then((data) => {
        console.log(data);
        setSelectedCompanyData(data);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchMock.mock(SERVER_ADDRESS + "/company/elbit", {
  companyName: "elbit",
  yearEstablish: "1992",
  workersAmount: 4000,
  location: "tel aviv",
  about: "about",
});

fetchMock.mock(SERVER_ADDRESS + "/company/meta", {
  companyName: "meta",
  yearEstablish: "2005",
  workersAmount: 3000,
  location: "tel aviv",
  about: "about",
});
