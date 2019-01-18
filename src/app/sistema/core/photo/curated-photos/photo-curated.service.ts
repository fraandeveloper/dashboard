import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { environment } from 'src/environments/environment';
import { Photo } from 'src/app/sistema/photos/photo/photo';


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
