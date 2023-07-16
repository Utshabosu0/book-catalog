import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IBook } from '../../../tyoes/globalTypes';

interface IBookData {
  genre: string;
  publicationDate: string;
  search: IBook | null;
}

const initialState: IBookData = {
  genre: '',
  publicationDate: '',
  search: null,
};
const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<IBook | null>) => {
      state.search = action.payload;
    },
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setpublicationDate: (state, action: PayloadAction<string>) => {
      state.publicationDate = action.payload;
    },
  },
});
export const { setGenre, setpublicationDate, setSearch } = bookSlice.actions;
export default bookSlice.reducer;
