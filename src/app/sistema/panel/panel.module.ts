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
    PanelRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule
  ]
})
export class PanelModule { }
