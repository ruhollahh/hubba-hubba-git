import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `'Vazirmatn', sans-serif`,
    body: `'Vazirmatn', sans-serif`,
  },
  styles: {
    global: {
      "html, body, #__next": {
        height: "100%",
      },
      "#__next": {
        isolation: "isolate",
      },
    },
  },
});
