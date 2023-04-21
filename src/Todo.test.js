import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";
import { initialTodos } from "./App";


describe("todo", function () {
  it("renders without crashing", function () {
    // this is a low-value test, but better than nothing
    render(<Todo todo={initialTodos[0]} />);
  });

  it("renders proper elements", function () {
    const { title, description, priority } = initialTodos[0];
    const result = render(<Todo todo={initialTodos[0]} />);

    expect(result.queryByText(title)).toBeInTheDocument();
    expect(result.queryByText(description)).toBeInTheDocument();
    expect(result.queryByText(`(priority: ${priority})`)).toBeInTheDocument();
  })

  it("matches snapshot", function () {
    const { container } = render(<Todo todo={initialTodos[0]} />);
    expect(container).toMatchSnapshot();
  });
});