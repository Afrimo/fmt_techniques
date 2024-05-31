import "../styles/TakedownsOffence.css";

export function TakedownsOffence({ toggleTkOffence }) {
  return (
    <div className="tk-off-box">
      <button onClick={toggleTkOffence}>CLOSE</button>
      <h1>TAKEDOWNS OFFENCE</h1>
    </div>
  );
}
