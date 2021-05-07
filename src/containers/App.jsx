import React from "react";
import { Link } from "react-router-dom";
import GamesList from "../components/GamesList";

import "../styles/main.css";

const siderItems = ["My List", "Top 10", "Reviews"];

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <h1>FTP GAMES</h1>
        <ul>
          <li>
            <Link to="#">Games</Link>
          </li>
          <li>
            <Link to="#">Top 10 2021</Link>
          </li>
        </ul>
      </div>

      <span className="new-content">
        <div className="sider">
          <ul className="sider-list">
            {siderItems.map((item, i) => (
              <li key={i} className="sider-item">
                <Link className="sider-btn">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <GamesList />
      </span>
    </div>
  );
}

export default App;
