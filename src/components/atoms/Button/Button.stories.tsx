import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Components/Atoms/Button",
  component: Button,
} as Meta;

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const NormalButton = Template.bind({});
NormalButton.args = {
  children: <span>Click Me</span>,
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  children: <span className="underline">Click Me</span>,
  freeHeight: true,
  color: "inherit",
  variant: "text",
};
