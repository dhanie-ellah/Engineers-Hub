import { legacy_createStore as createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import userReducer from "../state/reducer";

const persistConfig = {
  key: "user",
  storage: AsyncStorage,
};

// combine all reducer
const allReducer = combineReducers({
  user: persistReducer(persistConfig, userReducer),
});

let store = createStore(allReducer);
let persistor = persistStore(store);

export default () => {
  return {
    store,
    persistor,
  };
};
