import React from "react";
import { ACTIONS } from "./App";

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.complete ? "red" : "black" }}>
        id:{todo.id}
        <br />
        {todo.name}
      </span>
      <br />
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
      <br /> <br />
    </div>
  );
}
