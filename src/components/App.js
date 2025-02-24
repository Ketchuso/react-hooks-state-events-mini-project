import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS); 
  const [catFilter, setCatFilter] = useState("All"); 

  const filteredTasks = catFilter === "All" 
    ? tasks 
    : tasks.filter((task) => task.category === catFilter);

  const handleTaskFormSubmit = (task) => {
    setTasks([...tasks, task]); 
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        setCatFilter={setCatFilter} 
      />
      <NewTaskForm onTaskFormSubmit={handleTaskFormSubmit} categories={CATEGORIES} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;