import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("should render header", () => {
    const headerElement = screen.getByText(/dorado auto/i);
    expect(headerElement).toBeInTheDocument();
  });
});
