import "../styles/TakedownsOffence.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export function TakedownsOffence({ toggleTkOffence }) {
  const offensiveTkData = [
    {
      title: "Double leg",
      img: "images/doubleleg.jpeg",
      time: "0:17",
      id: 1,
    },
    {
      title: "Body lock",
      img: "images/bodylock.jpeg",
      time: "0:29",
      id: 2,
    },
  ];
  return (
    <div className="tk-off-box">
      <div className="modal-header">
        <ArrowCircleLeftIcon onClick={toggleTkOffence} className="back" />
        <h3>TAKEDOWNS OFFENCE</h3>
        <SearchIcon className="search" />
        <input className="search-bar" placeholder="Søk teknikk" />
      </div>
      <div className="modal-body">
        {offensiveTkData.map((videoCard) => (
          <OffesiveTkCard videoObject={videoCard} key={videoCard.id} />
        ))}
      </div>
    </div>
  );
}

function OffesiveTkCard({ videoObject }) {
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
