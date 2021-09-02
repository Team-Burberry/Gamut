import '../styles/globals.css';
import { ChakraProvider } from "@chakra-ui/react";
import Provider from '../context/Provider';
import { AnimatePresence } from 'framer-motion';
import 'font-awesome/css/font-awesome.css';



function MyApp({ Component, pageProps }) {

  return (
    <Provider>
      <AnimatePresence exitBeforeEnter>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </AnimatePresence>
    </Provider>
  )
}

export default MyApp
