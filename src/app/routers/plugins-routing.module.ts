import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import openExternalUrl from '../helpers/openExternalUrl';
import { AutocraftComponent } from '../pages/plugins/pages/autocraft/autocraft.component';
import { AutosorterComponent } from '../pages/plugins/pages/autosorter/autosorter.component';
import { ColorsComponent } from '../pages/plugins/pages/colors/colors.component';
import { EmoteCraftComponent } from '../pages/plugins/pages/emote-craft/emote-craft.component';
import { EnchantmentsComponent } from '../pages/plugins/pages/enchantments/enchantments.component';
import { LiftComponent } from '../pages/plugins/pages/lift/lift.component';
import { McmmoComponent } from '../pages/plugins/pages/mcmmo/mcmmo.component';
import { PlotComponent } from '../pages/plugins/pages/plot/plot.component';
import { SkipComponent } from '../pages/plugins/pages/skip/skip.component';
import { PluginsComponent } from '../pages/plugins/plugins.component';

const routes: Routes = [
  { path: '', component: PluginsComponent },
  { path: 'mcmmo', component: McmmoComponent },
  { path: 'plot', component: PlotComponent },
  { path: 'enchantments', component: EnchantmentsComponent },
  { path: 'emote-craft', component: EmoteCraftComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'skip', component: SkipComponent },
  { path: 'lift', component: LiftComponent },
  { path: 'autocraft', component: AutocraftComponent },
  { path: 'autosorter', component: AutosorterComponent },
  { path: 'emote-craft-fabric', loadChildren: () => new Promise(() => openExternalUrl("https://www.curseforge.com/minecraft/mc-mods/emotecraft/files/4173793")) },
  { path: 'emote-craft-forge', loadChildren: () => new Promise(() => openExternalUrl("https://www.curseforge.com/minecraft/mc-mods/emotecraft-forge/files/4173794")) },
  { path: 'mcmmo-wiki', loadChildren: () => new Promise(() => openExternalUrl("https://mcmmo.fandom.com/wiki/McMMO_Wiki")) },
  { path: 'mcmmo-wiki-ru', loadChildren: () => new Promise(() => openExternalUrl("https://mcmmo.fandom.com/ru/wiki/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B0%D1%8F_McMMO_%D0%B2%D0%B8%D0%BA%D0%B8")) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PluginsRoutingModule { }
