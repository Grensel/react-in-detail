import type { Meta } from "@storybook/react";
import { UnControlledOnOf } from "./UnControlledOnOf";
import { OnOfType } from "../onOf/OnOf";
import { useState } from "react";

const meta: Meta<typeof UnControlledOnOf> = {
  component: UnControlledOnOf,
};

export default meta;

export const ChangeAccordion = () => {
  const [switchOn, setSwitchOn] = useState<OnOfType>(false);
  return (
    <>
      <UnControlledOnOf callBack={setSwitchOn} />
      {switchOn.toString()}
    </>
  );
};
