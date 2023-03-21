import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlotComponent } from '../pages/plugins/pages/plot/plot.component';
import { PluginsComponent } from '../pages/plugins/plugins.component';

const routes: Routes = [
  { path: '', component: PluginsComponent },
  { path: 'plot', component: PlotComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PluginsRoutingModule { }
