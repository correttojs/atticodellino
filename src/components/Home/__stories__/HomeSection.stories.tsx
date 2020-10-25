// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { HomeSection } from "../HomeSection";
import { SampleText } from "./sampletext";

export default {
  title: "Home/HomeSection",
} as Meta;

const Template: Story = (args) => (
  <HomeSection title={"Title Sample"} content={SampleText} />
);

export const HeroStory = Template.bind({});
