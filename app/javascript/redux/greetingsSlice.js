import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = '/api/greetings';

const initialState = {
  greetings: [], // Provide a default value for the greeting
  isLoading: false,
  error: null,
};

export const fetchGreetings = createAsyncThunk('greetings/fetchGreetings', async () => {
  try {
    const response = await fetch('/api/greetings');
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle error
    throw new Error('Failed to fetch greetings.');
  }
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {}, // No need for additional reducers here
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.greetings = action.payload;
        state.error = null;
      })
      .addCase(fetchGreetings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default greetingsSlice.reducer;
