import type { Meta, StoryObj } from "@storybook/react";
import { UnControlledAccordion } from "./UnControlledAccordion";

const meta: Meta<typeof UnControlledAccordion> = {
  component: UnControlledAccordion,
};

export default meta;

type Story = StoryObj<typeof UnControlledAccordion>;
export const FirstStory: Story = {
  args: {
    titleValue: "Accordion",
  },
};

export const EmptyStars = () => <UnControlledAccordion titleValue={"Accordion"} />;
export const ChangeAccordion = () => {
  return <UnControlledAccordion titleValue={"Accordion"} />;
};
