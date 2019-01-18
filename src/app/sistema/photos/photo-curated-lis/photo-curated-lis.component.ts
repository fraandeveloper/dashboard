import { PhotoCuratedService } from './../../core/photo/photo-curated.service';
import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-curated-lis',
  templateUrl: './photo-curated-lis.component.html',
  styleUrls: ['./photo-curated-lis.component.scss']
})
export class PhotoCuratedLisComponent implements OnInit {

  photos: Photo[] = [];

  constructor(private photoServive: PhotoCuratedService) {}
  
  ngOnInit(): void {
    this.photoServive
    .getCurated()
    .subscribe(photos => {
      console.log(photos);
      this.photos = photos
    } );
  }

}
