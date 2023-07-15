import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import productReducer from './features/product/productSlice';
import userReducer from './features/users/userSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    [api.reducerPath]: api.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
