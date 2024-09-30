import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ColorBall } from "components/ColorBall";
import { ClientDataType } from "context";
import { getColorHash } from "converters";

const SortableItem = ({ id, code }: ClientDataType) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "move",
  };

  const getCode = (code: string) => getColorHash(code);

  return (
    <div style={style} ref={setNodeRef} {...attributes} {...listeners}>
      <ColorBall bgcolor={getCode(code)} />
    </div>
  );
};

export default SortableItem;
