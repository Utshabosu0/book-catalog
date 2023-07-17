/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IBook } from '../../../tyoes/globalTypes';

interface IWishList {
  wishLists: IBook[];
  readBooks: IBook[];
}

const initialState: IWishList = {
  wishLists: [],
  readBooks: [],
};

const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<IBook>) => {
      state.wishLists.push(action.payload);
    },
    addToReadBooks: (state, action: PayloadAction<IBook>) => {
      state.wishLists = state.wishLists.filter(
        (book) => book._id !== action.payload._id
      );
      state.readBooks.push(action.payload);
    },
    removeFromReadBooks: (state, action: PayloadAction<IBook>) => {
      state.readBooks = state.readBooks.filter(
        (book) => book._id !== action.payload._id
      );
    },
  },
});

export const { addToWishList, addToReadBooks, removeFromReadBooks } =
  wishListSlice.actions;

export default wishListSlice.reducer;
