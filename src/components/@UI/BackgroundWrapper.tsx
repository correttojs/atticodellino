import tw from "twin.macro";
import React from "react";
import { useGlobal } from "../Layout";

export const BackgroundWrapper: React.FC = ({ children }) => {
  const { colors } = useGlobal();
  return (
    <div
      css={`
        background-color: ${colors.lighter};
      `}
    >
      {children}
    </div>
  );
};
