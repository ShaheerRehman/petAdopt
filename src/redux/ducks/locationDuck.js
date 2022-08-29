import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { location: "Seattle, WA" };

const locationSlice = createSlice({
  name: "location",
  initialState: INITIAL_STATE,
  reducers: {
    changeLocation: (state, { payload }) => {
      // console.log(payload);
      return {
        ...state,
        location: payload,
      };
    },
  },
});
export const { changeLocation } = locationSlice.actions;
export default locationSlice.reducer;
//   INITIAL_STATE,
//   {
//     [changeLocation.type]: (state, action) => {
//       state.location = action.payload;
//     },
//   },
//   [],
//   (state) => state
// );
