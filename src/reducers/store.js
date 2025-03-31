import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loginSliceReducer from '../features/loginSlice';
import tokenSliceReducer from '../features/tokenSlice';
import slotBookingReducer from '../features/slotBookingSlice';
import selectedLessonReducer from '../features/selectedLessonSlice';

// Reusable persist config generator
const createPersistConfig = (key) => ({
  key,
  storage,
});

const rootReducer = combineReducers({
  auth: persistReducer(createPersistConfig('auth'), loginSliceReducer),
  token: persistReducer(createPersistConfig('token'), tokenSliceReducer),
  slotsBooking: persistReducer(createPersistConfig('slotsBooking'), slotBookingReducer),
  selectedLesson: persistReducer(createPersistConfig('selectedLesson'), selectedLessonReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

export { store, persistor };
