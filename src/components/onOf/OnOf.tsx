type OnOfPorpsType = {
  active: boolean;
};

export const OnOf = ({ active }: OnOfPorpsType) => {
  const block = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    margin: "20px",
  };
  const greenBlub = {
    height: "30px",
    width: "40px",
    border: "1px solid black",
    backgroundColor: active ? "green" : "greey",
  };
  const redBlub = {
    height: "30px",
    width: "40px",
    border: "1px solid black",
    backgroundColor: active ? "greey" : "red",
  };
  const indicatorStyle = {
    marginLeft: "10px",
    width: "10px",
    height: "10px",
    border: "1px solid black",
    borderRadius: "5px",
    backgroundColor: active ? "green" : "red",
  };
  return (
    <div style={block}>
      <div style={greenBlub}>on</div>
      <div style={redBlub}>of</div>
      <div style={indicatorStyle}></div>
    </div>
  );
};
