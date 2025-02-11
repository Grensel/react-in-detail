import { UncontrolledInput } from "./UncontrolledInput";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ChangeEvent, useRef, useState } from "react";

const meta: Meta<typeof UncontrolledInput> = {
  component: UncontrolledInput,
};

export default meta;

type Story = StoryObj<typeof UncontrolledInput>;
export const FirstStory: Story = {
  args: {
    value: 0,
    onClick: () => onClickHandler(),
  },
};
const onClickHandler = action("onCHange");
export const UncontrolledInputOne = () => <input />;
export const TreackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState("");
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };
  return (
    <>
      <input value={value} onChange={onChangeHandler} />
      {value}
    </>
  );
};

export const ControlledInputWithFixedValue = () => <input value={"IT-Incubator"} />;

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={save}>save</button> actual value: {value}
    </>
  );
};

export const ControlledCheckbox = () => {
  const [checkedValue, setCheckedValue] = useState(true);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckedValue(e.currentTarget.checked);
  };
  return <input type="checkbox" checked={checkedValue} onChange={onChangeHandler} />;
};

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState("");
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value);
  };
  return <input value={parentValue} onChange={onChangeHandler} />;
};

export const ControlledSellect = () => {
  const [selectValue, setSelectValue] = useState<string | undefined>("2");
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.currentTarget.value);
  };
  return (
    <select value={selectValue} onChange={onChangeHandler}>
      <option>none</option>
      <option value={"1"}>Minsk</option>
      <option value={"2"}>Moskov</option>
      <option value={"3"}>Kiev</option>
    </select>
  );
};
