import React from 'react';
import { render, screen } from '@testing-library/react';
import { Counter, CounterPropsType } from '.';

describe('Cell rendering', () => {
  test('renders Counter component', () => {
    render(<Counter value={2} counters={{ counter1: 1, counter2: 2 }} name="Counter 1" />);
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  test('should Counter update', () => {
    const getCounterInstance = (props: CounterPropsType) => render(<Counter {...props} />);
    getCounterInstance({
      value: 2,
      counters: { counter1: 1, counter2: 2 },
      name: 'Counter 1',
    });

    expect(screen.getByText('2')).toBeInTheDocument();
    getCounterInstance({
      value: 4,
      counters: { counter1: 2, counter2: 1 },
      name: 'Counter 1',
    });
    expect(screen.getByText('2')).toBeInTheDocument();

    getCounterInstance({
      value: 4,
      counters: { counter1: 1, counter2: 2 },
      name: 'Counter 1',
    });
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
