import { Column, Id } from "@/types";
import { FaRegTrashAlt } from "react-icons/fa";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
}

function ColumnContainer(props: Props) {
  const { column, deleteColumn } = props;
  return (
    <div
      className="
      bg-columnBackgroundColor
      w-[350px]
      h-[500px]
      max-h-[500px]
      rounded-md
      flex
      flex-col
      "
    >
      {/* Column title */}
      <div
        className="
        bg-mainBackgroundColor
        text-md
        h-[60px]
        cursor-grab
        rounded-md
        rounded-b-none
        p-3
        font-bold
        border-columnBackgroundColor
        border-4"
      >
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center bg-columnBackgroundColor px-2 text-sm rounded-full">
            0
          </div>
          <div className="flex-grow">{column.title}</div>
          <button
            onClick={() => deleteColumn(column.id)}
            className="
            ml-auto
            stroke-gray-500
            hover:stroke-white
            hover:bg-columnBackgroundColor
            px-1
            py-1
          "
          >
            <FaRegTrashAlt />
          </button>
        </div>
      </div>
      {/* Column task container */}
      <div className="flex flex-grow">Content</div>
      {/* Column footer */}
      <div>Footer</div>
    </div>
  );
}

export default ColumnContainer;