import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteReducers from "./slices/favoriteMovie";
import moviesReducer from "./slices/globalData";
import storageSession from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';
import spinnerReducer from "./slices/setSpinner";
import userReducer from "./slices/user";


const rootPersistConfig = {
  key: 'root',
  storage:storageSession,
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