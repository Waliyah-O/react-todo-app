import React from "react";

const TodoLists = () => {
  var listItems = [
    { id: 1, text: "Complete Online JavaScript Course", completed: true },
    { id: 2, text: "10 minutes meditation", completed: true },
    { id: 3, text: "Jog around the park 3X", completed: false },
    { id: 4, text: "Pick up groceries", completed: false },
    { id: 5, text: "Complete todo app", completed: false },
    { id: 6, text: "Read for an hour", completed: false },
  ];

  return (
    <div className="todoLists">
      {listItems.map((item, index) => (
        <div key={item.id}>
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default TodoLists;
