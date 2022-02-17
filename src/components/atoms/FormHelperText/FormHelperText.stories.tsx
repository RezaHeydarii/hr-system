import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { FormHelperText } from "./FormHelperText";

export default {
  title: "Components/Atoms/FormHelperText",
  component: FormHelperText,
} as Meta;

const Template: Story<ComponentProps<typeof FormHelperText>> = (args) => (
  <FormHelperText {...args} />
);

export const NormalFormHelperText = Template.bind({});
NormalFormHelperText.args = {
  helperText: "test",
};
