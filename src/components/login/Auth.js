import React, { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "../../assets/styles/Auth.css";
import User from "../../assets/images/user.png";
// import { useForm } from "react-hook-form";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function (props) {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;



  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const validateForm = () => {
    const { formBasicEmail, formBasicPassword } = form;
    const newErrors = {};

    if (!formBasicEmail || formBasicEmail === "")
      newErrors.formBasicEmail = "Email is required";
    else if (!emailRegex.test(formBasicEmail))
      newErrors.formBasicEmail = "Please eenter a valid email";

    if (!formBasicPassword || formBasicPassword === "")
      newErrors.formBasicPassword = "Please eenter a valid password";
    else if (!passwordRegex.test(formBasicPassword))
      newErrors.formBasicPassword = "6 to 16 valid characters, it has at least a number, and at least a special character";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
    } else {
      console.log(form);
    }


  };

  if (authMode === "signin") {
    return (
      <>
        <div className="Auth-form-container">
          <Form className="Auth-form ">
            <div className="Auth-form-content">
              <div>
                <img
                  src={User}
                  style={{ height: "100px" }}
                  className="userImage"
                ></img>
              </div>
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span
                  className="link-primary"
                  onClick={changeAuthMode}
                  style={{ cursor: "pointer" }}
                >
                  Sign Up
                </span>
              </div>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  name="email"
                  value={form.formBasicEmail}
                  onChange={(e) => setField("formBasicEmail", e.target.value)}
                  isInvalid={!!errors.formBasicEmail}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.formBasicEmail}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  name="password"
                  value={form.formBasicPassword}
                  onChange={(e) =>
                    setField("formBasicPassword", e.target.value)
                  }
                  isInvalid={!!errors.formBasicPassword}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.formBasicPassword}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </Form>
        </div>
      </>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <div>
            <img
              src={User}
              style={{ height: "100px", alignItems: "center" }}
              className="userImage"
            ></img>
          </div>
          <h3 className="Auth-form-title">Sign UP</h3>
          <div className="text-center">
            Already registered?{" "}
            <span
              className="link-primary"
              onClick={changeAuthMode}
              style={{ cursor: "pointer" }}
            >
              Sign in
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
