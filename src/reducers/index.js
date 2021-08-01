import locationReducer from "./locationReducer";
import locationDataReducer from "./locationDataReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  location: locationReducer,
  locationData: locationDataReducer,
});

export default rootReducer;
