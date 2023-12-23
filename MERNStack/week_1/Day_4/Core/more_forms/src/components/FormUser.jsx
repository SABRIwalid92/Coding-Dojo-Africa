import React, { useState } from "react";

const FormUser = () => {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { fname, lname, email, password, confirmPassword } = user;
  const createUser = (e) => {
    e.preventDfefault();
  };
  const errorsFn = (e, error_key) => {
    const temp = { ...errors };
    const input = e.target.value;
    switch (error_key) {
      case "fname":
      case "lname":
        temp[error_key] =
          input.length === 1 ? " must be at least 2 characters." : "";
        break;
      case "email":
        temp[error_key] =
          input.length > 0 && input.length < 5
            ? " must be at least 5 characters."
            : "";
        break;
      case "password":
        temp[error_key] =
          input.length > 0 && input.length < 8
            ? " Password must be at least 8 characters."
            : "";
        break;
      case "confirmPassword":
        temp[error_key] =
          input !== user["password"] ? "Passwords must match!" : "";
        break;
      default:
    }

    setErrors(temp);
  };
  const fnameFn = (e) => {
    errorsFn(e, e.target.name);
    if (e.target.value.length > 0 && !errors[fname]) {
      setUser({ ...user, fname: e.target.value });
    }
  };

  const lnameFn = (e) => {
    errorsFn(e, e.target.name);
    if (e.target.value.length > 0 && !errors[lname]) {
      setUser({ ...user, lname: e.target.value });
    }
  };
  const emailFn = (e) => {
    errorsFn(e, e.target.name);
    if (e.target.value.length > 0 && !errors[email]) {
      setUser({ ...user, email: e.target.value });
    }
  };
  const passwordFn = (e) => {
    errorsFn(e, e.target.name);
    if (e.target.value.length > 0 && !errors[password]) {
      setUser({ ...user, password: e.target.value });
    }
  };

  const confirmPasswordFn = (e) => {
    errorsFn(e, e.target.name);
    if (e.target.value.length > 0 && !errors[confirmPassword]) {
      setUser({ ...user, confirmPassword: e.target.value });
    }
  };
  return (
    <div>
      <form onSubmit={createUser} style={{ background: "#80808033" }}>
        <div>
          <label htmlFor="fname">
            First Name
            <input
              name="fname"
              onChange={(e) => {
                fnameFn(e);
              }}
            />
            <p style={{ color: "red", fontWeight: "bold" }}>
              {errors.fname ? "First Name" + errors.fname : ""}
            </p>
          </label>
        </div>
        <div>
          <label htmlFor="lname">
            Last Name
            <input name="lname" onChange={(e) => lnameFn(e)} />
            <p style={{ color: "red", fontWeight: "bold" }}>
              {errors.lname ? "Last Name" + errors.lname : ""}
            </p>
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email
            <input name="email" type="email" onChange={(e) => emailFn(e)} />
            <p style={{ color: "red", fontWeight: "bold" }}>
              {errors.email ? "Email" + errors.email : ""}
            </p>
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <input
              name="password"
              type="password"
              onChange={(e) => passwordFn(e)}
            />
            <p style={{ color: "red", fontWeight: "bold" }}>
              {errors.password ? errors.password : ""}
            </p>
          </label>
        </div>
        <div>
          <label htmlFor="confirmPassword">
            Confirm Password
            <input
              name="confirmPassword"
              type="password"
              onChange={(e) => confirmPasswordFn(e)}
            />
            <p style={{ color: "red", fontWeight: "bold" }}>
              {errors.confirmPassword ? errors.confirmPassword : ""}
            </p>
          </label>
        </div>
      </form>
      <div>
        <dl>
          <dt style={{ display: "inline" }}>First Name</dt>
          <dd style={{ display: "inline" }}>{fname}</dd>
        </dl>
        <dl>
          <dt style={{ display: "inline" }}>Last Name</dt>
          <dd style={{ display: "inline" }}>{lname}</dd>
        </dl>
        <dl>
          <dt style={{ display: "inline" }}>Email</dt>
          <dd style={{ display: "inline" }}>{email}</dd>
        </dl>
        <dl>
          <dt style={{ display: "inline" }}>Password</dt>
          <dd style={{ display: "inline" }}>{password}</dd>
        </dl>
        <dl>
          <dt style={{ display: "inline" }}>Confirm Password</dt>
          <dd style={{ display: "inline" }}>{confirmPassword}</dd>
        </dl>
      </div>
    </div>
  );
};

export default FormUser;
