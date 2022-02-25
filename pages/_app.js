import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import { AnimatePresence } from "framer-motion";
import  LoadingScreen  from "../components/loadingScreen";
import { useState } from "react";
import { useEffect } from "react";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import Head from 'next/head'

let persistor = persistStore(store);

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      // url !== router.pathname 
      //   ? setLoading(true)
      //   : setLoading(false);
      if(url !== router.pathname && url =='/customiser'){
        setLoading(true)
      }else{
        setLoading(false)
      }
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);
  console.log(router.pathname)
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <AnimatePresence>
        <LoadingScreen loading={loading} />
        <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        </Head>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      </PersistGate>

    </Provider>
  );
}

export default MyApp;
