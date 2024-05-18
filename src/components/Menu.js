import { Header } from "./Header";
import "../styles/Menu.css";

export function Menu() {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="card">
          <div className="layer"></div>
          <img src="images/wrestling_offence.jpeg" />
          <p className="category-title">Takedowns</p>
          <p className="category-text">Offence</p>
        </div>
        <div className="card">
          <div className="layer"></div>
          <img src="images/wrestling_defence.png" />
          <p className="category-title">Takedowns</p>
          <p className="category-text">Defence</p>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <div className="layer"></div>
          <img src="images/grappling_offence.jpeg" />
          <p className="category-title">Ground game</p>
          <p className="category-text">Offence</p>
        </div>
        <div className="card">
          <div className="layer"></div>
          <img src="images/grappling_defence.jpeg" />
          <p className="category-title">Ground game</p>
          <p className="category-text">Defence</p>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <div className="layer"></div>
          <img src="images/striking_offence.jpeg" />
          <p className="category-title">Striking</p>
          <p className="category-text">Offence</p>
        </div>
        <div className="card">
          <div className="layer"></div>
          <img src="images/striking_defence.jpeg" />
          <p className="category-title">Striking</p>
          <p className="category-text">Defence</p>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <div className="layer"></div>
          <img src="images/wall_offence.webp" />
          <p className="category-title">Wall game</p>
          <p className="category-text">Offence</p>
        </div>
        <div className="card">
          <div className="layer"></div>
          <img src="images/wall_defence.jpeg" />
          <p className="category-title">Wall game</p>
          <p className="category-text">Defence</p>
        </div>
      </div>
      <button className="log-out-btn">Logg ut</button>
    </div>
  );
}
