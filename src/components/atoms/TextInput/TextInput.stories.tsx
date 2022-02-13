import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { TextInput } from "./TextInput";

export default {
  title: "Components/Atoms/TextInput",
  component: TextInput,
} as Meta;

const Template: Story<ComponentProps<typeof TextInput>> = (args) => (
  <TextInput {...args} />
);

export const NormalTextInput = Template.bind({});
NormalTextInput.args = {};
