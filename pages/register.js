import { Formik, useFormik } from "formik";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

let MotionInput = motion(Input);

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

    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <MotionInput
          id="email"
          type="email"
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </Formik>
    
      </div>
  );
};

export default RegisterForm;
