import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Accordion } from "./Accordion";
import { useState } from "react";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;
export const FirstStory: Story = {
  args: {
    titleValue: "hello",
    collapsed: true,
    onChange: () => onChangeHandler(),
  },
};

const onChangeHandler = action("onCHange");

export const CollapsedAccordion = () => {
  return (
    <Accordion titleValue={"Collapsed Accordion"} collapsed={true} onChange={onChangeHandler} />
  );
};

export const OpenedAccordion = () => {
  return <Accordion titleValue={"Opened Accordion"} collapsed={false} onChange={onChangeHandler} />;
};

export const AccordionDemo = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Accordion
      titleValue={"Accordion"}
      collapsed={collapsed}
      onChange={() => setCollapsed(!collapsed)}
    />
  );
};
