import { configureStore } from '@reduxjs/toolkit';
import slotBookingReducer from '../features/slotBookingSlice';
import slotSliceReducer from '../features/slotSlice';
import loginSliceReducer from '../features/loginSlice';
import { persistStore, persistReducer } from 'redux-persist'; 

const store = configureStore({
  reducer: {
    slots: slotBookingReducer,
    slotsAdd: slotSliceReducer,
    login: loginSliceReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false, // Required for redux-persist
  //   }),
});


const persistor = persistStore(store);

export { store, persistor };
