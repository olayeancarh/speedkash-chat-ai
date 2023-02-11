import { BrainShopData, initialBrainShopState } from "./brainshop-store";

export interface AppState {
  brainshop: BrainShopData;
}

export const initialAppState: AppState = {
  brainshop: initialBrainShopState,
};
