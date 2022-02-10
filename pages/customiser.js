import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Canva from "../components/canvas";
import Color from "../components/Color";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "../store/index";
import Customizer from "../components/ControlPanel";
import Header from "../components/header";
import { useEffect } from "react";
import Redirect from "../components/notLogged";
import Link from "next/link";
import { GiJetFighter } from "react-icons/gi";
import { useRouter } from "next/router";

export default function Home() {
  let [isLogged, setIsLogged] = useState(true);
  console.log(isLogged,"WWWWWWWWW")
  let router= useRouter()

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("TOKEN"));
    
    console.log("START EFFECT")
    // fetch("http://localhost:880/getuser", {
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
  //   let response= await fetch('http://localhost:880/getuser',{
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
  }, [router.pathname]);

 

  return (
    <Provider store={store}>
      {isLogged ? (
        <div
          className={styles.container}
          style={{ padding: 0, display: "flex" }}
        >
          <Header />
          <Canva />
          <Customizer />
          {/* <div style={{position:'absolute',height:"100vh", width:'50vw', left:0 , zIndex:'-1', backgroundImage:'url(background_4.jpg)'}}>

          </div> */}
        </div>
      ) : (
        <Redirect/>
      )}
    </Provider>
  );
}
