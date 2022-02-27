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
NormalTextInput.args = {
  placeholder: "Please enter  your name",
  label: "Input Label",
};

export const ErrorTextInput = Template.bind({});
ErrorTextInput.args = {
  placeholder: "Please enter  your name",
  label: "Input Label",
  error: true,
  helperText: "invalid input",
};

export const TextInputWithAdornment = Template.bind({});
TextInputWithAdornment.args = {
  placeholder: "Please enter  your name",
  label: "Input Label",
  endAdornment: <div className='mr-2.5'>Test</div>,
};
