import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Brainshop, BrainshopResp } from 'src/app/core/models';
import {
  ClearShop,
  LoadBrainShopsResp,
  getBrainShops,
} from 'src/app/core/store/brainshop-store';
import { AppState } from 'src/app/core/store/root-state';

@Component({
  selector: 'app-brainshop',
  templateUrl: './brainshop.component.html',
})
export class BrainshopComponent implements OnInit {
  public msg!: Brainshop;
  public brainshopResp!: string | null;
  public reverse: boolean = false;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  submitRequest(event: any): void {
    this.msg = { ...event, uid: 1234 };
    this.reverse = false;
    this.store.dispatch(new LoadBrainShopsResp(this.msg));
    this.store
      .select(getBrainShops)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((resp) => {
        if (resp) {
          setTimeout(() => {
            this.reverse = true;
            const msg = `Hello there! What can I do for you? You can add the messages below to see how I work
            eg. "What is your name" and "Where are you from"`;
            this.brainshopResp = resp.cnt ? resp.cnt : msg;
            this.store.dispatch(new ClearShop())
          }, 2000);
        }
      });
  }
}
