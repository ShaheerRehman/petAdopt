import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { breed: "" };

const breedSlice = createSlice({
  name: "breed",
  initialState: INITIAL_STATE,
  reducers: {
    changeBreed: (state, { payload }) => {
      return {
        ...state,
        breed: payload,
      };
    },
  },
});

export const { changeBreed } = breedSlice.actions;

export default breedSlice.reducer;
