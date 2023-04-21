import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { initialTodos } from "./App";
import { update, remove } from "./TodoApp";
import EditableTodoList from "./EditableTodoList";

describe("EditableTodoList", function() {
  it("renders without crashing", function () {
    render(
      <EditableTodoList todos={initialTodos} update={update} remove={remove} />
    );
  });

  it("renders list of todos", function() {
    const result = render(
      <EditableTodoList todos={initialTodos} update={update} remove={remove} />
    );

    for(let todo of initialTodos){
      expect(result.container.querySelector(`#todo-${todo.id}`)).toBeInTheDocument();
    }
  });

  it("works with no todos", function() {
    const result = render(
      <EditableTodoList todos={[]} update={update} remove={remove} />
    );
    expect(result.container.querySelector("div")).toBeEmptyDOMElement();
  });

  it("matches snapshot", function () {
    const { container } = render(
      <EditableTodoList todos={initialTodos} update={update} remove={remove} />
    );
    expect(container).toMatchSnapshot();
  });
})