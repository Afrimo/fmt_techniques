import "../styles/WallgameDefence.css";

export function WallgameDefence({ toggleWallDefence }) {
  return (
    <div className="wallgame-def-box">
      <button onClick={toggleWallDefence}>CLOSE</button>
      <h1>WALLGAME DEFENCE</h1>
    </div>
  );
}
