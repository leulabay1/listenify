import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Music} from "../types/music";

export interface ToggleState {
  editFormToggle: {
    editData: Music;
    editToggle: boolean;
  };
  deleteToggle: {
    deleteData: Music;
    deleteToggle: boolean;
  };
  editDeletePopup: {
    idx: number;
  };
}

const initialData: Music =
  {
    "_id": "65c1498a4f763d3da3e1b3b8",
    "title": "Eternal Light",
    "duration_ms": 193740,
    "image_url": "https://i.scdn.co/image/ab67616d0000b273d93501aba7bc1140aac628c6",
    "release_date": "2019-12-13T00:00:00.000Z",
    "genre": "pop",
    "artist": {
      "name": "Free Nationals",
      "popularity": 61,
      "image_url": "https://i.scdn.co/image/ab6761610000e5eb98bcf91183b8a28e6dd029d3",
      "followers": 261534,
      "_id": "65c1498a4f763d3da3e1b3b9"
    },
  }
const initialToggleState: ToggleState = {
  editFormToggle: {
    editData: initialData,
    editToggle: false,
  },
  deleteToggle: {
    deleteData: initialData,
    deleteToggle: false,
  },
  editDeletePopup: {
    idx: -1,
  }
}


const toggleSlice = createSlice({
  name: 'toogle',
  initialState: initialToggleState,
  reducers: {
    setEdit(state, action){
      state.editFormToggle.editData = action.payload;
      state.editFormToggle.editToggle = true;
    },
    turnOffEdit(state){
      state.editFormToggle.editData = initialData;
      state.editFormToggle.editToggle = false;
    },
    setDelete(state, action){
      state.deleteToggle.deleteData = action.payload.musicData;
      state.deleteToggle.deleteToggle = true;
    },
    turnOffDelete(state){
      state.deleteToggle.deleteData = initialData;
      state.deleteToggle.deleteToggle = false
    },
    setEditDeletePopup(state, action){
      if (state.editDeletePopup.idx === action.payload){
        state.editDeletePopup.idx = -1;
        return;
      }else{
        state.editDeletePopup.idx = action.payload;
      }
    },
  },
});

export default toggleSlice.reducer;

export const {
  setEdit,
  turnOffEdit,
  setDelete,
  turnOffDelete,
  setEditDeletePopup,
} = toggleSlice.actions;