import { PhotoListResolverArround } from './../photos/photo-arround-list/photo-arround.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelComponent } from './panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { PhotoListResolver } from '../photos/photo-curated-lis/photo-list.resolver';


const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    resolve: {
      photos: PhotoListResolver,
      photo: PhotoListResolverArround
    },
    children: [
        {
            path: '',
            component: DashboardComponent,
            children: [
              {
                path: 'dashboard',
                component: DashboardComponent
              }
            ]
        },
        {
          path: 'footer',
          component: FooterComponent
        },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
