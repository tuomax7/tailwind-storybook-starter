import React from "react";
import { Meta, Story } from "@storybook/react";

import { Figma } from "../src/data";

const meta: Meta = {
  title: "Typography",
  component: Typography,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: Figma.Typography,
    },
  },
};

export default meta;

import StoryLayout from "./StoryLayout";
import Typography, { TypographyProps } from "../src/Typography";

interface Props extends TypographyProps {
  darkMode: boolean;
}

const HeadingTypographies: Story<Props> = (args) => (
  <StoryLayout {...args}>
    <Typography {...args} variant="h1">
      Heading 1
    </Typography>
    <Typography {...args} variant="h2">
      Heading 2
    </Typography>
    <Typography {...args} variant="h3">
      Heading 3
    </Typography>
    <Typography {...args} variant="h4">
      Heading 4
    </Typography>
    <Typography {...args} variant="h5">
      Heading 5
    </Typography>
    <Typography {...args} variant="h6">
      Heading 6
    </Typography>
  </StoryLayout>
);

export const Heading = HeadingTypographies.bind({});

Heading.args = {
  customWeight: "regular",
  className: "",
  darkMode: false,
};

Heading.parameters = {
  controls: { exclude: ["variant", "customColor", "className"] },
};

const TextTypographies: Story<Props> = (args) => (
  <StoryLayout {...args}>
    <Typography {...args} variant="xl">
      Text xl
    </Typography>
    <Typography {...args} variant="lg">
      Text lg
    </Typography>
    <Typography {...args} variant="md">
      Text md
    </Typography>
    <Typography {...args} variant="sm">
      Text sm
    </Typography>
    <Typography {...args} variant="xs">
      Text xs
    </Typography>
  </StoryLayout>
);

export const Texts = TextTypographies.bind({});

Texts.args = {
  darkMode: false,
  customWeight: "regular",
};

Texts.parameters = {
  controls: { exclude: ["variant", "customColor", "className"] },
};
