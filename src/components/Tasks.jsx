import { useState } from "react";
import NewTask from "./NewTask";

export default function Tasks({ onAddTask, tasks, onDeleteTask }) {
  return (
    <section>
      <h2 className=" text-2xl font-bold text-stone-700 my-4"> Tasks </h2>
      <NewTask onAddTask={onAddTask} />
      <ul className="mt-8 rounded-md ">
        {tasks.length === 0 && (
          <p className=" text-stone-800 mb-4">
            This Project does not have tasks
          </p>
        )}
        {tasks.length > 0 &&
          tasks.map((task) => (
            <li className="flex py-2 px-2 justify-between mb-2 bg-stone-200 rounded-md">
              <span>{task.text}</span> 
              <button onClick={() => onDeleteTask(task.id)} className=" hover:text-red-600">Clear</button>
            </li>
          ))}
      </ul>
    </section>
  );
}
