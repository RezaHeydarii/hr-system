import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { Checkbox } from "./Checkbox";

export default {
  title: "Components/Atoms/Checkbox",
  component: Checkbox,
} as Meta;

const Template: Story<ComponentProps<typeof Checkbox>> = (args) => (
  <Checkbox {...args} />
);

export const NormalCheckbox = Template.bind({});
NormalCheckbox.args = {
  label: "Remember me",
  checked: true,
};
