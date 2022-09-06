import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './Store';
import axios from 'axios';
let httpHeader = 'https://restcountries.com/v3.1/name';

interface CountriesState {
  data: any[];
  weatherData: any[];
  loading: boolean;
  name: string;
  error: null;
}

const initialState: CountriesState = {
  data: [],
  weatherData: [],
  loading: false,
  name: '',
  error: null,
};

export const getCountries = createAsyncThunk<CountriesState>(
  'countries/getCounries',
  async (name: string, thunkAPI) => {
    try {
      const response = await axios.get(`${httpHeader}/${name}`);
      //   const response = await axios.get(`${httpHeader}/India`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const CountriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCountries.pending, (state) => {
      state.data;
    });
    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getCountries.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { setCountries } = CountriesSlice.actions;

export const selectCountries = (state: RootState) => state.countries.data;

export default CountriesSlice.reducer;
