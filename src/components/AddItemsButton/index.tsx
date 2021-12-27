import React, { MouseEventHandler } from "react";

export type AddItemsButtonPropsType = {
	handleLoadPosts: MouseEventHandler<HTMLButtonElement>;
}

type AddItemsButtonStateType = {};

class AddItemsButton extends React.Component<AddItemsButtonPropsType, AddItemsButtonStateType>  {
	constructor(props: any) {
		super(props)
	}

	render() {
		return (
			<button
				onClick={this.props.handleLoadPosts}
			>
				Load more posts
			</button>
		)
	}
}

export {AddItemsButton}