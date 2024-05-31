import "../styles/GroundGameOffence.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export function GroundGameOffence({ toggleGgOffence }) {
  return (
    <div className="gg-off-box">
      <div className="modal-header">
        <ArrowCircleLeftIcon onClick={toggleGgOffence} className="back" />
        <h3>GROUND GAME OFFENCE</h3>
        <SearchIcon className="search" />
        <input className="search-bar" placeholder="Søk teknikk" />
      </div>
    </div>
  );
}
