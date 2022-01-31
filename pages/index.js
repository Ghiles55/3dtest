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

export default function Home() {
  let [isLogged, setIsLogged] = useState(true);

  useEffect(async () => {
    let token = JSON.parse(localStorage.getItem("TOKEN"));
    

    fetch("http://localhost:840/getuser", {
      method: "GET",
      headers: {
        Authtoken: token,
      },
    })
      .then((response) => {
        if (response.status == 200) {
          setIsLogged(true);
        } else if (response.status != 200) {
          setIsLogged(false);
        }
      })
      .then((data) => {
        console.log(data)
      });
  }, []);

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
        </div>
      ) : (
        <Redirect/>
      )}
    </Provider>
  );
}
