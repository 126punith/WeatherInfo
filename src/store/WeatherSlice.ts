import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './Store';
import axios from 'axios';

let httpHeader =
  'http://api.weatherstack.com/current?access_key=eacc77121e7445cf5c40a738beeb7596&query';

interface WeatherState {
  weatherData: any[];
  loading: boolean;
  name: string;
  error: null;
}

const initialState: WeatherState = {
  weatherData: [],
  loading: false,
  name: '',
  error: null,
};

export const getWeather = createAsyncThunk<WeatherState>(
  'weather/getWeather',
  async (name: string, thunkAPI) => {
    try {
      const response = await axios.get(`${httpHeader}=${name}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const WeatherSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<any[]>) => {
      state.weatherData = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWeather.pending, (state) => {
      state.weatherData;
    });
    builder.addCase(getWeather.fulfilled, (state, action) => {
      state.weatherData = action.payload;
      state.loading = false;
    });
    builder.addCase(getWeather.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { setWeather } = WeatherSlice.actions;

export const selectCountries = (state: RootState) => state.countries.data;

export default WeatherSlice.reducer;
