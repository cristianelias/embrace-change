/** @jsx jsx */
// Dependencies
import { Global, css, jsx, ThemeProvider } from "@emotion/react";
import emotionReset from "emotion-reset";

// Components
import Header from "../components/Header/Header";

// Assets
import "@fontsource/raleway/800.css";
import "@fontsource/source-sans-pro";

const theme = {
  colors: {
    primary: "#B5EAEA",
    secondary: "#F38BA0",
    pInactive: "#EDF6E5",
    sInactive: "#FFBCBC",
    background: "FFFFFF",
    fontRegular: "#707A8A",
    fontStrong: "#1E2329",
  },
};

const globalCSSRules = css`
  ${emotionReset},

  html {
    font-size: 16px;
  }

  body {
    color: #3e3e3e;
    margin: 0;
    padding: 0;
    background-color: #f8fafd;
    font-family: "Source Sans Pro";
  }

  a {
    text-decoration: unset;
    color: inherit;
  }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalCSSRules} />

      <div
        css={css`
          display: grid;
          grid-template-columns: 10% auto 10%;
          grid-template-rows: 120px auto 200px;
        `}
      >
        <Header />
        <section
          css={css`
            background-color: #f8fafd;
            grid-column: 2/3;
            grid-row: 2/3;
          `}
        >
          {children}
        </section>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
