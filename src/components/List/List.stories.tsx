import React from "react";
import { Story as StoryType } from "@storybook/react";
import {List, ListPropsType} from ".";

const mockPosts = [
  { id: 1, body: 'post 1' },
  { id: 2, body: 'post 2' },
  { id: 3, body: 'post 3' }
]

const Story = {
  title: "List",
  component: List,
};

const Template: StoryType<ListPropsType> = (args) => <List {...args} />;

export const CounterInitial = Template.bind({});
CounterInitial.args = {
	items: mockPosts
}

export default Story;