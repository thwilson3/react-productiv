import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";
import { initialTodos } from "./App";
import { update, remove } from "./TodoApp";
import EditableTodo from "./EditableTodo";

describe("EditableTodo", function () {
  it("renders without crashing", function () {
    render(
      <EditableTodo todo={initialTodos[0]} update={update} remove={remove} />
    );
  });

  it("renders edit button", function () {
    const result = render(
      <EditableTodo todo={initialTodos[0]} update={update} remove={remove} />
    );

    expect(
      result.container.querySelector(`#edit-button-${initialTodos[0].id}`)
    ).toBeInTheDocument();
  });

  it("shows form when edit button clicked", function () {
    const result = render(
      <EditableTodo todo={initialTodos[0]} update={update} remove={remove} />
    );

    fireEvent.click(
      result.container.querySelector(`#edit-button-${initialTodos[0].id}`)
    );

    expect(
      result.container.querySelector(`#todo-form-${initialTodos[0].id}`)
    ).toBeInTheDocument();

    expect(
      result.container.querySelector(`#edit-button-${initialTodos[0].id}`)
    ).not.toBeInTheDocument();
  });

  it("matches snapshot", function () {
    const { container } = render(
      <EditableTodo todo={initialTodos[0]} update={update} remove={remove} />
    );
    expect(container).toMatchSnapshot();
  });
});
