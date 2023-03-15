import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from '../components/features/features.component';
import { IconComponent } from '../components/icon/icon.component';
import { CopyComponent } from '../components/copy/copy.component';
import { TooltipComponent } from '../components/tooltip/tooltip.component';
import { GildedBlackstoneComponent } from '../components/gilded-blackstone/gilded-blackstone.component';
import { LinkComponent } from '../components/link/link.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FeaturesComponent,
    IconComponent,
    CopyComponent,
    TooltipComponent,
    GildedBlackstoneComponent,
    LinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FeaturesComponent,
    IconComponent,
    CopyComponent,
    TooltipComponent,
    GildedBlackstoneComponent,
    LinkComponent
  ]
})
export class SharedModule { }
