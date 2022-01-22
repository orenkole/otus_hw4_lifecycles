import React from 'react';
import { AppStateType } from '../App/index';
import { ListItem } from '../ListItem';
import { listStyle } from './style';

export type ListPropsType = { items: Pick<AppStateType, 'posts'>['posts'] };

type ListStateType = Record<string, unknown>;

class List extends React.Component<ListPropsType, ListStateType> {
  private listRef: React.RefObject<HTMLUListElement>;
  constructor(props: ListPropsType) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps: ListPropsType, prevState: ListStateType) {
    if (prevProps.items.length < this.props.items.length) {
      const list = this.listRef.current;
      if (list) {
        return list.scrollHeight - list.scrollTop;
      }
    }
    return null;
  }

  componentDidUpdate(prevProps: ListPropsType, prevState: ListStateType, snapshot: number | null) {
    // if snapshot is available, use it to adjust scroll position
    if (snapshot !== null) {
      console.log(' snapshot ');
      const list = this.listRef.current;
      list!.scrollTop = list!.scrollHeight - snapshot;
    }
  }

  render() {
    return (
      <ul ref={this.listRef} css={listStyle}>
        {this.props.items.map((post) => (
          <ListItem item={post} key={post.id} />
        ))}
      </ul>
    );
  }
}

export { List };
