import { render, screen } from "@testing-library/react";
import BackgroundMenu from ".";

test("renders learn react link", () => {
  render(<BackgroundMenu />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
