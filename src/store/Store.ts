import { configureStore } from '@reduxjs/toolkit';
import CountriesReducer from './CountriesSlice';
import WeatherReducer from './WeatherSlice';
export const store = configureStore({
  reducer: {
    countries: CountriesReducer,
    weather: WeatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
