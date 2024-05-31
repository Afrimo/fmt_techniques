import "../styles/GroundGameOffence.css";

export function GroundGameOffence({ toggleGgOffence }) {
  return (
    <div className="gg-off-box">
      <button onClick={toggleGgOffence}>CLOSE</button>
      <h1>GROUND GAME OFFENCE</h1>
    </div>
  );
}
