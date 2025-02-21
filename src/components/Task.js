import { React, useState } from "react";

function Task({ task }) {
  var [deleteButton, setButton] = useState(true)

  function useButton(){
    setButton(false)
  }

  if (!deleteButton) return null;

  return (
    <div className="task">
      <div className="label">Task: {task.text}</div>
      <div className="text">Category: {task.category}</div>
      <button onClick={useButton} className="delete">X</button>
    </div>
  );
}

export default Task;
