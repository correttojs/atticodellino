import { Box, Grommet } from "grommet";
import { createGlobalStyle } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { gqlClient } from "./gqlClient";
import { theme } from "./theme";
import React, { useEffect, useState } from "react";
import { GlobalType } from "../../graphql/_airbn.types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { GlobalContext } from "./useGlobal";

export const GlobalStyle = createGlobalStyle`
    html, body {
      overflow-x:hidden ;
    } 
    body {
        margin: 0;
        font-family: Raleway;
    }
    a{
      color: #fff !important;
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
      </GlobalContext.Provider>
    </>
  );
};

export { useGlobal } from "./useGlobal";
