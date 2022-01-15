import React from "react";

export type CounterPropsType = {
	value: number;
  counters: {
    counter1: number;
    counter2: number;
  };
  name: string;
}

type CounterStateType = {};

export class Counter extends React.Component<CounterPropsType, CounterStateType> {

	shouldComponentUpdate(nextProps: any) {  
    if (nextProps.value === this.props.value) return false;
    if (this.props.counters.counter1 <= this.props.counters.counter2) return false;
    return true;
  }

	render() {
		return (
      <div>
        <h2>{this.props.name}</h2>
        <h3>{this.props.value}</h3>
      </div>
    );
	}
}