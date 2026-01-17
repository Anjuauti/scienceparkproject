import { useDrop } from "react-dnd";

const Orbit = ({ orbitNumber, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "PLANET",
    drop: (item) => onDrop(item, orbitNumber),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        height: "80px",
        width: "80px",
        border: "2px dashed #999",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: isOver ? "#d1fae5" : "transparent",
      }}
    >
      {orbitNumber}
    </div>
  );
};

export default Orbit;
