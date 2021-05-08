import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allGames } from "../store/games";
import "../styles/list.css";

const list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const filters = ["Platform:", "Genre/Tag:", "Sort by:", "Advanced filter:"];

const GamesList = () => {
  const dispatch = useDispatch();

  const games = useSelector((state) => state.games.games.slice(0, 10));

  useEffect(() => {
    dispatch(allGames());
  }, []);

  console.log(games);

  return (
    <div className="list">
      <span className="filter-container">
        <ul className="filters">
          {filters.map((item, i) => (
            <li key={i}>
              <a>
                {item}
                <i className="icon" />
              </a>
            </li>
          ))}
        </ul>
      </span>
      {games.map((game, i) => (
        <div key={i} className="list-items">
          <div className="item-section">
            <img className="img" src={game.thumbnail} alt="cover"></img>
            <div className="info">
              <p>{game.title}</p>
              <p>{game.genre}</p>
              <p>{game.short_description}</p>
              <p>{game.release_date}</p>
          {/*     <p>{game.publisher}</p>
              <p>{game.platform}</p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GamesList;
