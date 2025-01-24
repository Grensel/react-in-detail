export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;
type RatingPropsType = {
  value: RatingValueType;
  onClick: (value: RatingValueType) => void;
};
type StarPropsType = {
  selected: boolean;
  onClick: (value: RatingValueType) => void;
  value: RatingValueType;
};

export const Rating = ({ value, onClick }: RatingPropsType) => {
  console.log("Rating rendering");

  return (
    <div>
      <Star selected={value > 0} onClick={onClick} value={1} />
      <Star selected={value > 1} onClick={onClick} value={2} />
      <Star selected={value > 2} onClick={onClick} value={3} />
      <Star selected={value > 3} onClick={onClick} value={4} />
      <Star selected={value > 4} onClick={onClick} value={5} />
    </div>
  );
};

const Star = ({ selected, onClick, value }: StarPropsType) => {
  console.log("Star rendering");
  const inSelected = selected ? <b>Star</b> : "Star";
  return <span onClick={() => onClick(value)}>{inSelected}</span>;
};
