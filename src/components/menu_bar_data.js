import React from "react";
import {
  ADVANCED_CANDIDATE,
  COMPANY_REPRESENTATIVE,
  GUEST,
  INTERN,
  PROGRAM_MANAGER,
  PROGRAM_COORDINATOR,
  MENTOR,
  STUDENT,
  SYSTEM_MANAGER,
} from "../utils/constants";

// for setting tab or changing password icon: FaCog
export const MenuBarData = {
  [GUEST]: [
    {
      title: "",
      path: "/njsw36/",
      cName: "nav-text",
    },
  ],

  [STUDENT]: [
    {
      title: "בית",
      path: "/njsw36/",
      cName: "nav-text",
    },
    {
      title: "דף אישי",
      path: "/404/",
      cName: "nav-text",
    },
    {
      title: "תשלום דמי רצינות",
      path: "/404/",
      cName: "nav-text",
    },
    {
      title: "עדכון סיסמה",
      path: "/njsw36/changePass",
      cName: "nav-text",
    },
  ],

  [ADVANCED_CANDIDATE]: [
    {
      title: "בית",
      path: "/njsw36/",
      cName: "nav-text",
    },
    {
      title: "דף אישי",
      path: "/404/",
      cName: "nav-text",
    },
    {
      title: "צפייה בהתמחויות",
      path: "/njsw36/internships",
      cName: "nav-text",
    },
    {
      title: "בחירת התמחויות",
      path: "/njsw36/internshipsPriorities",
      cName: "nav-text",
    },
    {
      title: "עדכון סיסמה",
      path: "/njsw36/changePass",
      cName: "nav-text",
    },
  ],

  [INTERN]: [
    {
      title: "בית",
      path: "/njsw36/",
      cName: "nav-text",
    },
    {
      title: "דף אישי",
      path: "/404/",
      cName: "nav-text",
    },
    {
      title: "דיווח שעות",
      path: "/njsw36/reportHours",
      cName: "nav-text",
    },
    {
      title: "הגש דוח",
      path: "/njsw36/uploadReport",
      cName: "nav-text",
    },
    {
      title: "עדכון סיסמה",
      path: "/njsw36/changePass",
      cName: "nav-text",
    },
  ],

  [MENTOR]: [
    {
      title: "בית",
      path: "/njsw36/",
      cName: "nav-text",
    },
    {
      title: "צפה במועמדים",
      path: "/njsw36/approveMentorCandidates",
      cName: "nav-text",
    },
    {
      title: "סטודנטים",
      path: "/njsw36/mentor/interns",
      cName: "nav-text",
    },
    {
      title: "אישור דיווח שעות",
      path: "/njsw36/mentor/approveHours",
      cName: "nav-text",
    },
    {
      title: "הגשת משובים",
      path: "/njsw36/uploadReportMentor",
      cName: "nav-text",
    },
    {
      title: "עדכון סיסמה",
      path: "/njsw36/changePass",
      cName: "nav-text",
    },
  ],

  [COMPANY_REPRESENTATIVE]: [
    {
      title: "בית",
      path: "/njsw36/",
      cName: "nav-text",
    },
    {
      title: "דף החברה",
      path: "/njsw36/companyPage",
      cName: "nav-text",
    },
    {
      title: "יצירת התמחות",
      path: "/njsw36/createInternship/company",
      cName: "nav-text",
    },
    {
      title: "צפה במועמדים",
      path: "/njsw36/approveCompanyRepCandidates",
      cName: "nav-text",
    },
    {
      title: "עדכון סיסמה",
      path: "/njsw36/changePass",
      cName: "nav-text",
    },
  ],

  [PROGRAM_COORDINATOR]: [
    {
      title: "בית",
      path: "/njsw36/",
      cName: "nav-text",
    },
    {
      title: "חברות",
      path: "/njsw36/companies",
      cName: "nav-text",
    },
    {
      title: "יצירת התמחות",
      path: "/njsw36/createInternship/manager",
      cName: "nav-text",
    },
    {
      title: "סטודנטים",
      path: "/njsw36/students",
      cName: "nav-text",
    },
    {
      title: "שיבוץ התמחויות",
      path: "/njsw36/assignInternships",
      cName: "nav-text",
    },
    {
      title: "סטטיסטיקות",
      path: "/404/",
      cName: "nav-text",
    },
    {
      title: "עדכון סיסמה",
      path: "/njsw36/changePass",
      cName: "nav-text",
    },
  ],

  [PROGRAM_MANAGER]: [
    {
      title: "בית",
      path: "/njsw36/",
      cName: "nav-text",
    },
    {
      title: "חברות",
      path: "/njsw36/companies",
      cName: "nav-text",
    },
    {
      title: "סטודנטים",
      path: "/njsw36/students",
      cName: "nav-text",
    },
    {
      title: "יצירת התמחות",
      path: "/njsw36/createInternship/manager",
      cName: "nav-text",
    },
    {
      title: "שיבוץ התמחויות",
      path: "/njsw36/assignInternships",
      cName: "nav-text",
    },
    {
      title: "אשר שיבוצים",
      path: "/njsw36/approveAssignments",
      cName: "nav-text",
    },
    {
      title: "סטטיסטיקות",
      path: "/404/",
      cName: "nav-text",
    },
    {
      title: "עדכון סיסמה",
      path: "/njsw36/changePass",
      cName: "nav-text",
    },
  ],

  [SYSTEM_MANAGER]: [
    {
      title: "בית",
      path: "/njsw36/",
      cName: "nav-text",
    },
    {
      title: "תוכניות קיימות",
      path: "/njsw36/programs",
      cName: "nav-text",
    },
    {
      title: "הוספת תוכנית התמחות",
      path: "/njsw36/createProgram",
      cName: "nav-text",
    },
    {
      title: "סטטיסטיקות",
      path: "/404/",
      cName: "nav-text",
    },
    {
      title: "עדכון סיסמה",
      path: "/njsw36/changePass",
      cName: "nav-text",
    },
  ],
};
