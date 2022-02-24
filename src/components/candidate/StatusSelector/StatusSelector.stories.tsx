import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { StatusSelector } from "./StatusSelector";

export default {
  title: "Components/Candidate/StatusSelector",
  component: StatusSelector,
} as Meta;

const Template: Story<ComponentProps<typeof StatusSelector>> = (args) => (
  <StatusSelector {...args} />
);

export const NormalStatusSelector = Template.bind({});
NormalStatusSelector.args = {};
