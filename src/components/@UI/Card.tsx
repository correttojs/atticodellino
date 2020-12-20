import React from "react";
import tw from "twin.macro";
import { H2 } from "./Texts";

export const Card: React.FC<{
  img: string;
  title: string;
  message?: string;
  onClick?: (event: any) => void;
}> = ({ img, onClick, title, message }) => {
  return (
    <div
      onClick={onClick}
      css={[
        tw`max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden`,
        onClick && tw`cursor-pointer`,
      ]}
    >
      <img
        css={tw`h-48 w-full object-cover `}
        src={img}
        alt="Man looking at item at a store"
      />
      <div css={tw`px-8`}>
        <H2 css={tw`p-4`}>{title}</H2>
        {message && <p css={tw`mt-2 text-gray-500`}>{message}</p>}
      </div>
    </div>
  );
};
