import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import Provider from '../context/Provider';
import 'font-awesome/css/font-awesome.css'

function MyApp({ Component, pageProps }) {

  return (
    <Provider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
