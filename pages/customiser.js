import styles from "../styles/Home.module.css";
import Canva from "../components/canvas";
import { useState } from "react";
import { Provider } from "react-redux";
import store, { globalActions } from "../store/index";
import Customizer from "../components/ControlPanel";
import Header from "../components/header";
import { useEffect } from "react";
import Redirect from "../components/notLogged";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Home() {
  // let [isLogged, setIsLogged] = useState(true);

  let router = useRouter();
  let isLogged = useSelector((state) => state.globalReducer.isLoggedin);
  console.log(isLogged, "WWWWWWWWW");
  let darkMode = useSelector((state) => state.globalReducer.darkMode);
  let backgroundColor = darkMode ? "#121212" : "#E4E7EB";
  let dispatch = useDispatch();
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

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("TOKEN"));

    console.log("START EFFECT", token);
    // fetch("http://localhost:920/getuser", {
    //   method: "GET",
    //   headers: {
    //     Authtoken: token,
    //   },
    // })
    //   .then((response) => {
    //     if (response.status == 200) {
    //       setIsLogged(true);
    //     } else if (response.status != 200) {
    //       setIsLogged(false);
    //     }
    //   })
    //   .then((data) => {
    //     console.log(data)
    //   });
    //  let request= async()=>{
    //   let response= await fetch('http://localhost:920/getuser',{
    //     method:'GET',
    //     headers:{
    //       Authtoken: token
    //     }
    //   })
    //   if(response.status==200){
    //     setIsLogged(true)
    //   }else if(response.status!=200){
    //     setIsLogged(false)
    //   }
    //   console.log("END EFFECT")
    //  }
    //  request()
    if (token && token.length > 0) {
      dispatch(globalActions.logIn());
    }
  }, [router]);

  return (
    <Provider store={store}>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: backgroundColor,
        }}
      >
        {isLogged ? (
          <motion.div
            className={styles.container}
            style={{ padding: 0, display: "flex" }}
            variants={containerVariants}
            initial="initial"
            animate="fadeIn"
            exit="exit"
          >
            <Header />
            <Canva />
            <Customizer />
            {/* <div style={{position:'absolute',height:"100vh", width:'50vw', left:0 , zIndex:'-1', backgroundImage:'url(background_4.jpg)'}}>

          </div> */}
          </motion.div>
        ) : (
          <Redirect />
        )}
      </div>
    </Provider>
  );
}
