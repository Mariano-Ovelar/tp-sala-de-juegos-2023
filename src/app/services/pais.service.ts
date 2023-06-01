import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  listaPaises: any = null;
  private urlApiPaisRegion: string =
    'https://restcountries.com/v3.1/region/South%20America';
  constructor(private apiSrv: ApiService) {}

  getPaisRegion(): Observable<any> {
    return this.apiSrv.getData(this.urlApiPaisRegion);
  }
}
