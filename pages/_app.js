import "../styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store from "../store";
import {AnimatePresence} from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <Provider store={store}>
      <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
