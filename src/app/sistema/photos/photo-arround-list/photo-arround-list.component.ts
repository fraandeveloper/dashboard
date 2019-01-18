import { Component, OnInit } from '@angular/core';
import { PhotoArroundService } from '../../core/photo/photo-arround.service';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-arround-list',
  templateUrl: './photo-arround-list.component.html',
  styleUrls: ['./photo-arround-list.component.scss']
})
export class PhotoArroundListComponent implements OnInit {

  photos: Photo[] = [];
  constructor(private photoService: PhotoArroundService) { }

  ngOnInit() {
    this.photoService.getArroundPhotos()
    .subscribe(
      photos => {
        console.log(photos);
        this.photos = photos;
      }
    )
  }

}
