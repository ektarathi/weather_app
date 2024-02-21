import { createSlice } from "@reduxjs/toolkit";

export const citySelection = createSlice({
  name: "citySelection",
  initialState: {
   cityName: "",
  },
  reducers: {
    setCityName: (state, action) => {
      state.cityName = action.payload;
    },
  },
});

export const { setCityName } = citySelection.actions;

export default citySelection.reducer;
