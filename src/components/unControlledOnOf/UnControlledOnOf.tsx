import { useState } from "react";
type UnControlledOnOfPropsType = {
  callBack: (b: boolean) => void;
};
export const UnControlledOnOf = ({ callBack }: UnControlledOnOfPropsType) => {
  console.log("OnOf rendering");
  const [on, setOn] = useState(false);
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

  const onClicled = () => {
    setOn(true);
    callBack(true);
  };
  const offClicled = () => {
    setOn(false);
    callBack(false);
  };

  return (
    <div style={block}>
      <div style={onStyle} onClick={onClicled}>
        on
      </div>
      <div style={offStyle} onClick={offClicled}>
        of
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
};
