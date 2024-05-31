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
  };

  const toggleTkDefence = () => {
    setTkDefence(!tkDefence);
  };

  const toggleGgOffence = () => {
    setGgoffence(!ggOffence);
  };

  const toggleGgDefence = () => {
    setGgDefence(!ggDefence);
  };

  const toggleStrikingOffence = () => {
    setStrikingOffence(!strikingOffence);
  };

  const toggleStrikingDefence = () => {
    setStrikingDefence(!strikingDefence);
  };

  const toggleWallOffence = () => {
    setwallOffence(!wallOffence);
  };

  const toggleWallDefence = () => {
    setwallDefence(!wallDefence);
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
