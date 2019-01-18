import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from './../../photos/photo/photo';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PhotoArroundService {

  constructor(private http: HttpClient) { }

  getArroundPhotos() {
    return this.http.get<Photo[]>(environment.apiURL + 'random?count=10')
  }
}
