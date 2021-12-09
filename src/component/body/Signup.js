import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let history = useNavigate();

  const hendeleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credential;
    const responseApi = await fetch(
      "http://localhost:4000/api/auth/createuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      }
    );
    const logindata = await responseApi.json();
    console.log(logindata);
    if (logindata.success) {
      localStorage.setItem("authToken", logindata.authtoken);
      props.showAlert("Account Created Successfully", "success");
      history("/");
    }
    else{
        props.showAlert("Invalid Details", "danger");
    }
  };

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container my-4" style={{ width: "60vw" }}>
        <form onSubmit={hendeleSubmit}>
          <div className="mb-3 my-4">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Please Enter Full Name"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3 my-4">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Please Enter Email"
              name="email"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Please Enter Password"
              name="password"
              onChange={onChange}
              minLength={8}
              required={true}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              placeholder="Please ReEnter Password"
              name="cpassword"
              onChange={onChange}
              minLength={8}
              required={true}

            />
          </div>

          <button type="submit" className="btn my-2 btn-primary">
            Submit
          </button>
        </form>
        <div className="signup">
          <b>You Have Already a Account! Login... </b>
          <Link to="/login" className="btn  btn-link btn-sm">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
