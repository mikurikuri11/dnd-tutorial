import { FaRegTrashAlt } from "react-icons/fa";
import { Id, Task } from "../types";
import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

function TaskCard(props: Props) {
  const { task, deleteTask, updateTask } = props;

  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setMouseIsOver(false);
  };

  if (editMode) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
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
        <textarea
          className="
            h-[90%]
            w-full
            resize-none
            border-none
            rounded
            bg-transparent
            text-white
            focus:outline-none
            "
          defaultValue={task.content}
          autoFocus
          placeholder="Task a content"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              toggleEditMode();
            }
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
        ></textarea>
      </div>
    );
  }

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="
        opacity-50
        bg-mainBackgroundColor
        p-2.5
        h-[100px]
        min-h-[100px]
        items-center
        flex
        text-left
        rounded-xl
        border-2
        border-rose-500
        cursor-grab
      "
      >
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
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
        task
    "
    >
      <p
        className="
          my-auto
          h-[90%]
          w-full
          overflow-y-auto
          overflow-x-hidden
          whitespace-pre-wrap
        "
      >
        {task.content}
      </p>
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
