import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Select } from "./Select";
import { useState } from "react";

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;
export const FirstStory: Story = {
  args: {
    value: "0",
    onChange: () => onChangeHandler(),
    items: [
      { value: "1", title: "Minsk" },
      { value: "2", title: "Moskow" },
      { value: "3", title: "Kiev" },
    ],
  },
};
const onChangeHandler = action("onCHange");

export const WithcValue = () => {
  const [value, setValue] = useState("2");
  return (
    <Select
      value={value}
      onChange={setValue}
      items={[
        { value: "1", title: "Minsk" },
        { value: "2", title: "Moskow" },
        { value: "3", title: "Kiev" },
      ]}
    />
  );
};

export const WithoutValue = () => {
  const [value, setValue] = useState(null);
  return (
    <Select
      onChange={setValue}
      value={value}
      items={[
        { value: "1", title: "Minsk" },
        { value: "2", title: "Moskow" },
        { value: "3", title: "Kiev" },
      ]}
    />
  );
};
