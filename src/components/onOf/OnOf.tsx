export type OnOfType = boolean;
type OnOfPropsType = {
  on: OnOfType;
  onChange: () => void;
};

export const OnOf = ({ on, onChange }: OnOfPropsType) => {
  console.log("OnOf rendering");
  console.log(on);

  const block = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    margin: "20px",
  };
  const onStyle = {
    height: "30px",
    width: "40px",
    border: "1px solid black",
    backgroundColor: on ? "green" : "grey",
  };
  const offStyle = {
    height: "30px",
    width: "40px",
    border: "1px solid black",
    backgroundColor: on ? "grey" : "red",
  };
  const indicatorStyle = {
    marginLeft: "10px",
    width: "10px",
    height: "10px",
    border: "1px solid black",
    borderRadius: "5px",
    backgroundColor: on ? "green" : "red",
  };
  return (
    <div style={block}>
      <div style={onStyle} onClick={onChange}>
        on
      </div>
      <div style={offStyle} onClick={onChange}>
        of
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
};
