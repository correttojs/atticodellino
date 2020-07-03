import { Grommet } from "grommet";
import { createGlobalStyle } from "styled-components";

import { ApolloProvider } from "@apollo/react-hooks";
import { gqlClient } from "./gqlClient";
import { Layout } from "./Layout";
import { theme } from "../CssVar/theme";
import React, { useContext, useEffect, useState } from "react";
import { GlobalType } from "../graphql/airbnDetail";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
    a{
      color: #fff !important;
    }
`;

export const GlobalContext = React.createContext<GlobalType & { setLang? }>(
  null
);

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  return context;
};

const GrommetComp: React.FC = ({ children }) => {
  const global = useGlobal();
  return (
    <Grommet theme={theme(global.apartment)}>
      <ApolloProvider client={gqlClient}>
        <Layout>{children}</Layout>
      </ApolloProvider>
    </Grommet>
  );
};

export const withGrommetTheme = (global?: GlobalType) => (Comp) => (props: {
  global?: GlobalType;
}) => {
  const [currentLang, setLang] = useState(global?.lang);
  useEffect(() => {
    if (
      global &&
      localStorage.getItem("lang") &&
      global.lang !== localStorage.getItem("lang")
    ) {
      setLang(localStorage.getItem("lang") as any);
    }
  }, []);
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
        <GrommetComp>
          <Comp {...props}></Comp>
        </GrommetComp>
      </GlobalContext.Provider>
    </>
  );
};
