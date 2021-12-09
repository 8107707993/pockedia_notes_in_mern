import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  const [credential, setCredential] = useState({ email: "", password: "" });
  let history = useNavigate();

  const hendeleSubmit = async (e) => {
    e.preventDefault();

    const responseApi = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      }),
    });
    const logindata = await responseApi.json();
    console.log(logindata);
    if (logindata.success) {
      localStorage.setItem("authToken", logindata.authtoken);
      history("/");
      props.showAlert("Logged in Successfully", "success");
    } else{
        props.showAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-4" style={{ width: "60vw" }}>
      <form onSubmit={hendeleSubmit}>
        <div className="mb-3 my-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn my-2 btn-primary">
          Submit
        </button>
      </form>
      <div className="signup">
        <b>Don't Have an Account! Create one... </b>
        <Link to="/signup" className="btn  btn-link btn-sm">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Login;
