import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { DropZone } from "./DropZone";

export default {
  title: "Components/Atoms/DropZone",
  component: DropZone,
} as Meta;

const Template: Story<ComponentProps<typeof DropZone>> = (args) => (
  <DropZone {...args} />
);

export const NormalDropZone = Template.bind({});
NormalDropZone.args = {};
