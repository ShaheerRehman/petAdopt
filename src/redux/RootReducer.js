import theme from "./ducks/themeDuck";
import breed from "./ducks/breedDuck";
import location from "./ducks/locationDuck";
import animal from "./ducks/animalDuck";
import { combineReducers } from "redux";

const reducers = {
  theme,
  breed,
  location,
  animal,
};

export default combineReducers(reducers);
