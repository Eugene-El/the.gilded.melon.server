import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnchantmentsComponent } from '../pages/plugins/pages/enchantments/enchantments.component';
import { PlotComponent } from '../pages/plugins/pages/plot/plot.component';
import { PluginsComponent } from '../pages/plugins/plugins.component';

const routes: Routes = [
  { path: '', component: PluginsComponent },
  { path: 'plot', component: PlotComponent },
  { path: 'enchantments', component: EnchantmentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PluginsRoutingModule { }
