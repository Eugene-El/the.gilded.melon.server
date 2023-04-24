import { Component, Input } from '@angular/core';

@Component({
  selector: 'gms-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {

  @Input() link: string = "";
  @Input() showIcon: boolean = true;
  @Input() active: boolean = false;

}
