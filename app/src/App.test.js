import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React, { createContext } from "react";
import axios from "axios";

jest.mock("axios");

const mockCars = [
  {
    id: "480f26fa-8e0e-4a13-ae3c-f2a44bd1995e",
    make: "Porsche",
    model: "Cayman",
    year: 2016,
    image: "https://via.placeholder.com/200",
    color: "Red",
    price: "330.85",
    available: true,
  },
  {
    id: "480f26fa-8e0e-4a13-ae3c-f2a44bd1998e",
    make: "Porsche",
    model: "Cayman",
    year: 2016,
    image: "https://via.placeholder.com/200",
    color: "Red",
    price: "330.85",
    available: true,
  },
];

const resp = { data: mockCars };

describe("app", () => {
  beforeEach(async () => {
    axios.get.mockResolvedValue(resp);

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  it("should render header", () => {
    const headerElement = screen.getByAltText(/dorado auto/i);
    expect(headerElement).toBeInTheDocument();
  });

  it("should render navigation with login", () => {
    const navHome = screen.getByText(/home/i);
    const navMessages = screen.getByText(/messages/i);
    const navLogin = screen.getByText(/login/i);

    expect(navMessages).toBeInTheDocument();
    expect(navHome).toBeInTheDocument();
    expect(navLogin).toBeInTheDocument();
  });

  it("should render car inventory list", async () => {
    const listElement = screen.getByLabelText(/cars/i);
    expect(listElement).toBeInTheDocument();

    expect(screen.queryAllByText("Porsche")).toHaveLength(0);

    await waitFor(() => {
      expect(screen.getAllByText("Porsche")).toHaveLength(mockCars.length);
    });
  });

  it("should render car search form", () => {
    const searchFormMake = screen.getByText(/make/i);
    const searchFormModel = screen.getByText(/model/i);
    const searchFormYear = screen.getByText(/year/i);

    expect(searchFormMake).toBeInTheDocument();
    expect(searchFormModel).toBeInTheDocument();
    expect(searchFormYear).toBeInTheDocument();
  });
});
