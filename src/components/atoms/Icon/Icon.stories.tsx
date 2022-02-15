import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { Icon } from "./Icon";

export default {
  title: "Components/Atoms/Icon",
  component: Icon,
} as Meta;

const Template: Story<ComponentProps<typeof Icon>> = (args) => (
  <Icon {...args} />
);

export const NormalIcon = Template.bind({});
NormalIcon.args = {
  name: "warning_circle",
};
