import React, { MouseEventHandler } from 'react';

export type AddItemsButtonPropsType = {
  handleLoadPosts: MouseEventHandler<HTMLButtonElement>;
};

type AddItemsButtonStateType = Record<string, unknown>;

class AddItemsButton extends React.Component<AddItemsButtonPropsType, AddItemsButtonStateType> {
  render() {
    return <button onClick={this.props.handleLoadPosts}>Load more posts</button>;
  }
}

export { AddItemsButton };
