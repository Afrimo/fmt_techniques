import "../styles/StrikingDefence.css";

export function StrikingDefence({ toggleStrikingDefence }) {
  return (
    <div className="striking-def-box">
      <button onClick={toggleStrikingDefence}>CLOSE</button>
      <h1>STRIKING DEFENCE</h1>
    </div>
  );
}
