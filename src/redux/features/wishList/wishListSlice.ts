/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IBook } from '../../../tyoes/globalTypes';

interface IWishList {
  wishList: IBook[];
  readBook: IBook[];
}

const initialState: IWishList = {
  wishList: [],
  readBook: [],
};

const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<IBook>) => {
      state.wishList.push(action.payload);
    },
  },
});

export const { addToWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
