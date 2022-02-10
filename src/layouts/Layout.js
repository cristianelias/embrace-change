/** @jsx jsx */
// Dependencies
import { Global, css, jsx, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import emotionReset from "emotion-reset";

// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// Assets
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/800.css";
import "@fontsource/source-sans-pro";

const theme = {
  header: {
    background: `linear-gradient(
      3deg
      , rgb(0 25 47 / 25%) 0%, rgb(17 17 17) 55%, rgb(0 25 47 / 48%) 100%)`,
  },
  body: {
    background: `linear-gradient(
        3deg
        , rgba(0,25,47,1) 0%, rgba(9,53,87,1) 60%, rgba(0,25,47,1) 100%);`,
  },
  ui: {
    switches: {
      background: `rgb(251 249 249 / 19%)`,
      backgroundSelected: `rgb(223 226 231)`,
    },
    container: {
      boxShadow: `rgb(0 0 0) 0px 3px 8px`,
      background: `#062442`,
    },
  },
  coinList: {
    row: {
      boxShadow: `rgb(0 0 0 / 52%) 0px 8px 24px;`,
      hoverBoxShadow: `rgb(0 0 0) 0px 3px 8px`,
      hoverBackground: `#00172d`,
    },
    listHeader: {
      color: `#e8ebeec7`,
    },
  },
  footer: {
    background: `rgb(12 12 12)`,
    imagesBorder: `rgb(0 38 68)`,
    fontColor: `rgb(234, 236, 239)`,
  },
  text: {
    primary: `rgb(234, 236, 239)`,
  },
};

const globalCSSRules = css`
  ${emotionReset},

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    min-width: 340px;
    min-height: 100vh;
  }

  body {
    color: ${theme.text.primary};
    margin: 0;
    padding: 0;
    background: ${theme.body.background};
    font-family: "Source Sans Pro";
  }

  a {
    text-decoration: unset;
    color: inherit;
  }
`;

const Container = styled.section`
  display: grid;
  grid-template-columns: 10% auto 10%;
  grid-template-rows: 140px auto auto;
  justify-content: center;

  @media (max-width: 992px) {
    grid-template-columns: 6% auto 6%;
  }
`;

const MainContent = styled.section`
  grid-column: 2/3;
  grid-row: 2/3;
  margin: 80px 0px 100px;
  min-height: 600px;
  display: flex;
  justify-content: center;
  max-width: 1600px;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalCSSRules} />

      <Container>
        <Header />
        <MainContent>{children}</MainContent>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
