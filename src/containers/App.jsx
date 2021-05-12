import React from "react";
import { Link } from "react-router-dom";
import GamesList from "../components/GamesList";

import "../sass/main.scss";


const siderItems = ["My List", "Top 10", "Reviews"];

function App() {
  return (
    <div className="container">
      <nav>
        <h1 className="inter-text-h1">FTP Games</h1>
      </nav>
      <div id="sidebar">
        <ul className="sider-list">
          {siderItems.map((item, i) => (
            <li key={i}>
              <div onClick={()=>console.log('click')} className="sider-btn">
                {item}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div id="content1">Content1</div>
      <main>
        <GamesList />
      </main>
      <footer id="content">Footer</footer>
    </div>
  );
}

export default App;
