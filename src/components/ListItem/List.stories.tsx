import React from 'react';
import { Story as StoryType } from '@storybook/react';
import { ListItem, ListItemPropsType } from '.';

const mockItem = { id: 2, body: 'post 2' };

const Story = {
  title: 'List item',
  component: ListItem,
};

const Template: StoryType<ListItemPropsType> = (args) => <ListItem {...args} />;

export const CounterInitial = Template.bind({});
CounterInitial.args = {
  item: mockItem,
};

export default Story;
