import styled from "styled-components";
import tw from "twin.macro";
import { ThemeType } from "../Layout/theme";

export const Button = styled.button`
  ${tw`text-white tracking-wider py-2 px-6 rounded`}
  background-color: ${({ theme }: ThemeType) => theme.colors.brand};
  &:hover {
    background-color: ${({ theme }: ThemeType) => theme.colors.active};
  }
`;
