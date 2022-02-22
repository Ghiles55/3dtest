import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import { AnimatePresence } from "framer-motion";
import  LoadingScreen  from "../components/loadingScreen";
import { useState } from "react";
import { useEffect } from "react";

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
      <AnimatePresence>
        <LoadingScreen loading={loading} />
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
