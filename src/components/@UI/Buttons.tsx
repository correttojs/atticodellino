import styled from "styled-components";
import tw from "twin.macro";

export const Button = styled.button`
  ${tw`text-white tracking-wider py-2 px-6 rounded`}
  background-color: ${({ theme }: { theme }) => theme.global.colors.brand};
  &:hover {
    background-color: ${({ theme }: { theme }) => theme.global.colors.active};
  }
`;
