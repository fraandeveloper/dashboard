import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { PhotoCuratedService } from './../../core/photo/photo-curated.service';
import { Photo } from '../photo/photo';
import { PhotoArroundService } from '../../core/photo/photo-arround.service';


@Injectable({
    providedIn: 'root'
})
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {

    constructor( private service: PhotoCuratedService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        return this.service.getCurated()
    }
    
}
