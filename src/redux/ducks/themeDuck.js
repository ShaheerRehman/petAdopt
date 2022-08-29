import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { theme: "darkblue" };

const themeSlice = createSlice({
  name: "theme",
  initialState: INITIAL_STATE,
  reducers: {
    changeTheme: (state, { payload }) => {
      // console.log(state);
      // console.log(payload);
      return {
        ...state,
        theme: payload,
      };
    },
  },
});
export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
