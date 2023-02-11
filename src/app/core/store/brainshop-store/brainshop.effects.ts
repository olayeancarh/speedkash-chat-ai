import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, startWith, switchMap, map, catchError, of } from 'rxjs';
import * as brainshopActions from './brainshop.actions';
import { BrainshopService } from 'src/app/core/service/brainshop.service';

@Injectable()
export class BrainShopEffects {
  constructor(private _actions$: Actions, private _brainshopService: BrainshopService) {}

  loadBrainShop$: Observable<Action> = createEffect(() =>
    this._actions$.pipe(
      ofType<brainshopActions.LoadBrainShopsResp>(
        brainshopActions.BrainShopActionTypes.LoadBrainShopsResp,
      ),
      switchMap(action =>
        this._brainshopService.getBrainsReply(action.payload).pipe(
          map(items => new brainshopActions.LoadBrainShopsRespSuccess(items)),
          catchError(error =>
            of(new brainshopActions.LoadBrainShopsRespFail(error)),
          ),
        ),
      ),
    ),
  );
}
