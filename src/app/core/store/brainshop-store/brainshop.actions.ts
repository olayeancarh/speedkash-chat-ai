import { Action } from '@ngrx/store';
import { Brainshop, BrainshopResp } from 'src/app/core/models';

export enum BrainShopActionTypes {
  LoadBrainShopsResp = '[BrainShops] Load BrainShops',
  LoadBrainShopsRespSuccess = '[BrainShops] Load BrainShops Success',
  LoadBrainShopsRespFail = '[BrainShops] Load BrainShops Fail',

  ClearShop = '[Shop] Clear Shop',
}

export class LoadBrainShopsResp implements Action {
  readonly type = BrainShopActionTypes.LoadBrainShopsResp;
  constructor(public payload: Brainshop) {}
}

export class LoadBrainShopsRespSuccess implements Action {
  readonly type = BrainShopActionTypes.LoadBrainShopsRespSuccess;
  constructor(public payload: BrainshopResp) {}
}

export class LoadBrainShopsRespFail implements Action {
  readonly type = BrainShopActionTypes.LoadBrainShopsRespFail;
  constructor(public payload: any) {}
}

export class ClearShop implements Action {
  readonly type = BrainShopActionTypes.ClearShop;
}

export type BrainShopActions =
  | LoadBrainShopsResp
  | LoadBrainShopsRespSuccess
  | LoadBrainShopsRespFail
  | ClearShop;
