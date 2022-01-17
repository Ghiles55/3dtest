import { Formik, useFormik } from "formik";


import { motion } from "framer-motion";
import Input from "../components/input";
import wilayas from "../public/wilayas";
import { useRouter } from 'next/router'
import {useState} from 'react'

// let MotionInput = motion(Input);

let RegisterForm = () => {
  let router =useRouter()
  let [status,setStatus]=useState("")
  const validate = (values) => {
    let errors = {};
    if (!values.firstName || values.firstName.length < 2 || values.firstName.length > 15) {
      errors.firstName = "Your name has to be between 2 and 15 characters";
    }
    if (!values.lastName || values.lastName.length < 2 || values.lastName.length > 15) {
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
    console.log(errors,values.Password,values.Password.length)
    return errors;
  };
  async function registerRequest(values, actions) {
    try{
      let response = await fetch("http://localhost:780/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values
        }),
      });
      let data = await response.json();
      console.log(response.status);
      if(response.status==200){
        router.push('/login')
      }else{
        setStatus(data)
      }

    }catch(e){
      console.log(e)
    }
  }
  return (
    <div
    className="center_container"
    >
      <div className="register_card" style={{}}>
        <span> Register</span>
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
            console.log(values,actions)
            registerRequest(values,actions)
          }}
        >
          {(formik) => (
            <form id="register" onSubmit={formik.handleSubmit}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "50%" }}>
                  <Input
                    label="First name"
                    id="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                   <div>{formik.errors.firstName?formik.errors.firstName:null}</div>
                </div>
                <div style={{ width: "50%" }}>
                  <Input
                    label="Last name"
                    id="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div>{formik.errors.lastName?formik.errors.lastName:null}</div>
                </div>
              </div>

              <Input
                label="Email address"
                id="email"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div>{formik.errors.email ? formik.errors.email : null}</div>
              <Input
                label="Password"
                id="Password"
                type="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div>{formik.errors.Password?formik.errors.Password:null}</div>
              <div>
                <Input
                  label="Address"
                  id="Address"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div>{formik.errors.Address?formik.errors.Address:null}</div>
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

              <Input
                label="Phone Number"
                id="PhoneNumber"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div>{formik.errors.PhoneNumber?formik.errors.PhoneNumber:null}</div>
              <button type="submit">Submit</button>
              <div>{formik.errors?formik.errors.region:null}</div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;
