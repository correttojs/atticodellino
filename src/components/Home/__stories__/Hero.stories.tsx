// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import pic1 from "./1.jpg";
import pic2 from "./2.jpg";
import pic3 from "./3.jpg";
import { Hero } from "../Hero";

export default {
  title: "Hero",
} as Meta;

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
