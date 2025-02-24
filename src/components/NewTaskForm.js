import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [taskText, setTaskText] = useState("");  
  const [taskCategory, setTaskCategory] = useState("Code");  

  const submitForm = (e) => {
    e.preventDefault(); 

    const newTask = {
      text: taskText,
      category: taskCategory,
      id: Date.now(), 
    };

    onTaskFormSubmit(newTask);

    setTaskText("");  
    setTaskCategory("Code");  
  };

  return (
    <form className="new-task-form" onSubmit={submitForm}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)} 
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskCategory}
          onChange={(e) => setTaskCategory(e.target.value)} 
        >
          {categories
            .filter((category) => category !== "All") 
            .map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
