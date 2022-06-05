import React from "react";

// All HOME PAGE ROUTES
import DocLanding from "../views/all-home-pages/DocLanding";
// All INNER PAGES ROUTES START FROM BELLOW

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
import HeaderThree from "../components/header/HeaderThree";
import Home from "../users/common/home/home";

const ContentWrapper = styled.div`
  padding: 30px 50px;
  width: auto;
`;

const Routes = (props) => {
  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>תוכנית ההתמחות להייטק</title>
      </Helmet>
      <Router>
        <HeaderThree {...props} />
        <ScrollTopBehaviour />
        <Switch>
          <Route path="/njsw36/login" component={Login} />
          <Route path="/njsw36/SignUp" component={SignUp} />

          <Route exact path="/njsw36/" component={Home} />

          <Route path="/njsw36/changePass">
            <ChangePass username={props.username} />
          </Route>

          <Route path="/404" component={NotFound} />

          {/* NotFound Route */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
