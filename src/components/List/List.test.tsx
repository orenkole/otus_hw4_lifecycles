import React from 'react';
import { render, screen } from '@testing-library/react';
import { List } from '.';

const mockPosts = [
  { id: 1, body: 'post 1' },
  { id: 2, body: 'post 2' },
  { id: 3, body: 'post 3' },
];

describe('List rendering', () => {
  test('renders List component', () => {
    render(<List items={mockPosts} />);
    expect(screen.getByText('post 1')).toBeInTheDocument();
    expect(screen.getByText('post 2')).toBeInTheDocument();
    expect(screen.getByText('post 3')).toBeInTheDocument();
  });
});
