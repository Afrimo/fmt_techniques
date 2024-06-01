import "../styles/GroundGameOffence.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export function GroundGameOffence({ toggleGgOffence }) {
  const offensiveGgData = [
    {
      title: "Rear naked choke",
      img: "images/rnc.jpeg",
      time: "0:14",
      id: 1,
    },
    {
      title: "Arm bar",
      img: "images/armbar.jpeg",
      time: "0:12",
      id: 2,
    },
  ];

  return (
    <div className="tk-off-box">
      <div className="modal-header">
        <ArrowCircleLeftIcon onClick={toggleGgOffence} className="back" />
        <h3>GROUND GAME OFFENCE</h3>
        <SearchIcon className="search" />
        <input className="search-bar" placeholder="Søk teknikk" />
      </div>
      <div className="modal-body">
        {offensiveGgData.map((videoCard) => (
          <OfensiveGgCard videoObject={videoCard} key={videoCard.id} />
        ))}
      </div>
    </div>
  );
}

function OfensiveGgCard({ videoObject }) {
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
