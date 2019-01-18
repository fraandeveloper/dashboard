import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from '../../photos/photo/photo';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PhotoCuratedService {

  constructor(public http: HttpClient) { }

  getCurated() {
    return this.http
    .get<Photo[]>(environment.apiURL + 'curated?per_page=8&page=1');
  }
}
