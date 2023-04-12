import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MOUSE_TOOLTIP_MSG } from './helpers/events';

@Component({
  selector: 'gms-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  
  @ViewChild('mouseTooltip') mouseTooltip!: ElementRef;
  
  tooltipContent: string = "";

  constructor() {
    MOUSE_TOOLTIP_MSG.subscribe(message =>
      this.tooltipContent = message);
  }

  @HostListener("mousemove", ["$event"])
  mouseMove(e: MouseEvent) {
    if (e && this.mouseTooltip) {
      this.mouseTooltip.nativeElement.style.left = `${e.pageX + 20}px`;
      this.mouseTooltip.nativeElement.style.top = `${e.pageY + 4}px`;
    }
  }

}
