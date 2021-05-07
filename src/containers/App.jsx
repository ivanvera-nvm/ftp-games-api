import React from "react";
import { Link } from "react-router-dom";

import "../styles/main.css";

const siderItems = ["My List", "Top 10", "Reviews"];

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <h1>FTP GAMES</h1>
        <ul>
          <li>
            <Link to="#">Games</Link>
          </li>
          <li>
            <Link to="#">Top 10 2021</Link>
          </li>
        </ul>
      </header>
      <div className="sider">
        <ul className='sider-list'>
          {siderItems.map((item, i) => (
            <li key={i} className="sider-item">
              <Link className="sider-btn">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
