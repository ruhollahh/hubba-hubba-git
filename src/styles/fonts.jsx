import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Vazirmatn";
        font-style: normal;
        font-display: swap;
        src: url(/assets/fonts/vazirmatn.woff2)
            format("woff2 supports variations"),
          url(/assets/fonts/vazirmatn.woff2)
            format("woff2-variations");
        font-weight: 100 900;
      }
        `}
  />
);
