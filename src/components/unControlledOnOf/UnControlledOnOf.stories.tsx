import type { Meta } from "@storybook/react";
import { UnControlledOnOf } from "./UnControlledOnOf";
import { OnOfType } from "../onOf/OnOf";
import { useState } from "react";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof UnControlledOnOf> = {
  component: UnControlledOnOf,
};

export default meta;

export const onMode = () => <UnControlledOnOf dafaultOn={true} callBack={action("rendering")} />;
export const offMode = () => <UnControlledOnOf dafaultOn={false} callBack={action("rendering")} />;

export const ChangeAccordion = () => {
  const [switchOn, setSwitchOn] = useState<OnOfType>(false);
  return (
    <>
      <UnControlledOnOf callBack={setSwitchOn} dafaultOn={true} />
      {switchOn.toString()}
    </>
  );
};
