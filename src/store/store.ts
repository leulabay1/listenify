import { configureStore } from "@reduxjs/toolkit";
import musicSlice from "../features/music-slice";
import toggleSlice from "../features/toogle-slice";
import createSagaMiddleware from "redux-saga"
import musicSaga from "../saga/saga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore(
  {
    reducer: {
      music: musicSlice,
      toggle: toggleSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: false,
      }).concat(sagaMiddleware),
  }
);

sagaMiddleware.run(musicSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch