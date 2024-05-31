import "../styles/StrikingDefence.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export function StrikingDefence({ toggleStrikingDefence }) {
  return (
    <div className="striking-def-box">
      <div className="modal-header">
        <ArrowCircleLeftIcon onClick={toggleStrikingDefence} className="back" />
        <h3>STRIKING DEFENCE</h3>
        <SearchIcon className="search" />
        <input className="search-bar" placeholder="Søk teknikk" />
      </div>
    </div>
  );
}
