import "../styles/TakedownsOffence.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export function TakedownsOffence({ toggleTkOffence }) {
  return (
    <div className="tk-off-box">
      <div className="modal-header">
        <ArrowCircleLeftIcon onClick={toggleTkOffence} className="back" />

        <h3>TAKEDOWNS OFFENCE</h3>
        <SearchIcon className="search" />
        <input className="search-bar" placeholder="Søk teknikk" />
      </div>
    </div>
  );
}
