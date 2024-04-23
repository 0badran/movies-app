import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteReducers from "./slices/favoriteMovie";
import moviesReducer from "./slices/globalData";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

export const Store = configureStore({
  reducer: persistReducer(persistConfig, combineReducers({ favoriteList: favoriteReducers, moviesList: moviesReducer })),
});

export const persister = persistStore(Store);