import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

it("renders without crashing", function () {
    // this is a low-value test, but better than nothing
    render(<Footer />);
  });

  it("matches snapshot", function () {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });