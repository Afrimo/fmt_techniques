import { Link } from "react-router-dom";

import { Header } from "./Header";
import "../styles/Login.css";

export function Login() {
  return (
    <div>
      <Header />
      <LoginInputs />
    </div>
  );
}

function LoginInputs() {
  return (
    <div className="inputs-body">
      <input placeholder="Brukernavn" />
      <input className="password" placeholder="Passord" type="password" />
      <Link to="/Menu">
        <button className="login-btn">Logg inn</button>
      </Link>
    </div>
  );
}
