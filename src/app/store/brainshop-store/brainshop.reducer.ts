import { BrainShopActions, BrainShopActionTypes } from './brainshop.actions';
import { BrainShopData, initialBrainShopState } from './brainshop.state';

export const brainshopReducer = (state = initialBrainShopState, action: BrainShopActions): BrainShopData => {
  switch (action.type) {
    case BrainShopActionTypes.LoadBrainShopsResp: {
      return { ...state, isLoading: true, error: null };
    }

    case BrainShopActionTypes.LoadBrainShopsRespSuccess: {
      return { ...state, brainshop: action.payload, isLoading: false, error: null };
    }

    case BrainShopActionTypes.LoadBrainShopsRespFail: {
      return { ...state, isLoading: false, error: action.payload };
    }

    default: {
      return state;
    }
  }
}
