import "../styles/WallgameOffence.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export function WallgameOffence({ toggleWallOffence }) {
  return (
    <div className="wallgame-off-box">
      <div className="modal-header">
        <ArrowCircleLeftIcon onClick={toggleWallOffence} className="back" />
        <h3>WALLGAME OFFENCE</h3>
        <SearchIcon className="search" />
        <input className="search-bar" placeholder="Søk teknikk" />
      </div>
    </div>
  );
}
