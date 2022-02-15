import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { EditableField } from "./EditableField";

export default {
  title: "Components/Atoms/EditableField",
  component: EditableField,
} as Meta;

const Template: Story<ComponentProps<typeof EditableField>> = (args) => (
  <EditableField {...args} />
);

export const NormalEditableField = Template.bind({});
NormalEditableField.args = {
  value: "test",
  label: "label",
};
