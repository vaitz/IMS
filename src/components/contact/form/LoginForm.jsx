import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { loginRequest } from "../../../users/guest/login/requests";
import { useHistory } from "react-router-dom";
import PopUp from "../../../popup";

const LoginForm = ({
  setUserType,
  setFirstName,
  setProgramId,
  setUsername,
}) => {
  const [error, setError] = useState(false);
  let history = useHistory();

  // for password show hide
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  // for validation
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("שם משתמש נדרש"),
    password: Yup.string().required("סיסמא נדרשת"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data, e) {
    // display form data on success
    console.log("Message submited: " + JSON.stringify(data));
    e.target.reset();
    loginRequest(
      setError,
      data.username,
      data.password,
      setUserType,
      setFirstName,
      setProgramId,
      setUsername,
      history
    );
  }

  // Showing error message
  const errorMessage = () => {
    return (
      <PopUp
        trigger={error}
        setTrigger={() => {
          setError(false);
        }}
      >
        <h3 className="font-rubik">שם משתמש או סיסמא לא תקינים</h3>
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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="user-data-form ">
        <div className="row">
          <div className="messages">{errorMessage()}</div>
          <div className="col-12">
            <div className="input-group-meta mb-80 sm-mb-70">
              <label>שם משתמש</label>
              <input
                placeholder="הכנס שם משתמש"
                name="username"
                type="text"
                {...register("username")}
                className={` ${errors.username ? "is-invalid" : ""}`}
              />
              {errors.username && (
                <div className="invalid-feedback">
                  {errors.username?.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta mb-25">
              <label>סיסמא</label>
              <input
                placeholder="הכנס סיסמא"
                name="password"
                type={passwordShown ? "text" : "password"}
                {...register("password")}
                className={` ${errors.password ? "is-invalid" : ""}`}
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
                  <img src="/njsw36/static/images/icon/view.svg" alt="ico" />
                </span>
              </span>
            </div>
          </div>
          <div className="col-12">
            <button className="theme-btn-one mt-50 mb-50">התחברות</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
