import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "../../../side_bar_data";
import { ADVANCED_CANDIDATE, STUDENT } from "../../../constants";

const home = {
  img: "home01",
  routerPath: "/",
  inenerText: "",
  inenerTextWrapClass: "",
  clasName: `dropdown-item img-box`,
  title: "Event Organizer",
};
const MegaMenu = ({ userType }) => {
  return (
    <>
      {SidebarData[userType].map((item) => (
        <li className="navbar-nav">
          <Link
            to={item.path}
            className={"dropdown-item img-box"}
            href="#"
            data-toggle="dropdown"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </>
  );
  // End navbar nav mega menu main
};

export default MegaMenu;
