import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "../../../side_bar_data";
import {
  ADVANCED_CANDIDATE,
  COMPANY_REPRESENTATIVE,
  INTERN,
  MENTOR,
  PROGRAM_MANAGER,
  STUDENT,
  SYSTEM_MANAGER,
} from "../../../constants";

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
