import { createSlice } from "@reduxjs/toolkit";
import {Music} from "../types/music";

interface initialState {
  getMusicsState: {
    loading: boolean;
    data: Music[];
    error: boolean;
  };
  addMusicState: {
    loading: boolean;
    data: Music;
    error: boolean;
  };
  deleteMusicState: {
    loading: boolean;
    data: Music;
    error: boolean;
  };
  updateMusicState: {
    loading: boolean;
    data: Music;
    error: boolean;
  };
  currentMusicState: {
    data: Music | null;
  };

}

const initialState: initialState = {
  getMusicsState: {
    loading: false,
    data: [],
    error: false,
  },
  addMusicState: {
    loading: false,
    data: {} as Music,
    error: false,
  },
  deleteMusicState: {
    loading: false,
    data: {} as Music,
    error: false,
  },
  updateMusicState: {
    loading: false,
    data: {} as Music,
    error: false,
  },
  currentMusicState: {
    data: null,
  },
};

const musicSlice = createSlice({
  name: "music",
  initialState: initialState,
  reducers: {
    getMusicsRequest: (state) => {
      state.getMusicsState.loading = true;
    },
    getMusicsSuccess: (state, action) => {
      state.getMusicsState.loading = false;
      state.getMusicsState.data = action.payload;
    },
    getMusicsFailure: (state) => {
      state.getMusicsState.loading = false;
      state.getMusicsState.error = true;
    },
    addMusicRequest: (state, action) => {
      state.addMusicState.loading = true;
    },
    addMusicSuccess: (state, action) => {
      state.addMusicState.loading = false;
      state.addMusicState.data = action.payload;
    },
    addMusicFailure: (state) => {
      state.addMusicState.loading = false;
      state.addMusicState.error = true;
    },
    deleteMusicRequest: (state, action) => {
      state.deleteMusicState.loading = true;
    },
    deleteMusicSuccess: (state, action) => {
      state.deleteMusicState.loading = false;
      state.deleteMusicState.data = action.payload;
    },
    deleteMusicFailure: (state) => {
      state.deleteMusicState.loading = false;
      state.deleteMusicState.error = true;
    },
    updateMusicRequest: (state, action) => {
      state.updateMusicState.loading = true;
    },
    updateMusicSuccess: (state, action) => {
      state.updateMusicState.loading = false;
      state.updateMusicState.data = action.payload;
    },
    updateMusicFailure: (state) => {
      state.updateMusicState.loading = false;
      state.updateMusicState.error = true;
    },
    setCurrentMusic: (state, action) => {
      state.currentMusicState.data = action.payload;
    }
  },
});


export const {
  getMusicsRequest,
  getMusicsSuccess,
  getMusicsFailure,
  addMusicRequest,
  addMusicSuccess,
  addMusicFailure,
  deleteMusicRequest,
  deleteMusicSuccess,
  deleteMusicFailure,
  updateMusicRequest,
  updateMusicSuccess,
  updateMusicFailure,
  setCurrentMusic,
} = musicSlice.actions;

export default musicSlice.reducer;