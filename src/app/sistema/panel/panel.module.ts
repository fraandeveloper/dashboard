import { PhotoArroundService } from './../core/photo/photo-arround.service';
import { PhotoComponent } from './../photos/photo/photo.component';
import { PhotosModule } from './../photos/photos.module';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewComponent } from './view/view.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PanelComponent } from './panel.component';
import { PanelRoutingModule } from './panel.routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PhotoCuratedService } from '../core/photo/photo-curated.service';
import { PhotoListResolver } from '../photos/photo-curated-lis/photo-list.resolver';
import { PhotoListResolverArround } from '../photos/photo-arround-list/photo-arround.resolver';



@NgModule({
  declarations: [
    PanelComponent,
    ViewComponent,
    ToolbarComponent, 
    FooterComponent, 
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PanelRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    PhotosModule
  ],
  providers: [
    PhotoCuratedService,
    PhotoArroundService,
    PhotoListResolver,
    PhotoListResolverArround
  ]
})
export class PanelModule { }
