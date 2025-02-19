import { useReducer } from "react";
import { reducer, toggle_collapsed } from "./reducer";

type AccordionPropsType = {
  titleValue: string;
};
type AccordionTitltePropsType = {
  title: string;
  defalt?: boolean;
  callBack: () => void;
};

export const UnControlledAccordion = ({ titleValue }: AccordionPropsType) => {
  console.log("Accordion rendering");
  const [state, dispatch] = useReducer(reducer, { collapsed: false });

  return (
    <>
      <AccordionTitlte
        title={titleValue}
        callBack={() => {
          dispatch({ type: toggle_collapsed });
        }}
      />
      {/* <button
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      >
        TOGGLE
      </button> */}
      {!state.collapsed && <AccordionBody />}
    </>
  );
};

const AccordionTitlte = ({ title, callBack }: AccordionTitltePropsType) => {
  console.log("AccordionTitlte rendering");
  return (
    <>
      <h3 onClick={callBack}>--- {title} ---</h3>
    </>
  );
};

const AccordionBody = () => {
  console.log("AccordionBody rendering");
  return (
    <>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
};
