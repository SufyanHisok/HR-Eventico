import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl } from 'src/assets/urlConfig';
import { venue } from '../models/venue.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  url:string = ApiUrl.apiUrl;

  constructor(public httpClient:HttpClient) { }

  getAllVenue(): Observable<any>{
    return this.httpClient.get<any>(this.url + '/api/Venues');
  }

  post(obj:any):Observable<any>{
    return this.httpClient.post(this.url + '/api/Venues', obj)
  }
}
