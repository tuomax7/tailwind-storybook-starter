import React from "react";
import { Meta, Story } from "@storybook/react";

import { Figma } from "../src/data";

const meta: Meta = {
  title: "Badges",
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: Figma.Badge,
    },
  },
};

export default meta;

import StoryLayout from "./StoryLayout";
import { Badge, BadgeProps } from "../src/Badge";
import { images } from "../src";
import { FiArrowRight, FiStar } from "react-icons/fi";

interface Props extends BadgeProps {
  darkMode: boolean;
}

const StoryBadges: Story<Props> = (args) => (
  <StoryLayout {...args} className="inline-flex flex-col space-y-2">
    <Badge {...args} LeadingIcon={<FiStar />}>
      Label
    </Badge>

    <Badge
      {...args}
      LeadingIcon={<img src={images.NL} alt="nl" className="w-4 h-4" />}
    >
      Label
    </Badge>

    <Badge {...args} TrailingIcon={<FiArrowRight />}>
      Label
    </Badge>
  </StoryLayout>
);

export const Default = StoryBadges.bind({});

Default.args = {
  darkMode: false,
  variant: "primary",
  size: "md",
};

Default.parameters = {
  controls: { exclude: ["LeadingIcon", "TrailingIcon", "className"] },
};
