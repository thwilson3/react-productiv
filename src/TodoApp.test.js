import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoApp from "./TodoApp";
import { initialTodos } from "./App";


describe("TodoApp", function () {
    it("renders without crashing", function () {
        // this is a low-value test, but better than nothing
        render(<TodoApp initialTodos={initialTodos} />);
    });

    it("renders todos", function () {
        const { container } = render(<TodoApp initialTodos={initialTodos} />);

        for (let todo of initialTodos) {
            expect(container).toContainHTML(todo.title);
            expect(container).toContainHTML(todo.description);
            expect(container).toContainHTML(todo.priority + "");
        }

    });

    it("renders placeholder text if no todos", function () {
        const { container } = render(<TodoApp />);

        expect(container).toContainHTML("You have no todos.");
        ;
    });

    it("can add a new todo", function () {
        const { container} = render(<TodoApp />);

        expect(container).toContainHTML("You have no todos.");

        const title = container.querySelector("#newTodo-title");
        const description = container.querySelector("#newTodo-description");
        const priority = container.querySelector("#newTodo-priority");
        const form = container.querySelector("#todo-form-new");

        fireEvent.change(title, { target: { value: "test title" }});
        fireEvent.change(description, { target: { value: "test description" }});
        fireEvent.change(priority, { target: { value: "2" }});
        fireEvent.submit(form);

        expect(container).toContainHTML("test title");
        expect(container).toContainHTML("test description");
        expect(container).toContainHTML("2");


    });

    it("can update a todo", function () {

    });

    it("can remove a todo", function () {

    });

    it("updates highest priority todo", function () {

    });


    it("matches snapshot", function () {
        const { container } = render(<TodoApp initialTodos={initialTodos} />);
        expect(container).toMatchSnapshot();
    });
});