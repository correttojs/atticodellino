import React from "react";

import styled from "styled-components";
import { Header } from "../Header";
import { Box } from "grommet";
import { Footer } from "../Footer";

const Content = styled(Box)`
  margin-top: 80px;
`;

const Container = styled(Box)`
  /* max-width: 1200px; */
`;

export const Layout: React.FC = ({ children }) => {
  return (
    <Container align="center">
      <Header />
      <Content>{children}</Content>

      <Footer />
    </Container>
  );
};
