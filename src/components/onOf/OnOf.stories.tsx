import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { OnOf } from "./OnOf";
import { useState } from "react";

const meta: Meta<typeof OnOf> = {
  component: OnOf,
};

export default meta;

type Story = StoryObj<typeof OnOf>;
export const FirstStory: Story = {
  args: {
    on: true,
    onChange: () => onChangeHandler(),
  },
};
const onChangeHandler = action("onCHange");

export const onMode = () => <OnOf on={true} onChange={action("on or off clocked")} />;
export const offMode = () => <OnOf on={false} onChange={action("on or off clocked")} />;
export const ChangeRating = () => {
  const [onOf, setOnOf] = useState(true);
  return <OnOf on={onOf} onChange={() => setOnOf(!onOf)} />;
};
