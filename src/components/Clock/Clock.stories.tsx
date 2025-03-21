
import type { Meta, StoryObj } from "@storybook/react";
import { Clock } from "./Clock";
const meta: Meta<typeof Clock> = {
  title: "Clock",
  component: Clock,
};
export default meta;
type Story = StoryObj<typeof Clock>;
export const FirstStory: Story = {
  args: {
    mode: 'analog'
  },
};
export const SecondStory: Story = {
  args: {
    mode: 'digital'
  },
};
