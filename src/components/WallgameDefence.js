import "../styles/WallgameDefence.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export function WallgameDefence({ toggleWallDefence }) {
  return (
    <div className="wallgame-def-box">
      <div className="modal-header">
        <ArrowCircleLeftIcon onClick={toggleWallDefence} className="back" />
        <h3>WALLGAME DEFENCE</h3>
        <SearchIcon className="search" />
        <input className="search-bar" placeholder="Søk teknikk" />
      </div>
    </div>
  );
}
