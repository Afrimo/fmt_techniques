import "../styles/StrikingOffence.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export function StrikingOffence({ toggleStrikingOffence }) {
  return (
    <div className="striking-off-box">
      <div className="modal-header">
        <ArrowCircleLeftIcon onClick={toggleStrikingOffence} className="back" />
        <h3>STRIKING OFFENCE</h3>
        <SearchIcon className="search" />
        <input className="search-bar" placeholder="Søk teknikk" />
      </div>
    </div>
  );
}
