// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

const pic1 = require("./1.jpg");
const pic2 = require("./2.jpg");
const pic3 = require("./3.jpg");
import { Hero } from "../Hero";

export default {
  title: "Home/Hero",
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
