import "../styles/WallgameOffence.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export function WallgameOffence({ toggleWallOffence }) {
  const offensiveWallData = [
    {
      title: "Double leg - wall",
      img: "images/doublelegwall.jpeg",
      time: "0:23",
      id: 1,
    },
    {
      title: "Body lock - wall",
      img: "images/bodylockwall.jpeg",
      time: "0:12",
      id: 2,
    },
  ];

  return (
    <div className="tk-off-box">
      <div className="modal-header">
        <ArrowCircleLeftIcon onClick={toggleWallOffence} className="back" />
        <h3>WALL GAME OFFENCE</h3>
        <SearchIcon className="search" />
        <input className="search-bar" placeholder="Søk teknikk" />
      </div>
      <div className="modal-body">
        {offensiveWallData.map((videoCard) => (
          <WallgameOffenceCard videoObject={videoCard} key={videoCard.id} />
        ))}
      </div>
    </div>
  );
}

function WallgameOffenceCard({ videoObject }) {
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
