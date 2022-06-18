import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { getUser } from "./utils/common";
import { getDetails } from "./requests";
import {
  ADVANCED_CANDIDATE,
  GUEST,
  INTERN,
  SYSTEM_MANAGER,
  PROGRAM_MANAGER,
  COMPANY_REPRESENTATIVE,
  MENTOR,
} from "./constants";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const App = () => {
  const [userType, setUserType] = useState(GUEST);
  const [firstName, setFirstName] = useState(GUEST);
  const [programId, setProgramId] = useState(123);
  const [username, setUsername] = useState("user");
  const theme = createTheme({
    background: {
      primary: {
        main: "#0052cc",
      },
    },
    palette: {
      primary: {
        main: "#0052cc",
      },
      secondary: {
        main: "#edf2ff",
      },
    },
  });
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    const user = getUser();
    if (user) {
      setUsername(user);
      getDetails(user, setUserType, setFirstName, setProgramId);
    }
  }, []);
  window.addEventListener("load", AOS.refresh);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>תוכנית ההתמחות</title>
        <meta property="og:site_name" content="IMS" />
        <meta property="og:url" content="https://in.bgu.ac.il/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IMS: Internship Managment System" />
      </Helmet>
      {/* End Seo Helmt */}

      <ScrollToTop />
      <Routes
        userType={userType}
        firstName={firstName}
        programId={programId}
        username={username}
        setUserType={setUserType}
        setFirstName={setFirstName}
        setProgramId={setProgramId}
        setUsername={setUsername}
      />
    </ThemeProvider>
  );
};

export default App;
