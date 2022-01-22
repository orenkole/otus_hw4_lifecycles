import React from 'react';
import { render, screen } from '@testing-library/react';
import { ListItem } from '.';

const mockItem = { id: 2, body: 'post 2' };

describe('List item rendering', () => {
  test('renders ListItem component', () => {
    render(<ListItem item={mockItem} />);
    expect(screen.getByText('post 2')).toBeInTheDocument();
  });
});
