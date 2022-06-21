import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import { getCompanies, getCompaniesDetails } from "./requests";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
`;

const Dropdown = styled(Select)`
  margin: 20px 0 100px;
  width: 200px;
`;

const Row = styled.div`
  flex-direction: row;
  display: flex;
`;

const Col = styled.div`
  flex-direction: column;
  margin-left: 100px;
`;

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState({});
  const [selectedCompanyData, setSelectedCompanyData] = useState({});

  useEffect(() => {
    getCompanies({ setCompanies, formatCompany, setSelectedCompany });
  }, []);

  console.log(selectedCompany);
  console.log(selectedCompanyData);

  useEffect(() => {
    if (selectedCompany.label) {
      getCompaniesDetails({
        selectedCompany: selectedCompany.label,
        setSelectedCompanyData,
      });
    }
  }, [selectedCompany]);

  const formatCompany = (companies) =>
    companies.map((company, index) => ({ label: company, value: index }));

  return (
    <Container className="font-rubik">
      <div className="position">בחר חברה</div>
      <Dropdown
        options={companies}
        value={selectedCompany}
        onChange={setSelectedCompany}
        placeholder={"בחר חברה"}
      />

      {selectedCompany && (
        <Row>
          <Col>
            <h6 className="font-gilroy-bold">שם החברה</h6>
            <p className="pb-45">{selectedCompanyData.companyName}</p>
          </Col>
          <Col>
            <h6 className="font-gilroy-bold">שנת הקמה</h6>
            <p className="pb-45">{selectedCompanyData.yearEstablish}</p>
          </Col>
          <Col>
            <h6 className="font-gilroy-bold">כמות עובדים</h6>
            <p className="pb-45">{selectedCompanyData.workersAmount}</p>
          </Col>
          <Col>
            <h6 className="font-gilroy-bold">מיקום</h6>
            <p className="pb-45">{selectedCompanyData.location}</p>
          </Col>
          <Col>
            <h6 className="font-gilroy-bold">מידע נוסף</h6>
            <p className="pb-45">{selectedCompanyData.about}</p>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Companies;
