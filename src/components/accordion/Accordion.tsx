type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
};

export const Accordion = ({ titleValue, collapsed }: AccordionPropsType) => {
  console.log("Accordion rendering");
  return (
    <>
      <AccordionTitlte title={titleValue} />
      <AccordionBody collapsed={collapsed} />
    </>
  );
};

type AccordionTitltePropsType = {
  title: string;
};

const AccordionTitlte = ({ title }: AccordionTitltePropsType) => {
  console.log("AccordionTitlte rendering");
  return (
    <>
      <h3>--- {title} ---</h3>
    </>
  );
};

type AccordionBodyPropsType = {
  collapsed: boolean;
};

const AccordionBody = ({ collapsed }: AccordionBodyPropsType) => {
  console.log("AccordionBody rendering");
  if (collapsed === true) {
    return (
      <>
        <ul>
          <li>1{collapsed}</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </>
    );
  }
  return;
};
