import "../styles/TakedownsDefence.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { AddVideo } from "./Menu";

export function TakedownsDefence({ toggleTkDefence }) {
  const defensiveTkData = [
    {
      title: "Sprawl",
      img: "images/sprawl.jpeg",
      time: "0:11",
      id: 1,
    },
    {
      title: "Signle leg def",
      img: "images/singlelegdef.jpeg",
      time: "0:22",
      id: 2,
    },
  ];

  return (
    <div className="tk-off-box">
      <div className="modal-header">
        <ArrowCircleLeftIcon onClick={toggleTkDefence} className="back" />
        <h3>TAKEDOWNS DEFENCE</h3>
        <SearchIcon className="search" />
        <input className="search-bar" placeholder="Søk teknikk" />
      </div>
      <div className="modal-body">
        <AddVideo />
        {defensiveTkData.map((videoCard) => (
          <DefensiveTkCard videoObject={videoCard} key={videoCard.id} />
        ))}
      </div>
    </div>
  );
}

function DefensiveTkCard({ videoObject }) {
  return (
    <div className="video-card">
      <PlayCircleIcon className="play-btn" fontSize="large" />
      <div className="video-pic-layer"></div>
      <img src={videoObject.img} className="video-pic" alt="videopic" />
      <div className="name-container">
        <p>{videoObject.title}</p>
      </div>
      <div className="time-container">
        <p>{videoObject.time}</p>
      </div>
    </div>
  );
}
