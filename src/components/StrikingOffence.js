import "../styles/StrikingOffence.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { AddVideo } from "./Menu";

export function StrikingOffence({ toggleStrikingOffence }) {
  const offensiveStrikingData = [
    {
      title: "Calf kick",
      img: "images/calf.jpeg",
      time: "0:23",
      id: 1,
    },
    {
      title: "Bodyshot setup",
      img: "images/bodyshot.jpeg",
      time: "0:12",
      id: 2,
    },
  ];
  return (
    <div className="tk-off-box">
      <div className="modal-header">
        <ArrowCircleLeftIcon onClick={toggleStrikingOffence} className="back" />
        <h3>STRIKING OFFENSIVE</h3>
        <SearchIcon className="search" />
        <input className="search-bar" placeholder="Søk teknikk" />
      </div>
      <div className="modal-body">
        <AddVideo />
        {offensiveStrikingData.map((videoCard) => (
          <OffensiveStrikingCard videoObject={videoCard} key={videoCard.id} />
        ))}
      </div>
    </div>
  );
}

function OffensiveStrikingCard({ videoObject }) {
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
