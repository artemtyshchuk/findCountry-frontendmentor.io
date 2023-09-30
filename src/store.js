import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./features/theme-slice";
import * as api from "./config";
import { controlsReducer } from "./features/controls-slice";
import { countriesReducer } from "./features/countries-slice";
import { detailsReducer } from "./features/details-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
    countries: countriesReducer,
    details: detailsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
