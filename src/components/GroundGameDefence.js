import "../styles/GroundGameDefence.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export function GroundGameDefence({ toggleGgDefence }) {
  return (
    <div className="gg-def-box">
      <div className="modal-header">
        <ArrowCircleLeftIcon onClick={toggleGgDefence} className="back" />
        <h3>GROUND GAME DEFENCE</h3>
        <SearchIcon className="search" />
        <input className="search-bar" placeholder="Søk teknikk" />
      </div>
    </div>
  );
}
