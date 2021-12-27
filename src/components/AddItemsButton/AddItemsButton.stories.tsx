import React from "react";
import { Story as StoryType } from "@storybook/react";
import {AddItemsButton, AddItemsButtonPropsType} from ".";

const Story = {
  title: "Add items button",
  component: AddItemsButton,
};

const Template: StoryType<AddItemsButtonPropsType> = (args) => <AddItemsButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleLoadPosts: () => {}
};

export default Story;