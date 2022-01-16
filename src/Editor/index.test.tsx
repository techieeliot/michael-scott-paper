import { render, screen } from '@testing-library/react';
import Editor from '.';

test('renders learn react link', () => {
  render(<Editor />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
