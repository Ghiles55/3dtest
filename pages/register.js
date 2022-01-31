import { Formik, useFormik } from "formik";

import { motion } from "framer-motion";
import Input from "../components/input";
import wilayas from "../public/wilayas";
import { useRouter } from "next/router";
import { useState } from "react";

// let MotionInput = motion(Input);

let RegisterForm = () => {
  let router = useRouter();
  let [status, setStatus] = useState("");
  const validate = (values) => {
    let errors = {};
    if (
      !values.firstName ||
      values.firstName.length < 2 ||
      values.firstName.length > 15
    ) {
      errors.firstName = "Your name has to be between 2 and 15 characters";
    }
    if (
      !values.lastName ||
      values.lastName.length < 2 ||
      values.lastName.length > 15
    ) {
      errors.lastName = "Your name has to be between 2 and 15 characters";
    }
    if (
      !values.email ||
      !values.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      errors.email = "Please enter a valid email address";
    }
    if (!values.Password || values.Password.length < 6) {
      errors.Password = "Your password must be at least 6 characters";
    } else if (values.Password.search(/\d/) == -1) {
      errors.Password = "Your password must contain at least one number";
    } else if (values.Password.search(/[a-zA-Z]/) == -1) {
      errors.Password = "Your password must contain at least one letter";
    } else if (
      values.Password.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1
    ) {
      errors.Password = "You are using a restricted special character";
    }
    if (!values.Address || values.Address.length < 6) {
      errors.Address = "Please enter a valid address";
    }
    if (!values.PhoneNumber || values.PhoneNumber.length < 10) {
      errors.PhoneNumber = "Please enter a valid phone number";
    }
    console.log(errors, values.Password, values.Password.length);
    return errors;
  };
  async function registerRequest(values, actions) {
    try {
      let response = await fetch("http://localhost:840/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
        }),
      });
      let data = await response.json();
      console.log(response.status);
      if (response.status == 200) {
        router.push("/login");
      } else {
        setStatus(data);
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="center_container">
      <div
        style={{
          position: "absolute",
          width: "40rem",
          height: "8rem",
          top: "2rem",
          right: "50vw",
          transform: "translateX(20rem)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span
          style={{
            fontFamily: "'Raleway', sans-serif;",
            fontSize: "3rem",
            fontWeight: "900",
            marginBottom: "2rem",
          }}
        >
          Create your account
        </span>
        <span> First, tell us a bit about you</span>
      </div>
      <div className="register_card">
        <Formik
          initialValues={{
            email: "",
            firstName: "",
            lastName: "",
            Password: "",
            Address: "",
            PhoneNumber: "",
          }}
          validate={validate}
          onSubmit={(values, actions) => {
            console.log(values, actions);
            registerRequest(values, actions);
          }}
        >
          {(formik) => (
            <form id="register" onSubmit={formik.handleSubmit}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent:'center'
                }}
              >
                <div style={{ width: "50%", padding:'1rem' }}>
                  <Input
                    label="First name"
                    id="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {/* <div>{formik.errors.firstName?formik.errors.firstName:null}</div> */}
                  {formik.errors.firstName && formik.touched.firstName ? (
                    <div className="form_error">{formik.errors.firstName}</div>
                  ) : null}

                  <Input
                    label="Email address"
                    id="email"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div className="form_error">{formik.errors.email}</div>
                  ) : null}
                  <div>
                    <Input
                      label="Address"
                      id="Address"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.Address && formik.touched.Address ? (
                      <div className="form_error">{formik.errors.Address}</div>
                    ) : null}
                    <select
                      id="region_select"
                      defaultValue="Region"
                      name="region"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="" disabled selected hidden>
                        Region
                      </option>
                      {wilayas.map((el) => (
                        <option value={el.name}>{el.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div style={{ width: "50%",padding:'1rem' }}>
                  <Input
                    label="Last name"
                    id="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.lastName && formik.touched.lastName ? (
                    <div className="form_error"> {formik.errors.lastName}</div>
                  ) : null}
                  <Input
                    label="Password"
                    id="Password"
                    type="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.Password && formik.touched.Password ? (
                    <div className="form_error">{formik.errors.Password}</div>
                  ) : null}
                  <Input
                    label="Phone Number"
                    id="PhoneNumber"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.PhoneNumber && formik.touched.PhoneNumber ? (
                    <div className="form_error">
                      {formik.errors.PhoneNumber}
                    </div>
                  ) : null}
                </div>
              </div>
              <button type="submit" className="login_btn" style={{ width:'80%'}}>
                Create an account
              </button>

            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;
