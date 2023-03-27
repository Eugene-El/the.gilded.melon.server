import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PluginsRoutingModule } from '../routers/plugins-routing.module';
import { PluginsComponent } from '../pages/plugins/plugins.component';
import { SharedModule } from './shared.module';
import { PlotComponent } from '../pages/plugins/pages/plot/plot.component';
import { EnchantmentsComponent } from '../pages/plugins/pages/enchantments/enchantments.component';
import { EmoteCraftComponent } from '../pages/plugins/pages/emote-craft/emote-craft.component';
import { ColorsComponent } from '../pages/plugins/pages/colors/colors.component';
import { SkipComponent } from '../pages/plugins/pages/skip/skip.component';
import { McmmoComponent } from '../pages/plugins/pages/mcmmo/mcmmo.component';
import { LiftComponent } from '../pages/plugins/pages/lift/lift.component';
import { AutocraftComponent } from '../pages/plugins/pages/autocraft/autocraft.component';
import { AutosorterComponent } from '../pages/plugins/pages/autosorter/autosorter.component';


@NgModule({
  declarations: [
    PluginsComponent,
    PlotComponent,
    EnchantmentsComponent,
    EmoteCraftComponent,
    ColorsComponent,
    SkipComponent,
    McmmoComponent,
    LiftComponent,
    AutocraftComponent,
    AutosorterComponent,
  ],
  imports: [
    CommonModule,
    PluginsRoutingModule,
    SharedModule
  ]
})
export class PluginsModule { }
