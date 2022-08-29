import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { animal: "" };

const animalSlice = createSlice({
  name: "animal",
  initialState: INITIAL_STATE,
  reducers: {
    changeAnimal: (state, { payload }) => {
      return {
        ...state,
        animal: payload,
        breed: "",
      };
    },
  },
});

export const { changeAnimal } = animalSlice.actions;

export default animalSlice.reducer;
