import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Brainshop, BrainshopResp } from '../models';

@Injectable({
  providedIn: 'root',
})
export class BrainshopService {
  baseUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getBrainsReply(params: Brainshop): Observable<BrainshopResp> {
    return this.http.get<any>(
      `${this.baseUrl}?&msg=${params.msg}`
    );
  }
}
