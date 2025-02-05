import type { Meta, StoryObj } from "@storybook/react";
import { UnControlledRating } from "./UnControlledRating";

const meta: Meta<typeof UnControlledRating> = {
  component: UnControlledRating,
};

export default meta;

type Story = StoryObj<typeof UnControlledRating>;
export const FirstStory: Story = {
  args: {
    value: 0,
  },
};

export const EmptyStars = () => <UnControlledRating value={0} />;
export const ChangeRating = () => {
  return <UnControlledRating value={0} />;
};
