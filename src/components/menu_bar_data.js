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
      path: "/",
      cName: "nav-text",
    },
  ],

  [STUDENT]: [
    {
      title: "בית",
      path: "/",
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
      path: "/changePass",
      cName: "nav-text",
    },
  ],

  [ADVANCED_CANDIDATE]: [
    {
      title: "בית",
      path: "/",
      cName: "nav-text",
    },
    {
      title: "דף אישי",
      path: "/404/",
      cName: "nav-text",
    },
    {
      title: "צפייה בהתמחויות",
      path: "/internships",
      cName: "nav-text",
    },
    {
      title: "בחירת התמחויות",
      path: "/internshipsPriorities",
      cName: "nav-text",
    },
    {
      title: "עדכון סיסמה",
      path: "/changePass",
      cName: "nav-text",
    },
  ],

  [INTERN]: [
    {
      title: "בית",
      path: "/",
      cName: "nav-text",
    },
    {
      title: "דף אישי",
      path: "/404/",
      cName: "nav-text",
    },
    {
      title: "דיווח שעות",
      path: "/reportHours",
      cName: "nav-text",
    },
    {
      title: "הגש דוח",
      path: "/uploadReport",
      cName: "nav-text",
    },
    {
      title: "עדכון סיסמה",
      path: "/changePass",
      cName: "nav-text",
    },
  ],

  [MENTOR]: [
    {
      title: "בית",
      path: "/",
      cName: "nav-text",
    },
    {
      title: "צפה במועמדים",
      path: "/approveMentorCandidates",
      cName: "nav-text",
    },
    {
      title: "מתמחים",
      path: "/mentor/interns",
      cName: "nav-text",
    },
    {
      title: "אישור דיווח שעות",
      path: "/mentor/approveHours",
      cName: "nav-text",
    },
    {
      title: "הגשת משובים",
      path: "/uploadReportMentor",
      cName: "nav-text",
    },
    {
      title: "עדכון סיסמה",
      path: "/changePass",
      cName: "nav-text",
    },
  ],

  [COMPANY_REPRESENTATIVE]: [
    {
      title: "בית",
      path: "/",
      cName: "nav-text",
    },
    {
      title: "דף החברה",
      path: "/companyPage",
      cName: "nav-text",
    },
    {
      title: "יצירת התמחות",
      path: "/createInternship/company",
      cName: "nav-text",
    },
    {
      title: "צפה במועמדים",
      path: "/approveCompanyRepCandidates",
      cName: "nav-text",
    },
    {
      title: "עדכון סיסמה",
      path: "/changePass",
      cName: "nav-text",
    },
  ],

  [PROGRAM_COORDINATOR]: [
    {
      title: "בית",
      path: "/",
      cName: "nav-text",
    },
    {
      title: "חברות",
      path: "/companies",
      cName: "nav-text",
    },
    {
      title: "יצירת התמחות",
      path: "/createInternship/manager",
      cName: "nav-text",
    },
    {
      title: "סטודנטים",
      path: "/students",
      cName: "nav-text",
    },
    {
      title: "שיבוץ התמחויות",
      path: "/assignInternships",
      cName: "nav-text",
    },
    {
      title: "סטטיסטיקות",
      path: "/404/",
      cName: "nav-text",
    },
    {
      title: "עדכון סיסמה",
      path: "/changePass",
      cName: "nav-text",
    },
  ],

  [PROGRAM_MANAGER]: [
    {
      title: "בית",
      path: "/",
      cName: "nav-text",
    },
    {
      title: "חברות",
      path: "/companies",
      cName: "nav-text",
    },
    {
      title: "סטודנטים",
      path: "/students",
      cName: "nav-text",
    },
    {
      title: "יצירת התמחות",
      path: "/createInternship/manager",
      cName: "nav-text",
    },
    {
      title: "שיבוץ התמחויות",
      path: "/assignInternships",
      cName: "nav-text",
    },
    {
      title: "אשר שיבוצים",
      path: "/approveAssignments",
      cName: "nav-text",
    },
    {
      title: "סטטיסטיקות",
      path: "/404/",
      cName: "nav-text",
    },
    {
      title: "עדכון סיסמה",
      path: "/changePass",
      cName: "nav-text",
    },
  ],

  [SYSTEM_MANAGER]: [
    {
      title: "בית",
      path: "/",
      cName: "nav-text",
    },
    {
      title: "תוכניות קיימות",
      path: "/programs",
      cName: "nav-text",
    },
    {
      title: "הוספת תוכנית התמחות",
      path: "/createProgram",
      cName: "nav-text",
    },
    {
      title: "סטטיסטיקות",
      path: "/404/",
      cName: "nav-text",
    },
    {
      title: "עדכון סיסמה",
      path: "/changePass",
      cName: "nav-text",
    },
  ],
};
