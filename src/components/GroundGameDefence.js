import "../styles/GroundGameDefence.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { AddVideo } from "./Menu";

export function GroundGameDefence({ toggleGgDefence }) {
  const defensiveGgData = [
    {
      title: "Sidecontrol escape",
      img: "images/sidecontrol.jpeg",
      time: "0:23",
      id: 1,
    },
    {
      title: "Underhook getup",
      img: "images/underhookgetup.webp",
      time: "0:12",
      id: 2,
    },
  ];
  return (
    <div className="tk-off-box">
      <div className="modal-header">
        <ArrowCircleLeftIcon onClick={toggleGgDefence} className="back" />
        <h3>GROUND GAME DEFENCE</h3>
        <SearchIcon className="search" />
        <input className="search-bar" placeholder="Søk teknikk" />
      </div>
      <div className="modal-body">
        <AddVideo />
        {defensiveGgData.map((videoCard) => (
          <DefensiveGgCard videoObject={videoCard} key={videoCard.id} />
        ))}
      </div>
    </div>
  );
}

function DefensiveGgCard({ videoObject }) {
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
