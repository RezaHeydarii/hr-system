import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { PageHeader } from "./PageHeader";

export default {
  title: "Components/Layouts/PageHeader",
  component: PageHeader,
} as Meta;

const Template: Story<ComponentProps<typeof PageHeader>> = (args) => {
  return <PageHeader {...args} />;
};

export const MainPageHeader = Template.bind({});
MainPageHeader.args = {
  title: "Project",
  text: "Subtext ",
};
