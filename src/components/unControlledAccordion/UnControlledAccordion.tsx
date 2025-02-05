import { useState } from "react";

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
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <AccordionTitlte
        title={titleValue}
        callBack={() => {
          setCollapsed(!collapsed);
        }}
      />
      {/* <button
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      >
        TOGGLE
      </button> */}
      {!collapsed && <AccordionBody />}
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
