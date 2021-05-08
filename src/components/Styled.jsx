import React from "react";
import { Link } from "react-router-dom";

import "../styles/buttons.css";
import "../styles/neonText.css";

const spanChilds = [1, 2, 3, 4];

export default function Styled() {
  return (
    <div className="body1">
      <h1 contentEditable="true" className="inter-text-h1">
        Test components
      </h1>

      <Link to="#" key={1} className="btn-box" href="#">
        {spanChilds.map((child) => (
          <span className="btn-spn"></span>
        ))}
        button 1
      </Link>
      <Link to="#" key={2} className="btn-box" href="#">
        {spanChilds.map((child) => (
          <span className="btn-spn"></span>
        ))}
        button 2
      </Link>

      <Link to="#" key={3} className="btn-box" href="#">
        {spanChilds.map((child) => (
          <span className="btn-spn"></span>
        ))}
        button 3
      </Link>
    </div>
  );
}
