import { combineReducers } from "redux";

import busca from "./busca-team";
import detalha from "./detalha-team";

const rootReducer = combineReducers({
  busca,
  detalha
});

export default rootReducer;
