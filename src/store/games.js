import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import headers from "../config/client.config";

export const allGames = createAsyncThunk("ALL_GAMES", async () => {
  try {
    const res = await axios.get(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
      { headers }
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
});

export const singleGame = createAsyncThunk("SINGLE_GAME", async (id) => {
  try {
    const res = await axios.get(
      `https://www.freetogame.com/api/game?id=${id}`,
      { headers }
    );
    return res;
  } catch (e) {
    console.log(e);
  }
});

export const byTag = createAsyncThunk("BY_TAG_GAMES", async (tag) => {
  try {
    const res = await axios.get(
      `https://www.freetogame.com/api/games?category=${tag}`,
      { headers }
    );
    return res;
  } catch (e) {
    console.log(e);
  }
});

const initialState = {
  games: [],
  game: {},
  byCategoryTag: [],
};

const gamesReducer = createReducer(initialState, {
  [allGames.fulfilled]: (state, action) => {
    return { ...state, games: action.payload };
  },
  [singleGame.fulfilled]: (state, action) => {
    return { ...state, game: action.payload };
  },
  [byTag.fulfilled]: (state, action) => {
    return { ...state, byCategoryTag: action.payload };
  },
});

export default gamesReducer;
