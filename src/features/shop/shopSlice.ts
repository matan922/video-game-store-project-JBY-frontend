import { createAsyncThunk, createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { Games } from '../../models/games';
import { getShop } from './shopAPI';


export interface ShopState {
  gamesList: Games []
}

const initialState: ShopState = {
    gamesList: []
};

export const getShopAsync = createAsyncThunk(
  'shop/getShop',
  async () => {
    const response = await getShop();
    return response.data;
  }
);

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder
      .addCase(getShopAsync.fulfilled, (state, action) => {
        state.gamesList = action.payload
      })
  },
});

export const {  } = shopSlice.actions;
export const selectGameList = (state: RootState) => state.shop.gamesList

export default shopSlice.reducer;
