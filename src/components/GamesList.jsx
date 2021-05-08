import React from "react";

import "../styles/list.css";

const list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const GamesList = () => {
  return (
    <div className="list">
      {list.map((items, i) => (
        <div key={i} className="list-items">
          <div className="item-section">
            <div className="img">Image</div>
            <div className="info">Information</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GamesList;
