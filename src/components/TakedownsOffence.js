import "../styles/TakedownsOffence.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export function TakedownsOffence({ toggleTkOffence }) {
  return (
    <div className="tk-off-box">
      <div className="modal-header">
        <ArrowCircleLeftIcon onClick={toggleTkOffence} className="back" />
        <h3>TAKEDOWNS OFFENCE</h3>
        <SearchIcon className="search" />
        <input className="search-bar" placeholder="Søk teknikk" />
      </div>
      <div className="modal-body">
        <VideoCard
          title="Double leg"
          img="images/wrestling_offence.jpeg"
          time="0:16"
        />
        <VideoCard
          title="Body lock"
          img="images/wrestling_defence.png"
          time="0:28"
        />
      </div>
    </div>
  );
}

function VideoCard({ title = "", img = "", time = "" }) {
  return (
    <div className="video-card">
      <PlayCircleIcon className="play-btn" fontSize="large" />
      <div className="video-pic-layer"></div>
      <img src={img} className="video-pic" alt="videopic" />
      <div className="name-container">
        <p>{title}</p>
      </div>
      <div className="time-container">
        <p>{time}</p>
      </div>
    </div>
  );
}
