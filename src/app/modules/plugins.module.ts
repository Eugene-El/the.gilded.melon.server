import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PluginsRoutingModule } from '../routers/plugins-routing.module';
import { PluginsComponent } from '../pages/plugins/plugins.component';
import { SharedModule } from './shared.module';


@NgModule({
  declarations: [
    PluginsComponent,
  ],
  imports: [
    CommonModule,
    PluginsRoutingModule,
    SharedModule
  ]
})
export class PluginsModule { }
