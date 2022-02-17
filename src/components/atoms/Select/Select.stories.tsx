import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { Select } from "./Select";

export default {
  title: "Components/Atoms/Select",
  component: Select,
} as Meta;

const Template: Story<ComponentProps<typeof Select>> = (args) => (
  <Select {...args} />
);

export const NormalSelect = Template.bind({});
NormalSelect.args = {
  placeholder: "Select an Item",
  fullWidth: true,
  label: "single Item",
  options: [
    { label: "test", value: "test" },
    { label: "test2", value: "test2" },
    { label: "test3", value: "test3" },
  ],
};

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
  multiple: true,
  fullWidth: true,
  value: ["test", "test2"],
  options: [
    { label: "test", value: "test" },
    { label: "test2", value: "test2" },
    { label: "test3", value: "test3" },
  ],
};
