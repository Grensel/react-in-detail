type ItemsType = {
  title: string;
  value: any;
};
type SelectPropsType = {
  value: any;
  onChange: (value: any) => void;
  items: ItemsType[];
};

export const Select = ({ value, onChange, items }: SelectPropsType) => {
  return (
    <div>
      <div>{}</div>
      {items.map((i, index) => (
        <div key={index}>{i.title}</div>
      ))}
    </div>
  );
};
