import { Formik, useFormik } from "formik";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Input from '../components/input'

// let MotionInput = motion(Input);

let RegisterForm = () => {
  // let formik=useFormik({
  //     initialValues: {
  //       email: '',
  //     },
  //     validate:'',
  //     onSubmit: values => {
  //       alert(JSON.stringify(values, null, 2));
  //     },
  //   })
  // console.log(formik)
  return (
      <div style={{
          display:"flex",
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'column',
          width:"100vw",
          height:"100vh"
      }}>
        <div className="register_card" style={{
         
        }}>
          <span> Register</span>
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {/* <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <MotionInput
          id="email"
          type="email"
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl> */}
      <form id="register">
        
        {/* <label htmlFor="email">Email address</label><br/>
        <motion.input
        id="email"
        type='email'
        /> */}
        <div style={{display:'flex',flexDirection:'row'}}>
          <div style={{width:'50%'}}>
          <Input label='First name' id='Fname' type='text'  />
          </div>
          <div  style={{width:'50%'}}>
          <Input label='Last name' id='Lname' type='text'  />
          </div>
        </div>
        <Input label='Email address' id='email' type='email' />
        <Input label='Password' id='Password' type='Password' />
        <Input label='Address' id='Address' type='text' />

      </form>
    </Formik>
        </div>
    
      </div>
  );
};

export default RegisterForm;
