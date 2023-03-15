import { Component, Input } from '@angular/core';

@Component({
  selector: 'gms-gilded-blackstone',
  templateUrl: './gilded-blackstone.component.html',
  styleUrls: ['./gilded-blackstone.component.css']
})
export class GildedBlackstoneComponent {

  @Input() active: boolean = false;

}
