import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelComponent } from './panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
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
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
