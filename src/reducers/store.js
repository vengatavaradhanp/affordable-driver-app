import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import slotBookingReducer from '../features/slotBookingSlice';
// import slotSliceReducer from '../features/slotSlice';
import loginSliceReducer from '../features/loginSlice';
import { persistStore, persistReducer } from 'redux-persist'; 
import storage from "redux-persist/lib/storage"; 

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, loginSliceReducer)
});

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false
  //   }),
});

const persistor = persistStore(store);

export { store, persistor };
