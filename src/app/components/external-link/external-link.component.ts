import { Component, Input } from '@angular/core';

@Component({
  selector: 'gms-external-link',
  templateUrl: './external-link.component.html',
  styleUrls: ['./external-link.component.css']
})
export class ExternalLink {

  @Input() link: string = "";
  @Input() showIcon: boolean = true;
  @Input() active: boolean = false;

}
