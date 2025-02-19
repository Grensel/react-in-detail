import { useState, KeyboardEvent, useEffect } from "react";
import styles from "./Select.module.css";
type ItemType = {
  title: string;
  value: any;
};

type SelectPropsType = {
  value?: any;
  onChange: (value: any) => void;
  items: ItemType[];
};

export const Select = ({ value, onChange, items }: SelectPropsType) => {
  const [active, setActive] = useState(false);
  const [hoveredElementValue, setHoveredElementValue] = useState(value);

  const seletedItem = items.find(i => i.value === value);
  const hoveredItem = items.find(i => i.value === hoveredElementValue);

  useEffect(() => {
    setHoveredElementValue(value);
  }, [value]);

  const toggleItems = () => setActive(!active);

  const onItemClick = (value: any) => {
    onChange(value);
    toggleItems();
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      for (let i = 0; i < items.length; i++) {
        if (items[i].value === hoveredElementValue) {
          const pretendentElement = e.key === "ArrowDown" ? items[i + 1] : items[i - 1];
          if (pretendentElement) {
            onChange(pretendentElement.value);
            return;
          }
        }
      }
      if (!seletedItem) onChange(items[0].value);
    }
    if (e.key === "Enter" || e.key === "Escape") {
      setActive(false);
    }
  };

  return (
    <>
      <div className={styles.select} onKeyUp={onKeyDownHandler} tabIndex={0}>
        <span onClick={toggleItems} className={styles.main}>
          {seletedItem && seletedItem.title}
        </span>
        {active && (
          <div className={styles.items}>
            {items.map(i => (
              <div
                onMouseEnter={() => setHoveredElementValue(i.value)}
                className={styles.item + " " + (hoveredItem === i ? styles.selected : "")}
                key={i.value}
                onClick={() => onItemClick(i.value)}
              >
                {i.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
