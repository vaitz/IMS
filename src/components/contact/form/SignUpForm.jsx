import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const SignUpForm = () => {
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

  // for validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Entered value does not match email format"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    acceptTerms: Yup.bool().oneOf(
      [true],
      "Accept Terms and Conditions is required"
    ),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data, e) {
    // display form data on success
    console.log("Message submited: " + JSON.stringify(data));
    e.target.reset();
  }

  return (
    <>
      <form className="user-data-form " onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>שם משתמש</label>
              <input
                type="text"
                placeholder="הכנס/י שם משתמש"
                name="name"
                {...register("name")}
                className={` ${errors.name ? "is-invalid" : ""}`}
              />

              {errors.name && (
                <div className="invalid-feedback">{errors.name?.message}</div>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>שם פרטי</label>
              <input
                type="text"
                placeholder="הכנס/י שם פרטי"
                name="name"
                {...register("name")}
                className={` ${errors.name ? "is-invalid" : ""}`}
              />

              {errors.name && (
                <div className="invalid-feedback">{errors.name?.message}</div>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>שם משפחה</label>
              <input
                type="text"
                placeholder="הכנס/י שם משפחה"
                name="name"
                {...register("name")}
                className={` ${errors.name ? "is-invalid" : ""}`}
              />

              {errors.name && (
                <div className="invalid-feedback">{errors.name?.message}</div>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>אימייל</label>
              <input
                placeholder="הכנס/י כתובת אימייל"
                name="email"
                type="text"
                {...register("email")}
                className={` ${errors.email ? "is-invalid" : ""}`}
              />

              {errors.email && (
                <div className="invalid-feedback">{errors.email?.message}</div>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>סיסמא</label>
              <input
                placeholder="הכנס/י סיסמא"
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
              {/* End error msg */}
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
              {/* End placeholder icon */}
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta mb-25">
              <label>אימות סיסמא</label>
              <input
                placeholder="הכנס/י סיסמא בשנית"
                name="confirmPassword"
                type={rePasswordShown ? "text" : "password"}
                {...register("confirmPassword")}
                className={` ${errors.confirmPassword ? "is-invalid" : ""}`}
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">
                  {errors.confirmPassword?.message}
                </div>
              )}
              {/* End error msg */}
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
              {/* End placeholder icon */}
            </div>
          </div>
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
              </div>
            </div>
            {/* /.agreement-checkbox */}
          </div>
          <div className="col-12">
            <button type="submit" className="theme-btn-one mt-30 mb-50">
              הרשמה
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
