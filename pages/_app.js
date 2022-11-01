import { ChakraProvider } from "@chakra-ui/react";

//custom theme & fonts
import theme from "../theme";
import "../theme/fonts.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
