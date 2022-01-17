import { render, screen } from '@testing-library/react';
import Selector from '.';

test('renders learn react link', () => {
  render(<Selector />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
