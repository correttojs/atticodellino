import { useGlobal, GlobalStyle } from "../src/components/withGrommetTheme";
import { Grommet } from "grommet";

import { RouterContext } from "next/dist/next-server/lib/router-context";
import { theme } from "../src/components/CssVar/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const router = {
  pathname: "/",
  route: "/users/$user",
  query: { q: "query_param1" },
  asPath: "/test_pathname?q=query_param1#hash_param1",
};

export const decorators = [
  (Story) => {
    const global = useGlobal();
    return (
      <RouterContext.Provider value={router}>
        <GlobalStyle />
        <Grommet theme={theme(global)}>
          <Story />
        </Grommet>
      </RouterContext.Provider>
    );
  },
];
