import React, { useState, useEffect } from "react";
import { Meta, Story } from "@storybook/react";

import StoryLayout from "./StoryLayout";

import { Paginate, PaginationProps } from "../src/Paginate";

import { Figma } from "../src";

const meta: Meta = {
  title: "Pagination",
  component: Paginate,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: Figma.Paginate,
    },
  },
};

export default meta;

interface Props extends PaginationProps {
  darkMode: boolean;
}

const StoryPagination: Story<Props> = (args) => {
  const [page, setPage] = useState<number>(args.page);

  useEffect(() => {
    if (page >= 0 && page <= 10) setPage(args.page);
  }, [args.page]);

  return (
    <StoryLayout {...args} className="space-y-4">
      <Paginate
        page={page}
        setPage={setPage}
        totalPages={10}
        isMobile={args.isMobile}
      />
    </StoryLayout>
  );
};

export const PaginationItem = StoryPagination.bind({});

PaginationItem.args = {
  darkMode: false,
  page: 0,
  totalPages: 10,
  isMobile: false,
};
