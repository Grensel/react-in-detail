import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Rating, RatingValueType } from "./Rating";
import { useState } from "react";

const meta: Meta<typeof Rating> = {
  component: Rating,
};

export default meta;

type Story = StoryObj<typeof Rating>;
export const FirstStory: Story = {
  args: {
    value: 0,
    onClick: () => onClickHandler(),
  },
};
const onClickHandler = action("onCHange");

export const EmptyStars = () => <Rating value={0} onClick={() => onClickHandler()} />;
export const Rating1 = () => <Rating value={1} onClick={() => onClickHandler()} />;
export const Rating2 = () => <Rating value={2} onClick={() => onClickHandler()} />;
export const Rating3 = () => <Rating value={3} onClick={() => onClickHandler()} />;
export const Rating4 = () => <Rating value={4} onClick={() => onClickHandler()} />;
export const Rating5 = () => <Rating value={5} onClick={() => onClickHandler()} />;
export const ChangeRating = () => {
  const [rating, setRating] = useState<RatingValueType>(0);
  return <Rating value={rating} onClick={setRating} />;
};
