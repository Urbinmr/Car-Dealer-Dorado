import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

const rrd = require('react-router-dom');
jest.spyOn(rrd, 'BrowserRouter').mockImplementation(({children}) => children);

describe("Navigation", () => {
  beforeEach(() => {
    render(<Navigation />);
  });

    it("should render navigation", () => {
      const navigationElement = screen.getByRole("navigation");
      expect(navigationElement).toBeInTheDocument();
    })
})