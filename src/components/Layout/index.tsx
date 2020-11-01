import { Box, Grommet } from "grommet";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { gqlClient } from "./gqlClient";
import { theme } from "./theme";
import React, { useState } from "react";
import { GlobalType } from "../../graphql/_airbn.types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { GlobalContext } from "./useGlobal";
import tw from "twin.macro";
import { MQ_MOBILE } from "./MediaQueries";

export const GlobalStyle = createGlobalStyle`
    html, body {
      overflow-x:hidden ;
    } 
    body {
        margin: 0;
        font-family: Raleway;
    }

    .ReactModal__Overlay{
      ${tw`z-20`}

    }
    @media ${MQ_MOBILE} {
      .ReactModal__Content{
        top:0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
      }
    }
`;

export const withGrommetTheme = (global?: GlobalType) => (Comp) => (props: {
  global?: GlobalType;
}) => {
  const [currentLang, setLang] = useState(global?.lang);

  if (!props.global ?? global) {
    console.log(props);
    return null;
  }

  return (
    <>
      <GlobalStyle />
      <GlobalContext.Provider
        value={
          global ? { ...global, lang: currentLang, setLang } : props.global
        }
      >
        <ThemeProvider theme={theme(props.global)}>
          <Grommet theme={theme(props.global)}>
            <ApolloProvider client={gqlClient}>
              <Box align="center">
                <Header />
                <Box margin={{ top: "80px" }}>
                  <Comp {...props}></Comp>
                </Box>
                <Footer />
              </Box>
            </ApolloProvider>
          </Grommet>
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  );
};

export { useGlobal } from "./useGlobal";
