import { Link } from "react-router-dom";
import { Header } from "./Header";
import "../styles/Menu.css";
import { useState } from "react";
import { TakedownsOffence } from "./TakedownsOffence";
import { TakedownsDefence } from "./TakedownsDefence";
import { GroundGameOffence } from "./GroundGameOffence";
import { GroundGameDefence } from "./GroundGameDefence";
import { StrikingOffence } from "./StrikingOffence";
import { StrikingDefence } from "./StrikingDefence";
import { WallgameOffence } from "./WallgameOffence";
import { WallgameDefence } from "./WallgameDefence";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export function Menu() {
  const [tkOffence, setTkOffence] = useState(false);
  const [tkDefence, setTkDefence] = useState(false);
  const [ggOffence, setGgoffence] = useState(false);
  const [ggDefence, setGgDefence] = useState(false);
  const [strikingOffence, setStrikingOffence] = useState(false);
  const [strikingDefence, setStrikingDefence] = useState(false);
  const [wallOffence, setwallOffence] = useState(false);
  const [wallDefence, setwallDefence] = useState(false);

  const toggleTkOffence = () => {
    setTkOffence(!tkOffence);
    window.scrollTo(0, 0);
  };

  const toggleTkDefence = () => {
    setTkDefence(!tkDefence);
    window.scrollTo(0, 0);
  };

  const toggleGgOffence = () => {
    setGgoffence(!ggOffence);
    window.scrollTo(0, 0);
  };

  const toggleGgDefence = () => {
    setGgDefence(!ggDefence);
    window.scrollTo(0, 0);
  };

  const toggleStrikingOffence = () => {
    setStrikingOffence(!strikingOffence);
    window.scrollTo(0, 0);
  };

  const toggleStrikingDefence = () => {
    setStrikingDefence(!strikingDefence);
    window.scrollTo(0, 0);
  };

  const toggleWallOffence = () => {
    setwallOffence(!wallOffence);
    window.scrollTo(0, 0);
  };

  const toggleWallDefence = () => {
    setwallDefence(!wallDefence);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {tkOffence && (
        <div>
          <TakedownsOffence toggleTkOffence={toggleTkOffence} />
        </div>
      )}

      {tkDefence && (
        <div>
          <TakedownsDefence toggleTkDefence={toggleTkDefence} />
        </div>
      )}

      {ggOffence && (
        <div>
          <GroundGameOffence toggleGgOffence={toggleGgOffence} />
        </div>
      )}

      {ggDefence && (
        <div>
          <GroundGameDefence toggleGgDefence={toggleGgDefence} />
        </div>
      )}

      {strikingOffence && (
        <div>
          <StrikingOffence toggleStrikingOffence={toggleStrikingOffence} />
        </div>
      )}

      {strikingDefence && (
        <div>
          <StrikingDefence toggleStrikingDefence={toggleStrikingDefence} />
        </div>
      )}

      {wallOffence && (
        <div>
          <WallgameOffence toggleWallOffence={toggleWallOffence} />
        </div>
      )}
      {wallDefence && (
        <div>
          <WallgameDefence toggleWallDefence={toggleWallDefence} />
        </div>
      )}

      <Header />
      <div className="row">
        <Card
          handler={toggleTkOffence}
          title="Takedowns"
          text="Offence"
          img="images/wrestling_offence.jpeg"
        ></Card>
        <Card
          handler={toggleTkDefence}
          title="Takedowns"
          text="Defence"
          img="images/wrestling_defence.png"
        />
      </div>
      <div className="row">
        <Card
          handler={toggleGgOffence}
          title="Ground game"
          text="Offence"
          img="images/grappling_offence.jpeg"
        />
        <Card
          handler={toggleGgDefence}
          title="Ground game"
          text="Defence"
          img="images/grappling_defence.jpeg"
        />
      </div>
      <div className="row">
        <Card
          handler={toggleStrikingOffence}
          title="Striking"
          text="Offence"
          img="images/striking_offence.jpeg"
        />
        <Card
          handler={toggleStrikingDefence}
          title="Striking"
          text="Defence"
          img="images/striking_defence.jpeg"
        />
      </div>
      <div className="row">
        <Card
          handler={toggleWallOffence}
          title="Wall game"
          text="Offence"
          img="images/wall_offence.webp"
        />
        <Card
          handler={toggleWallDefence}
          title="Wall game"
          text="Defence"
          img="images/wall_defence.jpeg"
        />
      </div>

      <div className="row">
        <Link to="/">
          <button className="log-out-btn">Logg ut</button>
        </Link>
      </div>
    </div>
  );
}

function Card({ title = "", text = "", img = "", handler = "" }) {
  return (
    <div className="card" onClick={handler}>
      <div className="layer"></div>
      <img src={img} alt="" />
      <p className="category-title">{title}</p>
      <p className="category-text">{text}</p>
    </div>
  );
}

export function AddVideo() {
  return (
    <div className="add-container">
      <p>
        LEGG TIL <AddAPhotoIcon fontSize="x-small" className="add-icon" />
      </p>
    </div>
  );
}
