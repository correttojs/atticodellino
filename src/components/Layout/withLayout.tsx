import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { createGlobalStyle, ThemeProvider } from "styled-components";

import React from "react";
import { GlobalType } from "../../graphql/_airbn.types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { GlobalContext, theme } from "./useGlobal";
import tw from "twin.macro";
import { MQ_MOBILE } from "./MediaQueries";
import { Contacts } from "./Contact";
import { queryClient } from "../useReactQuery";

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

    a,button{
      cursor:pointer;
    }
`;

export const withLayout = (Comp: any) => {
  const Body = (props: { global: GlobalType }) => {
    return (
      <>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalContext.Provider value={props.global}>
            <ThemeProvider theme={theme(props.global)}>
              <div css={tw`flex flex-col items-center`}>
                <Header />
                <div
                  css={`
                    ${tw`md:hidden fixed bg-white w-full`}
                    top:77px;
                    left: 0px;
                  `}
                >
                  <Contacts direction="row" />
                </div>
                <div
                  css={`
                    margin-top: 85px;
                    @media ${MQ_MOBILE} {
                      margin-top: 120px;
                    }
                  `}
                >
                  <Comp {...props}></Comp>
                </div>
                <Footer />
              </div>
            </ThemeProvider>
          </GlobalContext.Provider>
        </QueryClientProvider>
      </>
    );
  };
  Body.displayName = "Body";
  return Body;
};
