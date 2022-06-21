import React, { useState, useEffect } from "react";
import PopUp from "../../../popup";
import { getPrograms, sendDetailsToServer } from "./requests";
import { useHistory } from "react-router-dom";
import {
  STUDENT,
  COMPANY_REPRESENTATIVE,
  MENTOR,
  PROGRAM_MANAGER,
  PROGRAM_COORDINATOR,
} from "../../../constants";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as Yup from "yup";

const userTypes = [
  STUDENT,
  COMPANY_REPRESENTATIVE,
  MENTOR,
  PROGRAM_MANAGER,
  PROGRAM_COORDINATOR,
];

const Register = () => {
  let history = useHistory();

  // States for managing the registration form
  const [openPopUpStatement, setOpenPopUpStatement] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [programs, setPrograms] = useState([]);
  const [userType, setUserType] = useState(STUDENT);

  useEffect(() => {
    getPrograms(setPrograms);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserType(value);
  };

  // for password show hide
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  // for Re password show hide
  const [rePasswordShown, setRePasswordShown] = useState(false);
  const toggleRePasswordVisiblity = () => {
    setRePasswordShown(rePasswordShown ? false : true);
  };

  const clicked = (e) => {
    setOpenPopUpStatement(!openPopUpStatement);
  };

  // Showing success message
  const successMessage = () => {
    return (
      <PopUp
        trigger={submitted}
        setTrigger={() => {
          history.push("/njsw36/login");
        }}
      >
        <h3>ההרשמה בוצעה בהצלחה!</h3>
        <button
          style={{
            background: "#DEEAE7",
            border: "10px",
            outline: "auto",
            padding: "3px",
          }}
          onClick={() => {
            history.push("/njsw36/login");
          }}
        >
          כניסה
        </button>
      </PopUp>
    );
  };

  // Showing error message
  const errorMessage = () => {
    return (
      <PopUp
        trigger={error}
        setTrigger={() => {
          setError(false);
        }}
      >
        <h3 className="font-rubik">{errorMsg}</h3>
        <br />
        <button
          style={{
            background: "#DEEAE7",
            border: "10px",
            outline: "auto",
            padding: "3px",
          }}
          className="font-rubik"
          onClick={() => {
            setError(false);
          }}
        >
          נסה שנית
        </button>
      </PopUp>
    );
  };

  // for validation
  const validationSchema = Yup.object().shape({
    userType: Yup.string(),
    username: Yup.string().required("נדרש למלא שם משתמש"),
    firstname: Yup.string().required("נדרש למלא שם פרטי"),
    lastname: Yup.string().required("נדרש למלא שם משפחה"),
    password: Yup.string()
      .required("נדרש למלא סיסמא")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
        "סיסמא לא תקינה, אורך הסיסמא חייב להיות לפחות 6 תווים, אות אחת גדולה באנגלית, אות אחת קטנה בעברית ומספר אחד"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "הסיסמאות שהוקלדו לא תאומות")
      .required("נדרש למלא אימות סיסמא"),
    email: Yup.string()
      .required("נדרש למלא כתובת אימייל")
      .email("אימייל לא תקין, יש להקפיד על כתובת אימייל חוקית"),
    program: Yup.string().when("userType", {
      is: STUDENT,
      then: Yup.string()
        .min(2, "נדרש לבחור תוכנית התמחות")
        .required("נדרש לבחור תוכנית התמחות"),
    }),
    companyName: Yup.string().when("userType", {
      is: MENTOR || COMPANY_REPRESENTATIVE,
      then: Yup.string().required("נדרש למלא שם חברה"),
    }),
    acceptTerms: Yup.boolean().when("userType", {
      is: STUDENT,
      then: Yup.boolean()
        .required("יש לאשר שהצהרת הרצינות נקראה")
        .oneOf([true], "יש לאשר שהצהרת הרצינות נקראה"),
    }),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  async function onSubmit(data, e) {
    // display form data on success
    const response = await sendDetailsToServer(data);
    e.target.reset();
    if (response.status === 201) {
      setSubmitted(true);
    } else if (response.status === 400) {
      setError(true);
      setErrorMsg("שם המשתמש קיים במערכת, נא לבחור שם משתמש אחר");
    } else if (userType === MENTOR) {
      setError(true);
      setErrorMsg("שם החברה לא קיים במערכת, נא לבחור שם חברה תקין");
    } else {
      setError(true);
      setErrorMsg("משהו השתבש.. נסה שנית");
    }
  }

  return (
    <>
      <form
        className="user-data-form font-rubik"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="messages">{successMessage()}</div>
        <div className="messages">{errorMessage()}</div>
        <div className="row">
          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>סוג משתמש:</label>
              <select
                className="form-control"
                {...register("userType")}
                value={userType}
                id="userType"
                onChange={handleChange}
              >
                {userTypes &&
                  userTypes.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>שם משתמש</label>
              <input
                type="text"
                id="username"
                {...register("username")}
                name="username"
                placeholder="הכנס\י שם משתמש"
                required
              />
              {errors.username && (
                <div className="invalid-feedback">
                  {errors.username?.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>סיסמא</label>
              <input
                type={passwordShown ? "text" : "password"}
                {...register("password")}
                id="password"
                name="password"
                placeholder="הכנס\י סיסמא"
                required
              />
              {errors.password && (
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              )}
              <span
                className="placeholder_icon"
                onClick={togglePasswordVisiblity}
              >
                <span
                  className={
                    passwordShown ? "passVicon eye-slash" : "passVicon"
                  }
                >
                  <img src="/njsw36/static/images/icon/view.svg" alt="" />
                </span>
              </span>
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>אימות סיסמא</label>
              <input
                type={rePasswordShown ? "text" : "password"}
                {...register("confirmPassword")}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="הכנס\י סיסמא בשנית"
                required
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">
                  {errors.confirmPassword?.message}
                </div>
              )}
              <span
                className="placeholder_icon"
                onClick={toggleRePasswordVisiblity}
              >
                <span
                  className={
                    rePasswordShown ? "passVicon eye-slash" : "passVicon"
                  }
                >
                  <img src="/njsw36/static/images/icon/view.svg" alt="" />
                </span>
              </span>
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>שם פרטי</label>
              <input
                type="text"
                id="firstname"
                {...register("firstname")}
                name="firstname"
                placeholder="הכנס\י שם פרטי"
                required
              />
              {errors.firstname && (
                <div className="invalid-feedback">
                  {errors.firstname?.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>שם משפחה</label>
              <input
                type="text"
                id="lastname"
                {...register("lastname")}
                name="lastname"
                placeholder="הכנס\י שם משפחה"
                required
              />
              {errors.lastname && (
                <div className="invalid-feedback">
                  {errors.lastname?.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>דוא"ל</label>
              <input
                type="email"
                id="email"
                {...register("email")}
                name="email"
                placeholder="הכנס\י כתובת מייל"
                required
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email?.message}</div>
              )}
            </div>
          </div>
          {userType === STUDENT && (
            <div className="col-12">
              <div className="input-group-meta mb-50">
                <label>שם תוכנית התמחות:</label>
                <select
                  className="form-control"
                  placeholder="בחר\י את שם התוכנית"
                  {...register("program")}
                  id="program"
                >
                  {programs &&
                    programs.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                </select>
                {errors.program && (
                  <div className="invalid-feedback">
                    {errors.program?.message}
                  </div>
                )}
              </div>
            </div>
          )}

          {userType === STUDENT && (
            <div>
              <PopUp trigger={openPopUpStatement} setTrigger={clicked}>
                <h3>הצהרת רצינות</h3>
                <p>כאן צריך להכניס תוכן של הצהרת רצינות.</p>
              </PopUp>

              <div className="col-12">
                <div className="agreement-checkbox d-flex justify-content-between align-items-center sm-mt-10">
                  <div className="position-relative">
                    <input
                      name="acceptTerms"
                      type="checkbox"
                      {...register("acceptTerms")}
                      id="acceptTerms"
                      className={` ${errors.acceptTerms ? "is-invalid" : ""}`}
                    />

                    <label htmlFor="acceptTerms">
                      קראתי את הצהרת הרצינות ואני מסכים/מה עם הנאמר.
                    </label>
                    {errors.acceptTerms && (
                      <div className="invalid-feedback">
                        {errors.acceptTerms?.message}
                      </div>
                    )}
                    <p>
                      <a href="#" onClick={clicked}>
                        הצהרת הרצינות
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {(userType === COMPANY_REPRESENTATIVE || userType === MENTOR) && (
            <div className="col-12">
              <div className="input-group-meta mb-50">
                <label>שם חברה</label>
                <input
                  type="text"
                  id="companyName"
                  placeholder="הכנס\י את שם החברה"
                  {...register("companyName")}
                  required
                />
                {errors.companyName && (
                  <div className="invalid-feedback">
                    {errors.companyName?.message}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="col-12">
            <button type="submit" className="theme-btn-one mt-30 mb-50">
              הרשמה
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
