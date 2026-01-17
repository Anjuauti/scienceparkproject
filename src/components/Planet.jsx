import { useDrag } from "react-dnd";

const Planet = ({ planet }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "PLANET",
    item: planet,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        padding: "10px 16px",
        margin: "8px",
        background: "#4f46e5",
        color: "white",
        borderRadius: "20px",
        cursor: "grab",
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {planet.name}
    </div>
  );
};

export default Planet;
