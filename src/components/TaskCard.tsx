import { FaRegTrashAlt } from "react-icons/fa";
import { Id, Task } from "../types";
import { useState } from "react";

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
}

function TaskCard(props: Props) {
  const { task, deleteTask } = props;

  const [mouseIsOver, setMouseIsOver] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
      className="
      bg-mainBackgroundColor
      p-2.5
      h-[100px]
      min-h-[100px]
      items-center
      flex
      text-left
      rounded-xl
      hover:ring-2
      hover:ring-insert
      hover:ring-rose-500
      cursor-grab
    "
    >
      {task.content}
      {mouseIsOver && (
        <button
          onClick={() => {
            deleteTask(task.id);
          }}
          className="
          stroke-white
          top-1/2
          -translate-y-1/2
          bg-columnBackgroundColor
          mt-3
          ml-auto
          mr-2
          rounded-full
          cursor-pointer
          "
          >
          <FaRegTrashAlt />
        </button>
      )}
    </div>
  );
}

export default TaskCard;
