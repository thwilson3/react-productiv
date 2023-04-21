import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoApp from "./TodoApp"
import Todo from "./Todo"
import TopTodo from "./TopTodo";
import { initialTodos } from "./App";

describe("TopTodo", function () {
    it("renders without crashing", function () {
        // this is a low-value test, but better than nothing
        render(<TopTodo todos={initialTodos} />);
    });

    it("shows the highest priority todo", function () {
        render(<TopTodo todos={initialTodos} />);
        const { container } = render(<Todo todo={initialTodos[1]} />);
        expect(container).toBeInTheDocument()
    });

    it("doesn't render if no todos", function () {
        const { container } = render(<TopTodo todos={[]} />)
        expect(container).toBeEmptyDOMElement();
    });

    it("matches snapshot", function () {
        const { container } = render(<TopTodo todos={initialTodos} />);
        expect(container).toMatchSnapshot();
    });
});