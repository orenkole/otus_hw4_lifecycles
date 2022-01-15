import axios from 'axios';
import React from 'react';
import { AddItemsButton } from '../AddItemsButton';
import { Counter } from '../Counter';
import { List } from '../List';

export type PostType = {
  id: number;
  body: string;
};

export type AppStateType = {
  posts: Array<PostType>;
  lastPostStart: number;
  counters: {
    counter1: number;
    counter2: number;
  };
};

type AppPropsType = Record<string, unknown>;

export class App extends React.Component<AppPropsType, AppStateType> {
  private timerId: undefined | number = undefined;
  constructor(props: AppPropsType) {
    super(props);
    this.state = {
      posts: [],
      lastPostStart: 10,
      counters: {
        counter1: 20,
        counter2: 0,
      },
    };
    this.handleLoadPosts = this.handleLoadPosts.bind(this);
    this.timerId = undefined;
  }

  componentDidMount() {
    axios
      .get<PostType[]>('http://jsonplaceholder.typicode.com/posts?_start=1&_limit=10')
      .then(({ data }) => {
        this.setState((prevState) => ({ ...prevState, posts: data }));
      });

    this.timerId = window.setInterval(() => {
      this.setState((prevState: AppStateType) => ({
        ...prevState,
        counters: {
          ...prevState.counters,
          counter1: prevState.counters.counter1 - 1,
          counter2: prevState.counters.counter2 + 1,
        },
      }));
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  handleLoadPosts() {
    axios
      .get<Array<PostType>>(
        `http://jsonplaceholder.typicode.com/posts?_start=${this.state.lastPostStart}&_limit=10`,
      )
      .then(({ data }) => {
        this.setState((prevState) => ({
          ...prevState,
          posts: [...prevState.posts, ...data],
          lastPostStart: prevState.lastPostStart + 10,
        }));
      });
  }

  render() {
    return (
      <div>
        <div>
          <Counter
            value={this.state.counters.counter1}
            counters={this.state.counters}
            name="Counter 1"
          />
          <Counter
            value={this.state.counters.counter2}
            counters={this.state.counters}
            name="Counter 2"
          />
        </div>
        <hr></hr>
        <AddItemsButton handleLoadPosts={this.handleLoadPosts} />
        <List items={this.state.posts} />
      </div>
    );
  }
}
