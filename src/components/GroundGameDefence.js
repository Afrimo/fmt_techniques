import "../styles/GroundGameDefence.css";

export function GroundGameDefence({ toggleGgDefence }) {
  return (
    <div className="gg-def-box">
      <button onClick={toggleGgDefence}>CLOSE</button>
      <h1>GROUND GAME DEFENCE</h1>
    </div>
  );
}
