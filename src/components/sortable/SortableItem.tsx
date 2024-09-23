import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ColorBall } from "components/ColorBall";

type Props = {
  id: string;
};

const SortableItem = ({ id }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "move",
  };

  return (
    <div style={style} ref={setNodeRef} {...attributes} {...listeners}>
      <ColorBall bgcolor={id} />
    </div>
  );
};

export default SortableItem;
