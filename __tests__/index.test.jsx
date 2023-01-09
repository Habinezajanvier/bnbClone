import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";

describe("Home", () => {
  it("render single hotel card", () => {
    render(<Card />);

    const element = screen.getByRole("img", { name: "hotel_picture" });
    expect(element).toBeInTheDocument();
  });

  it("renders homepage unchanged", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
