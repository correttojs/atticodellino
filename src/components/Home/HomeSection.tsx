import React from "react";
import { Box, Heading, Text } from "grommet";

export const HomeSection: React.FC<{ title: string; content: string }> = ({
  title,
  content
}) => {
  if (!content) {
    return null;
  }
  return (
    <Box pad="large">
      <Heading level="2">{title}</Heading>
      <Text size={"large"}>{content}</Text>
    </Box>
  );
};
