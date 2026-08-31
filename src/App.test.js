import React from 'react';
import { render } from '@testing-library/react';
import App from './App/App';

test('renders portfolio heading', () => {
  const { getByText } = render(<App />);
  const heading = getByText(/Portfolio Matthijs Roukema/i);
  expect(heading).toBeInTheDocument();
});
