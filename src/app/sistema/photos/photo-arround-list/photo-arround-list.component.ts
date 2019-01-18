import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-arround-list',
  templateUrl: './photo-arround-list.component.html',
  styleUrls: ['./photo-arround-list.component.scss']
})
export class PhotoArroundListComponent implements OnInit {

  photo: Photo[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.photo = this.activatedRoute.snapshot.data['photo']
    
  }

}
