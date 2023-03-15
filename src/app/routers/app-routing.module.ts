import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { MapComponent } from '../pages/map/map.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { RulesComponent } from '../pages/rules/rules.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'plugins', loadChildren: () => import('../modules/plugins.module').then(m => m.PluginsModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
