import { BrainshopResp } from 'src/app/core/models';

export interface BrainShopData {
  isLoading: boolean;
  error: any;
  brainshop: any;
}

export interface BrainShopState {
  readonly brainshop: BrainShopData
}

export const initialBrainShopState: BrainShopData = {
  isLoading: false,
  error: null,
  brainshop: null,
}
