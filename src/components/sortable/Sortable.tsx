import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  SortingStrategy,
} from "@dnd-kit/sortable";
import { Dispatch, SetStateAction } from "react";

import {
  restrictToHorizontalAxis,
  restrictToParentElement,
} from "@dnd-kit/modifiers";
import SortableItem from "./SortableItem";
import { ClientDataType } from "context";
import { getColorHash } from "converters";

type Props = {
  sortItems: ClientDataType[];
  setSortItems: Dispatch<SetStateAction<ClientDataType[]>>;
  sortingStrategy?: SortingStrategy;
};

const Sortable = ({
  sortItems,
  setSortItems,
  sortingStrategy = horizontalListSortingStrategy,
}: Props) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
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

  const getCode = (code: string) => getColorHash(code);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToHorizontalAxis, restrictToParentElement]}
    >
      <SortableContext items={sortItems} strategy={sortingStrategy}>
        {sortItems.map(item => (
          <SortableItem key={item.id} id={item.id} code={item.code} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default Sortable;
