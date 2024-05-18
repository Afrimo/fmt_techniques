import { Link } from "react-router-dom";

import { Header } from "./Header";
import "../styles/Menu.css";

export function Menu() {
  return (
    <div>
      <Header />
      <div className="row">
        <Card
          title="Takedowns"
          text="Offence"
          img="images/wrestling_offence.jpeg"
        />
        <Card
          title="Takedowns"
          text="Defence"
          img="images/wrestling_defence.png"
        />
      </div>
      <div className="row">
        <Card
          title="Ground game"
          text="Offence"
          img="images/grappling_offence.jpeg"
        />
        <Card
          title="Ground game"
          text="Defence"
          img="images/grappling_defence.jpeg"
        />
      </div>
      <div className="row">
        <Card
          title="Striking"
          text="Offence"
          img="images/striking_offence.jpeg"
        />
        <Card
          title="Striking"
          text="Defence"
          img="images/striking_defence.jpeg"
        />
      </div>
      <div className="row">
        <Card title="Wall game" text="Offence" img="images/wall_offence.webp" />
        <Card title="Wall game" text="Defence" img="images/wall_defence.jpeg" />
      </div>

      <div className="btn-container">
        <Link to="/">
          <button className="log-out-btn">Logg ut</button>
        </Link>
      </div>
    </div>
  );
}

function Card({ title = "title", text = "text", img = "img" }) {
  return (
    <div className="card">
      <div className="layer"></div>
      <img src={img} />
      <p className="category-title">{title}</p>
      <p className="category-text">{text}</p>
    </div>
  );
}
