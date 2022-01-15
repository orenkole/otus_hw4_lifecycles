import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '.';

describe('App rendering', () => {
  test('renders App component', () => {
    render(<App />);
    expect(screen.queryByText('Counter 1')).toBeInTheDocument();
  });
});
