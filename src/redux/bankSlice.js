import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    addBank: (state, action) => {
      //estos son los reducers
      const { data } = action.payload;
      state.data = data;
    },
    changeBank: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const { addBank, changeBank } = bankSlice.actions; // estas son las acciones
export default bankSlice.reducer;
