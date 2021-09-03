import '../styles/globals.css'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import Provider from '../context/Provider';
import { AnimatePresence } from 'framer-motion';
import 'font-awesome/css/font-awesome.css';



function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    components: {
      Modal: {
        baseStyle: (props) => ({
          dialog: {
            bg: '#EBEBEB',
            color:'1E3D59',
            maxWidth: ["85%", "85%", "85%"],

          }
        })
      }
    }
  });
  return (
    <Provider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
