import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GentlemanComponent } from '../pages/gentleman/gentleman.component';
import { HomeComponent } from '../pages/home/home.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { RulesComponent } from '../pages/rules/rules.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'gentleman', component: GentlemanComponent },
  { path: 'map', loadChildren: () => new Promise(() => openExternalUrl("http://80.82.222.184:8100/")) },
  { path: 'discord', loadChildren: () => new Promise(() => openExternalUrl("https://discord.gg/sGhxfbxryc")) },
  { path: 'plugins', loadChildren: () => import('../modules/plugins.module').then(m => m.PluginsModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

function openExternalUrl(url: string)
{
  const newWindow = window.open(url, '_blank');
  if (newWindow !== undefined && newWindow !== null) {
    newWindow.focus();
  } else {
    window.location.href = url;
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
