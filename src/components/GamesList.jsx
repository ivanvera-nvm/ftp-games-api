import React from "react";
import { Link } from "react-router-dom";

import "../styles/list.css";

const list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const filters = ["Platform:", "Genre/Tag:", "Sort by:", "Advanced filter:"];

const GamesList = () => {
  return (
    <div className="list">
      <span className="filter-container">
        <ul className="filters">
          {filters.map((item, i) => (
            <li>
              <a>
                {item}
                <i className="icon" />
              </a>
            </li>
          ))}
        </ul>
      </span>
      {list.map((items, i) => (
        <div key={i} className="list-items">
          <div className="item-section">
            <img
              className="img"
              src="https://www.freetogame.com/g/452/thumbnail.jpg"
              alt="cover"
            ></img>
            <div className="info">Information</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GamesList;
