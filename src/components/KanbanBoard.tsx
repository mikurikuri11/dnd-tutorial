import { FaPlusCircle } from 'react-icons/fa';

function KanbanBoard() {
  return (
    <div className="
      m-auto
      flex
      min-h-screen
      w-full
      items-center
      overflow-x-auto
      overflow-y-hidden
      px-[40px]
    ">
      <div className="m-auto">
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
        ">
          <FaPlusCircle className="mt-1" />
          Add Column
        </button>

      </div>
    </div>
  )

  function createNewColumn() {
    console.log('create new column');
  }
}

export default KanbanBoard;
