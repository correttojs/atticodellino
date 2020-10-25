// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import pic1 from "./1.jpg";
import pic2 from "./2.jpg";
import pic3 from "./3.jpg";
import { Hero } from "../Hero";

export default {
  title: "Hero",
} as Meta;

const A = styled.a`
  ${tw`m-4`}
`;

const SampleText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.`;

const Template: Story = (args) => (
  <>
    <Hero
      photos={[
        {
          id: 406200537,
          picture: pic1,
          x_large_cover: pic1,
          caption: "Pic 1",
        },
        {
          id: 406200123,
          picture: pic2,
          x_large_cover: pic2,
          caption: "Pic 2",
        },
        ,
        {
          id: 123,
          picture: pic3,
          x_large_cover: pic3,
          caption: "Pic 3",
        },
      ]}
    />
  </>
);

export const HeroStory = Template.bind({});
