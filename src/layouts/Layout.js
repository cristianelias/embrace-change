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

const globalCSSRules = css`
  ${emotionReset},

  html {
    font-size: 16px;
    min-width: 340px;
  }

  body {
    color: #3e3e3e;
    margin: 0;
    padding: 0;
    background-color: #f8fafd;
    font-family: "Source Sans Pro";
    background-image: linear-gradient(
      -225deg,
      #a4c2f9 0%,
      #c5c1ff 20%,
      #ffbac3 100%
    );
  }

  a {
    text-decoration: unset;
    color: inherit;
  }
`;

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

const Container = styled.section`
  display: grid;
  grid-template-columns: 10% auto 10%;
  grid-template-rows: 120px auto 200px;
  justify-content: center;

  @media (max-width: 992px) {
    grid-template-columns: 6% auto 6%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 4% auto 4%;
  }
`;

const MainContent = styled.section`
  grid-column: 2/3;
  grid-row: 2/3;
  margin: 80px 0;
  min-height: 400px;
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
