import React from 'react';
import { ListPropsType } from '../List/index';
import { listItemStyle } from './style';

type StateType = Record<string, unknown>;

export type ListItemPropsType = { item: ListPropsType['items'][number] };

class ListItem extends React.Component<ListItemPropsType, StateType> {
  constructor(props: ListItemPropsType) {
    super(props);
  }

  shouldComponentUpdate(nextProps: ListItemPropsType) {
    if (nextProps.item.id !== this.props.item.id) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <li key={this.props.item.id} css={listItemStyle}>
        {this.props.item.body}
      </li>
    );
  }
}

export { ListItem };
