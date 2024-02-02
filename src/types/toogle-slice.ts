import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface ToogleState {
}

const toogleSlice = createSlice({
  name: 'toogle',
  initialState: false,
  reducers: {
    toogle: (state, action: PayloadAction<boolean>) => !state,
  },
});