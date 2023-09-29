import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import { FiGrid, FiList } from "react-icons/fi";

import { ButtonGroup, ButtonGroupProps } from "../src/ButtonGroup";

import { Figma, options1, options2 } from "../src";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "ButtonGroup",
  component: ButtonGroup,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: Figma.ButtonGroup,
    },
  },
};

export default meta;

interface Props extends ButtonGroupProps {
  darkMode: boolean;
}

const StoryButtonGroup: Story<Props> = (args) => {
  const [activeItem1, setActiveItem1] = useState<string>(options1[1].value);
  const [activeItem2, setActiveItem2] = useState<string>(options2[1].value);

  const [viewOption, setViewOption] = useState<string>("list");

  return (
    <StoryLayout {...args} className="space-y-4">
      <div>
        <ButtonGroup
          {...args}
          activeOption={activeItem1}
          setActiveOption={setActiveItem1}
          options={options1}
        />
      </div>
      <div>
        <ButtonGroup
          {...args}
          activeOption={activeItem2}
          setActiveOption={setActiveItem2}
          options={options2}
        />
      </div>
      <div>
        <ButtonGroup
          {...args}
          activeOption={viewOption}
          setActiveOption={setViewOption}
          options={[
            {
              content: <FiList size={20} />,
              value: "list",
            },
            {
              content: <FiGrid size={20} />,
              value: "grid",
            },
          ]}
        />
      </div>
    </StoryLayout>
  );
};

export const ButtonGroups = StoryButtonGroup.bind({});

ButtonGroups.args = {
  darkMode: false,
};
