import "../styles/StrikingOffence.css";

export function StrikingOffence({ toggleStrikingOffence }) {
  return (
    <div className="striking-off-box">
      <button onClick={toggleStrikingOffence}>CLOSE</button>
      <h1>STRIKING OFFENCE</h1>
    </div>
  );
}
