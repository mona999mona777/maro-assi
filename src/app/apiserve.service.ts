import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserveService {

  constructor(private _HttpClient:HttpClient) { }
  getdata():Observable<any>
  {
   return this._HttpClient.get('https://fakestoreapi.com/products');
  }
}
