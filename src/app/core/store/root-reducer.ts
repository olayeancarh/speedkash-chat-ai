import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './root-state';
import { brainshopReducer } from './brainshop-store';

export const appReducers: ActionReducerMap<AppState, any> = {
  brainshop: brainshopReducer,
};
