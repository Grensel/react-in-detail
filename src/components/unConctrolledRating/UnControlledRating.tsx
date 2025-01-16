import { useState } from "react";

type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5;
};
type StarPropsType = {
  selected: boolean;
  onClickHandler: () => void;
};
export const UnControlledRating = (props: RatingPropsType) => {
  console.log("Rating rendering");
  const [value, setValue] = useState(props.value);

  const changeValue = (n: 0 | 1 | 2 | 3 | 4 | 5) => () => setValue(n);

  return (
    <div>
      <Star selected={value > 0} onClickHandler={() => setValue(1)} />
      <Star selected={value > 1} onClickHandler={changeValue(2)} />
      <Star selected={value > 2} onClickHandler={changeValue(3)} />
      <Star selected={value > 3} onClickHandler={changeValue(4)} />
      <Star selected={value > 4} onClickHandler={changeValue(5)} />
    </div>
  );
};

const Star = ({ selected, onClickHandler }: StarPropsType) => {
  console.log("Star rendering");
  const inSelected = selected ? <b>Star</b> : "Star";
  return <span onClick={onClickHandler}>{inSelected}</span>;
};
