import React from "react";
import Task from "./Task";

const Tasks = () => {
  const tasks = [
    { name: "Finish homework", done: true },
    { name: "Wash the car", done: false },
    { name: "Buy groceries", done: true },
    { name: "Clean the room", done: false },
    { name: "Call mom", done: true },
  ];

  return (
    <div>
      {tasks.map((item, index) => {
        return <Task key={index} title={item.name} done={item.done} />;
      })}
    </div>
  );
};

export default Tasks;
