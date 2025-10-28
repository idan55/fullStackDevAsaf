import React from "react";

const Q14 = () => {
  const chores = [
    { title: "Wash the dishes", done: true },
    { title: "Do the laundry", done: false },
    { title: "Clean the room", done: true },
    { title: "Take out the trash", done: false },
    { title: "Walk the dog", done: true },
    { title: "Water the plants", done: false },
    { title: "Cook dinner", done: true },
    { title: "Vacuum the floor", done: false },
    { title: "Fold clothes", done: true },
    { title: "Buy groceries", done: true },
  ];

  return (
    <div>
      <ul>
        {chores.map((item, index) => {
          return (
            <li key={index}>
              {item.title}
              {item.done ? "✅" : "❌"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Q14;
