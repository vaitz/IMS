import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { getUser } from "./utils/common";
import { getDetails } from "./requests";
import { GUEST } from "./constants";

const App = () => {
  const [userType, setUserType] = useState(GUEST);
  const [firstName, setFirstName] = useState("אורח");
  const [programId, setProgramId] = useState("");
  const [username, setUsername] = useState();
  console.log(userType);
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
    <>
      <Helmet>
        <title>Deski - Saas & Software React Template</title>
        <meta property="og:site_name" content="deski" />
        <meta
          property="og:url"
          content="https://themeforest.net/user/ib-themes"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Deski: Creative Saas & Software React Template"
        />
        <meta
          name="keywords"
          content="agency, bootstrap 5, business, clean, corporate, creative, fullpage, minimal, modern, multipurpose, parallax, personal, photography, portfolio, showcase, Digital marketing agency, Digital marketing company, Digital marketing services, sass, software company"
        />
        <meta
          name="description"
          content="Deski is a creative saas and software React template designed for saas and software Agency websites."
        />
        <meta name="description" content="Portfolio & Agency React Template" />
      </Helmet>
      {/* End Seo Helmt */}

      <ScrollToTop />
      <Routes
        userType={userType}
        firstName={firstName}
        programId={programId}
        username={username}
      />
    </>
  );
};

export default App;
