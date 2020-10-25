import styled from "styled-components";
import tw from "twin.macro";

export const Button = styled.button`
  ${tw`text-white tracking-wider py-2 px-6 rounded`}
`;

export const ButtonPink = styled(Button)`
  ${tw`bg-pink-600 hover:bg-pink-700`}
`;

export const ButtonBlue = styled(Button)`
  ${tw`bg-blue-500 hover:bg-blue-700`}
`;

export const ButtonYellow = styled(Button)`
  ${tw`bg-yellow-500 hover:bg-yellow-600`}
`;
