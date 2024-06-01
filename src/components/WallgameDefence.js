import "../styles/WallgameDefence.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export function WallgameDefence({ toggleWallDefence }) {
  const defensiveWallData = [
    {
      title: "Side getup",
      img: "images/wallgetup.webp",
      time: "0:23",
      id: 1,
    },
    {
      title: "Single leg def",
      img: "images/singlelegdef.jpeg",
      time: "0:12",
      id: 2,
    },
  ];

  return (
    <div className="tk-off-box">
      <div className="modal-header">
        <ArrowCircleLeftIcon onClick={toggleWallDefence} className="back" />
        <h3>WALL GAME DEFENCE</h3>
        <SearchIcon className="search" />
        <input className="search-bar" placeholder="Søk teknikk" />
      </div>
      <div className="modal-body">
        {defensiveWallData.map((videoCard) => (
          <WallgameDefenceCard videoObject={videoCard} key={videoCard.id} />
        ))}
      </div>
    </div>
  );
}

function WallgameDefenceCard({ videoObject }) {
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
