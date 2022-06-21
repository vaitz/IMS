import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { validateEmptyFields } from "../../guest/login/validations";
import { changePassRequest } from "./requests";
import { validatePassword } from "../../guest/register/validations";
import PopUp from "../../../popup";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as Yup from "yup";
import { COMPANY_REPRESENTATIVE, MENTOR, STUDENT } from "../../../constants";
import { sendDetailsToServer } from "../../guest/register/requests";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 400px;
`;

function ChangePass({ username }) {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // for validation
  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required("נדרש למלא סיסמא ישנה"),
    password: Yup.string()
      .required("נדרש למלא סיסמא חדשה")
      .notOneOf(
        [Yup.ref("oldPassword")],
        "הסיסמה החדשה חייבת להיות שונה מהישנה"
      )
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
        "סיסמא לא תקינה, אורך הסיסמא חייב להיות לפחות 6 תווים, אות אחת גדולה באנגלית, אות אחת קטנה בעברית ומספר אחד"
      ),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "הסיסמאות שהוקלדו לא תאומות")
      .required("נדרש למלא אימות סיסמא"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  // for old password show hide
  const [oldPasswordShown, setOldPasswordShown] = useState(false);
  const toggleOldPasswordVisiblity = () => {
    setOldPasswordShown(oldPasswordShown ? false : true);
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

  let history = useHistory();

  // Showing success message
  const successMessage = () => {
    return (
      <PopUp
        trigger={submitted}
        setTrigger={() => {
          history.push("/njsw36/");
        }}
      >
        <h3>עדכון הסיסמה בוצע בהצלחה!</h3>
        <button
          style={{
            background: "#DEEAE7",
            border: "10px",
            outline: "auto",
            padding: "3px",
          }}
          onClick={() => {
            history.push("/njsw36/");
          }}
        >
          אישור
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

  async function onSubmit(data, e) {
    // display form data on success
    const response = await changePassRequest(
      username,
      data.oldPassword,
      data.password,
      history
    );
    e.target.reset();
    if (response.status === 200) {
      setSubmitted(true);
    } else {
      setError(true);
      setErrorMsg("הסיסמא הישנה שסופקה לא תואמת לסיסמא שקיימת במערכת");
    }
  }
  return (
    <Container>
      <h1 className="font-rubik">עדכון סיסמה</h1>
      <label className="font-rubik" style={{ fontSize: 14 }}>
        הסיסמה החדשה צריכה להכיל לפחות 6 תווים ולשלב בתוכה אותיות גדולות וקטנות
        באנגלית ומספרים
      </label>
      <br />
      <br />
      <form
        className="user-data-form font-rubik"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="messages">{successMessage()}</div>
        {/*<div className="messages">{errorMessage()}</div>*/}
        <div className="row"></div>
        <div className="col-12">
          <div className="input-group-meta mb-50">
            <label>סיסמה ישנה</label>
            <input
              type={oldPasswordShown ? "text" : "password"}
              {...register("oldPassword")}
              placeholder="הכנס\י סיסמה ישנה"
              autoComplete="old-password"
            />
            {errors.oldPassword && (
              <div className="invalid-feedback">
                {errors.oldPassword?.message}
              </div>
            )}
            <span
              className="placeholder_icon"
              onClick={toggleOldPasswordVisiblity}
            >
              <span
                className={
                  oldPasswordShown ? "passVicon eye-slash" : "passVicon"
                }
              >
                <img src="/njsw36/static/images/icon/view.svg" alt="" />
              </span>
            </span>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta mb-50">
            <label>סיסמה חדשה</label>
            <input
              type={passwordShown ? "text" : "password"}
              {...register("password")}
              placeholder="הכנס\י סיסמה חדשה"
              autoComplete="new-password"
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password?.message}</div>
            )}
            <span
              className="placeholder_icon"
              onClick={togglePasswordVisiblity}
            >
              <span
                className={passwordShown ? "passVicon eye-slash" : "passVicon"}
              >
                <img src="/njsw36/static/images/icon/view.svg" alt="" />
              </span>
            </span>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta mb-50">
            <label>אימות סיסמה חדשה</label>
            <input
              type={rePasswordShown ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder="הכנס\י סיסמה חדשה בשנית"
              autoComplete="new-password"
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
        {/*{error && (*/}
        {/*  <>*/}
        {/*    <small style={{ color: "red" }}>{error}</small>*/}
        {/*    <br />*/}
        {/*  </>*/}
        {/*)}*/}
        <br />
        {/*<input*/}
        {/*  type="button"*/}
        {/*  value={loading ? "טוען..." : "עדכון"}*/}
        {/*  onClick={() => onClick()}*/}
        {/*  disabled={loading}*/}
        {/*/>*/}
        <button
          type="submit"
          style={{
            background: "#DEEAE7",
            border: "10px",
            outline: "auto",
            padding: "3px",
          }}
        >
          עדכון
        </button>
        <br />
      </form>
    </Container>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default ChangePass;
