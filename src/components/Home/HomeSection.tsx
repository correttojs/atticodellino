import React from "react";
import { P, H2, FlexL } from "../Layout/HTML";

export const HomeSection: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  if (!content) {
    return null;
  }
  return (
    <FlexL>
      <H2>{title}</H2>
      <P>{content}</P>
    </FlexL>
  );
};
