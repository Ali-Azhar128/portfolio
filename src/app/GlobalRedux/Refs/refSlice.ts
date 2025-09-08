import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RefObject } from "react";
import { RootState } from "../store";

export interface RefState {
  [key: string]: RefObject<HTMLElement> | null;
}

const initialState: RefState = {};

export const refSlice = createSlice({
  name: 'refs',
  initialState, 
  reducers: {
    setRef: (state: any, action: PayloadAction<{ key: string; ref: RefObject<HTMLElement> | null }>) => {
      state[action.payload.key] = action.payload.ref;
    },
    clearRef: (state, action: PayloadAction<string>) => {
      state[action.payload] = null;
    },
  },
});

export const { setRef, clearRef } = refSlice.actions;
export default refSlice.reducer;