import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete, filterByCategory }) {

  const renderTaskList = filterByCategory.map(task => (
      <Task key={task.text} text={task.text} category={task.category} handleDelete={handleDelete}/>
    ));
  

  return (
    <div className="tasks">
      {renderTaskList}
    </div>
  );
}

export default TaskList;
