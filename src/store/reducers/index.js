import { combineReducers } from "redux";

import busca from "./busca-team";
import detalha from "./detalha-team";
import auth from "./auth";

const rootReducer = combineReducers({
  busca,
  detalha,
  auth
});

export default rootReducer;
