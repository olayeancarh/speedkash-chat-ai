import { createSelector } from '@ngrx/store';
import { BrainShopData } from '.';
import { AppState } from '../root-state';

const getBrainShopState = (state: AppState): BrainShopData => state.brainshop;

export const getBrainShopLoading = createSelector(
  getBrainShopState,
  state => state.isLoading,
);

export const getBrainShopError = createSelector(getBrainShopState, state => state.error);

export const getBrainShops = createSelector(
  getBrainShopState,
  state => state.brainshop,
);
