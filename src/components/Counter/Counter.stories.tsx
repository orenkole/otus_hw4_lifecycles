import React from "react";
import { Story as StoryType } from "@storybook/react";
import {Counter, CounterPropsType} from ".";

const Story = {
  title: "Counter",
  component: Counter,
};

const Template: StoryType<CounterPropsType> = (args) => <Counter {...args} />;

export const CounterInitial = Template.bind({});
CounterInitial.args = {
	value: 2,
  counters: {
    counter1: 2,
    counter2: 1
  }
};

export default Story;