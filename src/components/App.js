import React, { useState }from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  //set data to state for manipulation
  const [categories, setCategories] = useState(CATEGORIES)
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDelete(deletedTask) {
    setTasks(tasks.filter(task => task.text !== deletedTask))
  };

  const filterByCategory = tasks.filter(tasks => tasks.category === selectedCategory || selectedCategory === "All");

  function handleSelectedCategory(category){
    setSelectedCategory(category);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} selectedCategory={selectedCategory} handleSelectedCategory={handleSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES} setTasks={setTasks} tasks={tasks}/>
      <TaskList tasks={tasks} handleDelete={handleDelete} filterByCategory={filterByCategory}/>
    </div>
  );
}

export default App;
