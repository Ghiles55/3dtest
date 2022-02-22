import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const loadingScreen = (props) => {
  let darkMode = useSelector((state) => state.globalReducer.darkMode);
  let backgroundColor = darkMode ? "#121212" : "#E4E7EB";
  const containerVariants = {
    initial: {
      x: "50vw",
      opacity: 0,
    },
    fadeIn: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 18,
        duration: 0.2,
        when: "beforeChildren",
      },
    },
    exit: {
      x: "-100vw",
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  console.log(props)
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: backgroundColor,
      }}
      className={props.loading ? "":"invisible"}
    >
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="fadeIn"
        exit="exit"
        style={{display:'flex',justifyContent:'center', alignItems:'center', height:"100%" }}
      >
          <CircularProgress size={150}/>
          <p style={{ fontSize:"1.5rem", margin:'4rem' }}>Loading assets, please wait...</p>
      </motion.div>
    </div>
  );
};

export default loadingScreen