import React from "react";
import { DndContext, DragOverlay, closestCorners } from "@dnd-kit/core";
import SortableContainer from "./SortableContainer";
import useDragAndDrop from "@/hooks/useDragAndDrop";
import Item from "./Item";

const Container = () => {
  const initialItems = {
    container1: ["A", "B", "C"],
    container2: ["D", "E", "F"],
    container3: ["G", "H", "I"],
    container4: ["J", "K", "L"],
  };

  const { items, activeId, sensors, handleDragStart, handleDragOver, handleDragEnd } =
    useDragAndDrop(initialItems);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        {/* SortableContainer */}
        {Object.keys(items).map((key) => (
          <SortableContainer key={key} id={key} label={key} items={items[key]} />
        ))}
        {/* DragOverlay */}
        <DragOverlay>{activeId ? <Item id={activeId} /> : null}</DragOverlay>
      </DndContext>
    </div>
  );
};

export default Container;