import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
import { Column, Id } from "@/types";
import ColumnContainer from "./ColumnContainer";

function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([]);

  return (
    <div
      className="
      m-auto
      flex
      min-h-screen
      w-full
      items-center
      overflow-x-auto
      overflow-y-hidden
      px-[40px]
    "
    >
      <div className="m-auto flex gap-4">
        <div className="flex gap-4">
          {columns.map((col) => (
            <ColumnContainer key={col.id} column={col} deleteColumn={deleteColumn} />
          ))}
        </div>
        <button
          onClick={() => createNewColumn()}
          className="
          h-[60px]
          w-[350px]
          cursor-pointer
          rounded-lg
          bg-mainBackgroundColor
          border-2
          border-columBackgroundColor
          p-4
          ring-rose-500
          hover:ring-2
          flex
          gap-3
        "
        >
          <FaPlusCircle className="mt-1" />
          Add Column
        </button>
      </div>
    </div>
  );

  function createNewColumn() {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };

    setColumns([...columns, columnToAdd]);
  }

  function deleteColumn(id: Id) {
    const newColumns = columns.filter((col) => col.id !== id);
    setColumns(newColumns);
  }

  function generateId() {
    return Math.floor(Math.random() * 100001);
  }
}

export default KanbanBoard;
