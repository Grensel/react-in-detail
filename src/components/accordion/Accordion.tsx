type ItemType = {
  title: string;
  value: any;
};
type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void;
  items: ItemType[];
  onClick: (value: any) => void;
};
type AccordionTitltePropsType = {
  title: string;
  onChange: () => void;
};
type AccordionBodyPropsType = {
  items: ItemType[];
  onClick: (value: any) => void;
};

export const Accordion = ({
  titleValue,
  collapsed,
  onChange,
  items,
  onClick,
}: AccordionPropsType) => {
  console.log("Accordion rendering");
  return (
    <>
      <AccordionTitlte title={titleValue} onChange={onChange} />
      {!collapsed && <AccordionBody items={items} onClick={onClick} />}
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

const AccordionBody = ({ items, onClick }: AccordionBodyPropsType) => {
  console.log("AccordionBody rendering");
  const map = () => {
    return items.map((el, index) => (
      <li
        onClick={() => {
          onClick(el.value);
        }}
        key={index}
      >
        {el.title}
      </li>
    ));
  };
  return (
    <>
      <ul>{map()}</ul>
    </>
  );
};
