import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import bookReducer from './features/Book/bookSlice';
import userReducer from './features/users/userSlice';
import wishListReducer from './features/wishList/wishListSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    [api.reducerPath]: api.reducer,
    user: userReducer,
    wishList: wishListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
