type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void;
};
type AccordionTitltePropsType = {
  title: string;
  onChange: () => void;
};

export const Accordion = ({ titleValue, collapsed, onChange }: AccordionPropsType) => {
  console.log("Accordion rendering");
  return (
    <>
      <AccordionTitlte title={titleValue} onChange={onChange} />
      {!collapsed && <AccordionBody />}
    </>
  );
};

const AccordionTitlte = ({ title, onChange }: AccordionTitltePropsType) => {
  console.log("AccordionTitlte rendering");
  return (
    <>
      <h3 onClick={(event: React.MouseEvent<HTMLHeadingElement>) => onChange()}>--- {title} ---</h3>
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
