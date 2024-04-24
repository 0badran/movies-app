import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteReducers from "./slices/favoriteMovie";
import moviesReducer from "./slices/globalData";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import spinnerReducer from "./slices/setSpinner";
import userReducer from "./slices/user";


const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['spinner'],
}

export const Store = configureStore({
  reducer: persistReducer(rootPersistConfig, combineReducers({
    user: userReducer,
    spinner: spinnerReducer,
    moviesList: moviesReducer,
    favoriteList: favoriteReducers,
  })),
});

export const persister = persistStore(Store);