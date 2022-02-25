import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { Chip } from "./Chip";

export default {
  title: "Components/Atoms/Chip",
  component: Chip,
} as Meta;

const Template: Story<ComponentProps<typeof Chip>> = (args) => (
  <Chip {...args} />
);

export const NormalChip = Template.bind({});
NormalChip.args = {
  label: "Hello EveryOne",
  onDelete:undefined
};
