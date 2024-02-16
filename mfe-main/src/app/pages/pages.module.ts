import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SidePanelComponent } from './shared/components/side-panel/side-panel.component';


@NgModule({
  declarations: [
    PagesComponent,
    SidePanelComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
