import { createContext, useContext, useEffect, useState, useReducer } from "react";
import { useShowError, useHideError } from "./ErrorProvider";
import { usePlayBuy } from "../providers/SoundProvider";

const NOT_ENOUGH_POINTS_ERROR = "Not enough points!";

const DEFAULT_SCORE_VALUE = 0;
const DEFAULT_POWER_COUNT = 1;
const DEFAULT_POWER_PRICE_VALUE = 10;
const DEFAULT_SUPER_POWER_COUNT = 0;
const DEFAULT_CLICKER_COUNT = 0;
const DEFAULT_CLICKER_PRICE_VALUE = 75;
const SUPER_POWER_VALUE = 10;
const DEFAULT_SUPER_POWER_PRICE_VALUE = 100;

const initialState = {
  score: DEFAULT_SCORE_VALUE,
  power: DEFAULT_POWER_COUNT,
  powerPrice: DEFAULT_POWER_PRICE_VALUE,
  clickerCount: DEFAULT_CLICKER_COUNT,
  clickerPrice: DEFAULT_CLICKER_PRICE_VALUE,
  superPower: DEFAULT_SUPER_POWER_COUNT,
  superPowerPrice: DEFAULT_SUPER_POWER_PRICE_VALUE,
};

const GameState = createContext(initialState);
const GameDispatch = createContext(() => null);

export function GameProvider({ children }) {
  const showError = useShowError();
  const hideError = useHideError();
  const playBuy = usePlayBuy();

  const [state, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "incrementScore": {
        return { ...state, score: state.score + state.power + state.superPower * SUPER_POWER_VALUE };
      }
      case "autoIncrement": {
        return { ...state, score: state.score + state.clickerCount };
      }
      case "buyAutoClicker": {
        try {
          if (state.score < state.clickerPrice) throw new Error(NOT_ENOUGH_POINTS_ERROR);
          hideError();
          playBuy();
          return {
            ...state,
            score: state.score - state.clickerPrice,
            clickerCount: state.clickerCount + 1,
            clickerPrice: state.clickerPrice * 2,
          };
        } catch (error) {
          showError(error.message);
          return state;
        }
      }
      case "buyPower": {
        try {
          if (state.score < state.powerPrice) throw new Error(NOT_ENOUGH_POINTS_ERROR);
          hideError();
          playBuy();
          return {
            ...state,
            score: state.score - state.powerPrice,
            power: state.power + 1,
            powerPrice: state.powerPrice * 2,
          };
        } catch (error) {
          showError(error.message);
          return state;
        }
      }
      case "buySuperPower": {
        try {
          if (state.score < state.superPowerPrice) throw new Error(NOT_ENOUGH_POINTS_ERROR);
          hideError();
          playBuy();
          return {
            ...state,
            score: state.score - state.superPowerPrice,
            superPower: state.superPower + 1,
            superPowerPrice: state.superPowerPrice * 2,
          };
        } catch (error) {
          showError(error.message);
          return state;
        }
      }
      case "reset": {
        return initialState;
      }
      default: {
        return state;
      }
    }
  }, initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch("autoIncrement");
    }, 1000);
    return () => clearInterval(interval);
  }, [state.clickerCount]);

  return (
    <GameState.Provider value={state}>
      <GameDispatch.Provider value={dispatch}>{children}</GameDispatch.Provider>
    </GameState.Provider>
  );
}

export const useGameState = () => {
  return useContext(GameState);
};
export const useGameDispatch = () => {
  return useContext(GameDispatch);
};
