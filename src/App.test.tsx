import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('is app rendered', () => {
  render(<App />);
  const appLayout = screen.getByTestId('app');
  expect(appLayout).toBeInTheDocument();
});
