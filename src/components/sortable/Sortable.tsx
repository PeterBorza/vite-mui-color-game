import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import {
  SortableContext,
  SortingStrategy,
  arrayMove,
  horizontalListSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { ColorBall } from "components";
import { ClientDataType } from "types";
import { Dispatch, SetStateAction, useState } from "react";
import { createPortal } from "react-dom";
import { getColorHash } from "utils";

import { SortableItem } from "./SortableItem";

// TODO Create generic type for Sortable component and item as well

type Props = {
  sortItems: ClientDataType[];
  setSortItems: Dispatch<SetStateAction<ClientDataType[]>>;
  sortingStrategy?: SortingStrategy;
};

export const Sortable = ({
  sortItems,
  setSortItems,
  sortingStrategy = horizontalListSortingStrategy,
}: Props) => {
  const [activeBall, setActiveBall] = useState<ClientDataType | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    if (active.data.current?.type === "Palette") {
      setActiveBall(active.data.current.colorBall);
      return;
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveBall(null);
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setSortItems(items => {
        const ids = items.map(i => i.id);
        const oldIndex = ids.indexOf(active.id as string);
        const newIndex = ids.indexOf(over.id as string);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToParentElement]}
    >
      <SortableContext items={sortItems} strategy={sortingStrategy}>
        {sortItems.map(item => (
          <SortableItem key={item.id} {...item} />
        ))}
        {createPortal(
          <DragOverlay>
            {activeBall && <ColorBall bgcolor={getColorHash(activeBall.code)} />}
          </DragOverlay>,
          document.body,
        )}
      </SortableContext>
    </DndContext>
  );
};
