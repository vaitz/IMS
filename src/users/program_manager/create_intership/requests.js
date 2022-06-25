import { SERVER_ADDRESS } from "../../../utils/config";

export const createInternship = (
  setPopup,
  setError,
  company,
  internshipName,
  internshipDescription,
  demands,
  program,
  mentor
) => {
  const data = {
    company: company,
    program: program,
    mentor: mentor,
    internshipName: internshipName,
    about: internshipDescription,
    requirements: demands,
  };
  const response = fetch(SERVER_ADDRESS + "/programManager/createInternship", {
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
      else if (response.status === 400)
        setError("שם ההתמחות קיים כבר במערכת, יש לבחור שם אחר");
      else if (response.status === 404)
        setError("החברה או התוכנית לא קיימים במערכת, נסו שוב");
      else setError("משהו השתבש, אנא נסה שנית מאוחר יותר");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getMentors = ({ setMentors, company }) => {
  fetch(SERVER_ADDRESS + `/mentors/${company.label}`, {
    method: "Get",
    mode: "cors",
  })
    .then((response) => {
      response.json().then((data) => {
        let names = data.map((mentor, index) => ({
          username: mentor.username,
          name: mentor.firstName + " " + mentor.lastName,
          label: mentor.firstName + " " + mentor.lastName,
          value: index,
        }));
        setMentors(names);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCompanies = ({ setCompanies, formatCampaigns }) => {
  fetch(SERVER_ADDRESS + `/companies`, {
    method: "Get",
    mode: "cors",
  })
    .then((response) => {
      response.json().then((data) => {
        setCompanies(formatCampaigns(data));
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

