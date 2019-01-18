import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-curated-lis',
  templateUrl: './photo-curated-lis.component.html',
  styleUrls: ['./photo-curated-lis.component.scss']
})
export class PhotoCuratedLisComponent implements OnInit {

  photos: Photo[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }

}
