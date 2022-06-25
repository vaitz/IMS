import React from "react";
import { Link } from "react-router-dom";
import { MenuBarData } from "./menu_bar_data";
import {
  ADVANCED_CANDIDATE,
  COMPANY_REPRESENTATIVE,
  INTERN,
  MENTOR,
  PROGRAM_MANAGER,
  STUDENT,
  SYSTEM_MANAGER,
} from "../utils/constants";

const Menu = ({ userType }) => {
  return (
    <>
      {MenuBarData[userType].map((item) => (
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

export default Menu;
