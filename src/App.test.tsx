import { render, screen } from '@testing-library/react';
import { descibe, it, expect } 'vitest';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
