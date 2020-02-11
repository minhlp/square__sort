import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/map';
import { HttpParams } from '@angular/common/http';
import { Square, ISquare } from '../models/squared.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SquareService {

  constructor(
    private _apiService: ApiService,
  ) { }
  getSquares():  Observable<Square[]>{
   return this._apiService.get('/posts').pipe(
      map((data: ISquare[]) => {
        return data.map(item => new Square(item));
      })
    );
  }
  
}
