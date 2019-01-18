import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo/photo.component';
import { PhotoCuratedLisComponent } from './photo-curated-lis/photo-curated-lis.component';
import { PhotosComponent } from './photo-curated-lis/photos/photos.component';
import { PhotoArroundListComponent } from './photo-arround-list/photo-arround-list.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoCuratedLisComponent,
    PhotosComponent,
    PhotoArroundListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PhotoComponent,
    PhotoCuratedLisComponent,
    PhotosComponent,
    PhotoArroundListComponent
  ]
})
export class PhotosModule { }
