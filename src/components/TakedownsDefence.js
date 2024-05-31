import "../styles/TakedownsDefence.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export function TakedownsDefence({ toggleTkDefence }) {
  return (
    <div className="tk-def-box">
      <div className="modal-header">
        <ArrowCircleLeftIcon onClick={toggleTkDefence} className="back" />
        <h3>TAKEDOWNS DEFENCE</h3>
        <SearchIcon className="search" />
        <input className="search-bar" placeholder="Søk teknikk" />
      </div>
    </div>
  );
}
