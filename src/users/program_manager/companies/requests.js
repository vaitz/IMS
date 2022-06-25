import { SERVER_ADDRESS } from "../../../utils/config";

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
