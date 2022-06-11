import React, { useState } from "react";
import { Link } from "react-router-dom";
import MegaMenu from "./mega-menu/MegaMenu";
import MegaMenuMobile from "./mega-menu/MegaMenuMobile";
import { GUEST } from "../../constants";

const HeaderThree = ({ userType, firstName, programId, username }) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 68) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-three bg-none fixed"
            : "theme-main-menu sticky-menu theme-menu-three bg-none"
        }
      >
        <div className="d-flex align-items-center justify-content-center">
          <div className="logo">
            <Link to="/njsw36/">
              <img
                src="/njsw36/static/images/logo/logo.png"
                alt="brand logo"
                width="190"
                height="70"
              />
            </Link>
          </div>
          {/* End Logo */}

          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div
                className="navbar-collapse collapse"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex justify-content-between align-items-center">
                  <MegaMenu userType={userType} />
                  {/* End MegaMenu */}

                  {userType === GUEST && (
                    <ul className="right-widget user-login-button d-flex align-items-center justify-content-center">
                      <li>
                        <Link
                          to="/njsw36/login"
                          className="signIn-action d-flex align-items-center"
                        >
                          <img
                            src="/njsw36/static/images/icon/52.svg"
                            alt="icon"
                          />
                          <span>התחברות</span>
                        </Link>
                      </li>
                      {/* End li */}
                      <li>
                        <Link
                          to="/njsw36/signup"
                          className="signUp-action d-flex align-items-center"
                        >
                          <span>הרשמה לתוכנית</span>
                          <img
                            src="/njsw36/static/images/icon/53.svg"
                            alt="icon"
                          />
                        </Link>
                      </li>
                    </ul>
                  )}
                  {/* End right-button-group  */}
                </div>
              </div>
            </div>
          </nav>
          {/* End nav */}
        </div>
        {/* 	End Mega Menu for Mobile */}
      </div>
      {/* /.theme-main-menu */}
    </>
  );
};

export default HeaderThree;
