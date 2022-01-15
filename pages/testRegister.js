import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

let TestRegister = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "40rem",
            height: "40rem",
            alignItems: "center",
            justifyContent: "center",
            flexDirection:'column'
          }}
        >
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="Password">Password</FormLabel>
            <Input id="Password" type="Password" />
            <FormHelperText>We'll never share your Password.</FormHelperText>
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default TestRegister;
