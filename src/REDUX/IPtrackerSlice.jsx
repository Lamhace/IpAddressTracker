// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
// };

// const IPtrackerSlice = createSlice({
//   name: "IPtrackerSlice",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//   },
// });

// export const { increment, decrement } = IPtrackerSlice.actions;
// export default IPtrackerSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  ipData: [2,4,6],
  status: "idle" | 'loading' | 'succeeded' , 
  error: null,
};

export const fetchIPData = createAsyncThunk(
  "IPtrackerSlice/fetchIPData",
  async () => {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=YOUR_API_KEY&ipAddress=8.8.8.8`
    );
    const data = await response.json();
    return data; 
  }
);

// Slice definition
const IPtrackerSlice = createSlice({
  name: "IPtrackerSlice",
  initialState,
  reducers: {
    getIPData: (state) => {
       state.ipData = state.ipData
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIPData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIPData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.ipData = action.payload; 
      })
      .addCase(fetchIPData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { getIPData } = IPtrackerSlice.actions;
export default IPtrackerSlice.reducer;