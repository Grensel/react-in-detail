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
const onClick = action("some items was clicked");

export const CollapsedAccordion = () => {
  return (
    <Accordion
      titleValue={"Collapsed Accordion"}
      collapsed={true}
      onChange={onChangeHandler}
      items={[]}
      onClick={onClick}
    />
  );
};

export const OpenedAccordion = () => {
  return (
    <Accordion
      titleValue={"Opened Accordion"}
      collapsed={false}
      onChange={onChangeHandler}
      items={[
        { title: "Dimych", value: 1 },
        { title: "Valera", value: 2 },
        { title: "Artem", value: 3 },
        { title: "Victor", value: 4 },
      ]}
      onClick={onClick}
    />
  );
};

export const AccordionDemo = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Accordion
      titleValue={"Accordion"}
      collapsed={collapsed}
      onChange={() => setCollapsed(!collapsed)}
      items={[
        { title: "Dimych", value: 1 },
        { title: "Valera", value: 2 },
        { title: "Artem", value: 3 },
        { title: "Victor", value: 4 },
      ]}
      onClick={value => {
        alert(`${value} click`);
      }}
    />
  );
};
