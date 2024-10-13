import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ColorBall } from "components";
import { CSSProperties } from "react";
import { ClientDataType } from "types";
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
  };

  const cursorMove: CSSProperties = {
    cursor: "move",
  };

  if (isDragging)
    return (
      <div ref={setNodeRef} style={style}>
        <ColorBall />
      </div>
    );

  return (
    <div style={{ ...style, ...cursorMove }} ref={setNodeRef} {...attributes} {...listeners}>
      <ColorBall bgcolor={getColorHash(item.code)} />
    </div>
  );
};
