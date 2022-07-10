import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../lib/chakra-ui.js";
import { Fonts } from "../styles/fonts.jsx";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
