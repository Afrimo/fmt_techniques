import "../styles/WallgameOffence.css";

export function WallgameOffence({ toggleWallOffence }) {
  return (
    <div className="wallgame-off-box">
      <button onClick={toggleWallOffence}>CLOSE</button>
      <h1>WALLGAME OFFENCE</h1>
    </div>
  );
}
