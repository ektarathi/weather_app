import { createSlice } from "@reduxjs/toolkit";

export const citySelection = createSlice({
  name: "citySelection",
  initialState: {
   cityName: "",
   invalidCity: ""
  },
  reducers: {
    setCityName: (state, action) => {
      state.cityName = action.payload;
    },
    setInvalidCity: (state, action) => {
      state.invalidCity = action.payload
    }
  },
});

export const { setCityName, setInvalidCity } = citySelection.actions;

export default citySelection.reducer;
