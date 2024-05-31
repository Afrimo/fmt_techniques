import "../styles/TakedownsDefence.css";

export function TakedownsDefence({ toggleTkDefence }) {
  return (
    <div className="tk-def-box">
      <button onClick={toggleTkDefence}>CLOSE</button>
      <h1>TAKEDOWNS DEFENCE</h1>
    </div>
  );
}
