import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private _httpClient: HttpClient) {}

    // private formatErrors(error: any): Observable<any> {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    //     console.error('ApiService catch error: ', error); // log to console instead
    //     return throwError(error);
    // }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this._httpClient.get(`${environment.api_url}${path}`, {
            params
        });
    }
   
}
