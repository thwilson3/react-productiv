import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoForm from "./TodoForm";
import { initialTodos } from "./App";


describe("todo", function () {
    it("renders without crashing", function () {
        // this is a low-value test, but better than nothing
        render(<TodoForm />);
    });

    it("is blank if no form data", function () {
        const { container } = render(<TodoForm />);

        const title = container.querySelector("#newTodo-title");
        const description = container.querySelector("#newTodo-description");
        const priority = container.querySelector("#newTodo-priority");

        expect(title.value).toEqual("");
        expect(description.value).toEqual("");
        expect(priority.value).toEqual("1");

    });

    it("is populated with given form data", function () {

        const initialFormData = initialTodos[0]

        const { container } = render(
            <TodoForm initialFormData={initialFormData} />);

        const title = container.querySelector("#newTodo-title");
        const description = container.querySelector("#newTodo-description");
        const priority = container.querySelector("#newTodo-priority");

        expect(title.value).toEqual(initialFormData.title);
        expect(description.value).toEqual(initialFormData.description);
        expect(priority.value).toEqual(initialFormData.priority + "");

    });

    it("clears on submission", function () {

        const initialFormData = initialTodos[0]

        const { container } = render(
            <TodoForm
                initialFormData={initialFormData}
                handleSave={function () { }} />);

        const title = container.querySelector("#newTodo-title");
        const description = container.querySelector("#newTodo-description");
        const priority = container.querySelector("#newTodo-priority");

        const submit = container.querySelector("button");

        expect(title.value).toEqual(initialFormData.title);
        expect(description.value).toEqual(initialFormData.description);
        expect(priority.value).toEqual(initialFormData.priority + "");

        fireEvent.click(submit)

        expect(title.value).toEqual("");
        expect(description.value).toEqual("");
        expect(priority.value).toEqual("1");

    });

    it("matches snapshot", function () {
        const { container } = render(<TodoForm />);
        expect(container).toMatchSnapshot();
    });
});