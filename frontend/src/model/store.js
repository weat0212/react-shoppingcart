import { createStore, combineReducers } from "redux";
import { inventoryReducer } from "./inventoryReducer";

const rootReducer = combineReducers({
  inventoryReducer,
});

const store = createStore(rootReducer);

export default store;
