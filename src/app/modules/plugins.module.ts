import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PluginsRoutingModule } from '../routers/plugins-routing.module';
import { PluginsComponent } from '../pages/plugins/plugins.component';
import { SharedModule } from './shared.module';
import { PlotComponent } from '../pages/plugins/pages/plot/plot.component';
import { EnchantmentsComponent } from '../pages/plugins/pages/enchantments/enchantments.component';


@NgModule({
  declarations: [
    PluginsComponent,
    PlotComponent,
    EnchantmentsComponent,
  ],
  imports: [
    CommonModule,
    PluginsRoutingModule,
    SharedModule
  ]
})
export class PluginsModule { }
