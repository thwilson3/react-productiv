import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({todo}) {

  const {title, priority, description} = todo;
  return (
      <div id={`todo-${todo.id}`} className="Todo">
        <div><b>{title}</b> <small>(priority: {priority})</small></div>
        <div><small>{description}</small></div>
      </div>
  );
}

export default Todo;
