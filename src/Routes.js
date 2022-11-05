import React from "react";

// Route Specific
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./users/guest/login/Login";
import SignUp from "./users/guest/register/SignUp";
import ScrollTopBehaviour from "./components/ScrollTopBehaviour";
import ChangePass from "./users/common/changePass/changePass";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Home from "./users/common/home/home";
import Internships from "./users/candidate/internships/internships";
import InternshipsPriorities from "./users/candidate/internships_priorities/internships_priorities";
import ReportHours from "./users/intern/report_hours/report_hours";
import UploadReport from "./users/intern/upload_report/upload_report";
import ApproveMentorCandidates from "./users/mentor/approve_candidates";
import ApproveHours from "./users/mentor/approve_hours/approve_hours";
import UploadReportMentor from "./users/mentor/upload_report/upload_report";
import CompanyPage from "./users/company_representive/company_page/comapany_page";
import CreateInternshipCom from "./users/company_representive/create_intership/create_internship";
import ApproveCompanyRepCandidates from "./users/company_representive/approve_candidates";
import { AssignInternships } from "./users/program_manager/assign_internships/assign_internships";
import Programs from "./users/system_manager/programs/programs";
import CreateProgram from "./users/system_manager/create_program/create_program";
import CreateInternship from "./users/program_manager/create_intership/create_internship";
import Companies from "./users/program_manager/companies/companies";
import ApproveAssignments from "./users/program_manager/approve_assignments/approve_assignments";
import Students from "./users/program_manager/students/students";
import Interns from "./users/mentor/interns/interns";
import NotFound from "./components/NotFound";

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
          <Route exact path="/companies" component={Companies} />
          //common
          <Route exact path="/" component={Home} />
          <Route path="/changePass">
            <ChangePass username={props.username} />
          </Route>
          //guest
          <Route path="/login">
            <Login
              setUserType={props.setUserType}
              setFirstName={props.setFirstName}
              setProgramId={props.setProgramId}
              setUsername={props.setUsername}
            />
          </Route>
          <Route path="/SignUp" component={SignUp} />
          // Advanced candidate
          <Route path="/internships">
            <Internships program={props.programId} />
          </Route>
          <Route path="/internshipsPriorities">
            <InternshipsPriorities
              program={props.programId}
              username={props.username}
            />
          </Route>
          // Intern
          <Route path="/reportHours">
            <ReportHours username={props.username} />
          </Route>
          <Route path="/uploadReport">
            <UploadReport username={props.username} />
          </Route>
          //Mentor
          <Route path="/approveMentorCandidates">
            <ApproveMentorCandidates username={props.username} />
          </Route>
          <Route path="/mentor/interns">
            <Interns username={props.username} />
          </Route>
          <Route path="/mentor/approveHours">
            <ApproveHours username={props.username} />
          </Route>
          <Route path="/uploadReportMentor">
            <UploadReportMentor username={props.username} />
          </Route>
          // COMPANY_REPRESENTATIVE
          <Route path="/CompanyPage">
            <CompanyPage username={props.username} />
          </Route>
          <Route path="/createInternship/company">
            <CreateInternshipCom username={props.username} />
          </Route>
          <Route path="/approveCompanyRepCandidates">
            <ApproveCompanyRepCandidates username={props.username} />
          </Route>
          //Program manager
          <Route path="/students">
            <Students programId={props.programId} />
          </Route>
          <Route path="/assignInternships">
            <AssignInternships programId={props.programId} />
          </Route>
          <Route
            path="/createInternship/manager"
            component={CreateInternship}
          />
          <Route path="/approveAssignments">
            <ApproveAssignments
              programId={props.programId}
              username={props.username}
            />
          </Route>
          //System manager
          <Route path="/programs">
            <Programs />
          </Route>
          <Route path="/createProgram" component={CreateProgram} />
          // Not found
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
