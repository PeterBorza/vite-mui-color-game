import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ColorBall } from "components";
import { ClientDataType } from "types";
import { CSSProperties } from "react";
import { getColorHash } from "utils";

export const SortableItem = (item: ClientDataType) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: item.id,
    data: {
      type: "Palette",
      colorBall: item,
    },
  });

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "move",
  };

  if (isDragging)
    return (
      <div ref={setNodeRef} style={style}>
        <ColorBall />
      </div>
    );

  return (
    <div style={style} ref={setNodeRef} {...attributes} {...listeners}>
      <ColorBall bgcolor={getColorHash(item.code)} />
    </div>
  );
};
