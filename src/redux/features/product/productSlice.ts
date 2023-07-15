import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IBook {
  status: boolean;
  priceRange: number;
}

const initialState: IBook = {
  status: false,
  priceRange: 150,
};
const productSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    toggleState: (state) => {
      state.status = !state.status;
    },
    setPriceRange: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload;
    },
  },
});
export const { toggleState, setPriceRange } = productSlice.actions;
export default productSlice.reducer;
