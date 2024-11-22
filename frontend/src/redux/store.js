import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from '../redux/authSlice';
import jobSlice from '../redux/jobSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import  companySlice from './companySlice'

// Define persistConfig
const persistConfig = {
  key: 'root', // Key for the root level of the persisted state
  storage, // Specify the storage engine
  whitelist: ['auth', 'job'], // Reducers you want to persist
};

const rootReducer = combineReducers({
  auth: authSlice,
  job: jobSlice,
  company:companySlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
export const persistor = persistStore(store);
