import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


import { Photo } from '../photo/photo';
import { PhotoArroundService } from '../../core/photo/photo-arround.service';


@Injectable({
    providedIn: 'root'
})
export class PhotoListResolverArround implements Resolve<Observable<Photo[]>> {

    constructor( private service: PhotoArroundService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        return this.service.getArroundPhotos();
    }
    
}