import Tasks from "./Tasks";

export default function SelectedProject({ project, onDeleteProject, onAddTask, tasks, onDeleteTask }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className=" w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className=" text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            className="px-4 py-2 text-xs md:text-base bg-stone-800 text-stone-300 hover:text-stone-100 hover:bg-stone-600 rounded-md"
            onClick={() => onDeleteProject(project.id)}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">Due by: {formattedDate}</p>
        <p className=" text-stone-500 whitespace-pre-wrap">
          {project.description}
        </p>
        <p className=" text-stone-500 px-8"></p>
      </header>
      <Tasks onAddTask={onAddTask} tasks={tasks} onDeleteTask={onDeleteTask}/>
    </div>
  );
}
