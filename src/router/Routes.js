import React from "react";

// FEATURES DROPDOWN ALL ROUTES
import Login from "../views/inner-pages/features/miscellaneous/Login";
import SignUp from "../views/inner-pages/features/miscellaneous/SignUp";

// Not Found Page
import NotFound from "../views/NotFound";

// Route Specific
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import ChangePass from "../users/common/changePass/changePass";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Header from "../components/header/Header";
import Home from "../users/common/home/home";
import Internships from "../users/candidate/internships/internships";
import InternshipsPriorities from "../users/candidate/internships_priorities/internships_priorities";
import ReportHours from "../users/intern/report_hours/report_hours";
import UploadReport from "../users/intern/upload_report/upload_report";
import ApproveMentorCandidates from "../users/mentor/approve_candidates";
import Students from "../users/mentor/interns/students";
import ApproveHours from "../users/mentor/approve_hours/approve_hours";
import UploadReportMentor from "../users/mentor/upload_report/upload_report";
import CompanyPage from "../users/company_representive/company_page/comapany_page";
import CreateInternshipCom from "../users/company_representive/create_intership/create_internship";
import ApproveCompanyRepCandidates from "../users/company_representive/approve_candidates";
import { AssignInternships } from "../users/program_manager/assign_internships/assign_internships";
import Programs from "../users/system_manager/programs/programs";
import CreateProgram from "../users/system_manager/create_program/create_program";
import CreateInternship from "../users/program_manager/create_intership/create_internship";
import Companies from "../users/program_manager/companies/companies";

const Routes = (props) => {
  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>תוכנית ההתמחות להייטק</title>
      </Helmet>
      <Router>
        <Header {...props} />
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/njsw36/companies" component={Companies} />
          //common
          <Route exact path="/njsw36/" component={Home} />
          <Route path="/njsw36/changePass">
            <ChangePass username={props.username} />
          </Route>
          //guest
          <Route path="/njsw36/login">
            <Login
              setUserType={props.setUserType}
              setFirstName={props.setFirstName}
              setProgramId={props.setProgramId}
              setUsername={props.setUsername}
            />
          </Route>
          <Route path="/njsw36/SignUp" component={SignUp} />
          // Advanced candidate
          <Route path="/njsw36/internships">
            <Internships program={props.programId} />
          </Route>
          <Route path="/njsw36/internshipsPriorities">
            <InternshipsPriorities
              program={props.programId}
              username={props.username}
            />
          </Route>
          // Intern
          <Route path="/njsw36/reportHours">
            <ReportHours username={props.username} />
          </Route>
          <Route path="/njsw36/uploadReport">
            <UploadReport username={props.username} />
          </Route>
          //Mentor
          <Route path="/njsw36/approveMentorCandidates">
            <ApproveMentorCandidates username={props.username} />
          </Route>
          <Route path="/njsw36/mentor/interns">
            <Students username={props.username} />
          </Route>
          <Route path="/njsw36/mentor/approveHours">
            <ApproveHours username={props.username} />
          </Route>
          <Route path="/njsw36/uploadReportMentor">
            <UploadReportMentor username={props.username} />
          </Route>
          // COMPANY_REPRESENTATIVE
          <Route path="/njsw36/CompanyPage">
            <CompanyPage username={props.username} />
          </Route>
          <Route path="/njsw36/createInternship/company">
            <CreateInternshipCom username={props.username} />
          </Route>
          <Route path="/njsw36/approveCompanyRepCandidates">
            <ApproveCompanyRepCandidates username={props.username} />
          </Route>
          //Program manager
          <Route path="/njsw36/students">
            <Students username={props.username} />
          </Route>
          <Route path="/njsw36/assignInternships">
            <AssignInternships programId={props.programId} />
          </Route>
          <Route
            path="/njsw36/createInternship/manager"
            component={CreateInternship}
          />
          //System manager
          <Route path="/njsw36/programs">
            <Programs />
          </Route>
          <Route path="/njsw36/createProgram" component={CreateProgram} />
          // Not found
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
