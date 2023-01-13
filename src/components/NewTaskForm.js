import React, { useState } from "react";

function NewTaskForm({ categories, setTasks, tasks }) {
  // create State for Form Values
  const [inputText, setText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Code');

  //filter out ALL category for dropdown
  const filteredCategories = categories.filter(category => category !== "All")
  //render all category options for dropdown
  const categoryOptions = filteredCategories.map(category => (
    <option key={category}>{category}</option>
  ))
  //store newTask with inputs for new Task list
  const newTask = {
    text: inputText,
    category: selectedCategory
  }
  //handle form submit & update tasklist with new task item
  function onTaskFormSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, newTask]);
  }

  return (
    <form onSubmit={(e)=>onTaskFormSubmit(e)}className="new-task-form">
      <label>
        Details
        <input onChange={(e)=> setText(e.target.value)} type="text" name="text" value={inputText}/>
      </label>
      <label>
        Category
        <select onChange={(e)=> setSelectedCategory(e.target.value)}name="category" value={selectedCategory}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
