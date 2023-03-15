import { Component, Input } from '@angular/core';

@Component({
  selector: 'gms-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {

  @Input() type: "melon" | "book" = "melon";
  @Input() glow: boolean = false;

}
