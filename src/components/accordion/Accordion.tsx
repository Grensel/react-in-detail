type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
};
type AccordionTitltePropsType = {
  title: string;
};
type AccordionBodyPropsType = {
  collapsed: boolean;
};

export const Accordion = ({ titleValue, collapsed }: AccordionPropsType) => {
  console.log("Accordion rendering");
  return (
    <>
      <AccordionTitlte title={titleValue} />
      {!collapsed && <AccordionBody collapsed={collapsed} />}
    </>
  );
};

const AccordionTitlte = ({ title }: AccordionTitltePropsType) => {
  console.log("AccordionTitlte rendering");
  return (
    <>
      <h3>--- {title} ---</h3>
    </>
  );
};

const AccordionBody = ({ collapsed }: AccordionBodyPropsType) => {
  console.log("AccordionBody rendering");
  return (
    <>
      <ul>
        <li>1{collapsed}</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
};
