import Planet from "./Planet.jsx";
import Orbit from "./Orbit.jsx";
import { planets } from "../data/planets.js";

const SolarLab = () => {
  const handleDrop = (planet, orbitNumber) => {
    if (planet.order === orbitNumber) {
      alert(`✅ Correct! ${planet.name} is in the right orbit`);
    } else {
      alert(`❌ Try again!`);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>DIY Solar System Lab 🌍</h2>

      <div style={{ display: "flex", gap: "40px" }}>
        <div>
          <h4>Planets</h4>
          {planets.map((p) => (
            <Planet key={p.id} planet={p} />
          ))}
        </div>

        <div>
          <h4>Orbits (1 = closest to Sun)</h4>
          <div style={{ display: "flex", gap: "16px" }}>
            {[1, 2, 3, 4].map((orbit) => (
              <Orbit
                key={orbit}
                orbitNumber={orbit}
                onDrop={handleDrop}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarLab;
