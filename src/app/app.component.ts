import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MOUSE_TOOLTIP_MSG } from './helpers/events';

@Component({
  selector: 'gms-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  
  @ViewChild('mouseTooltip') mouseTooltip!: ElementRef;
  @ViewChild('mouseTooltipContent') mouseTooltipContent!: ElementRef;
  
  tooltipContent: string = "";

  constructor() {
    MOUSE_TOOLTIP_MSG.subscribe(message =>
      this.tooltipContent = message);
  }

  @HostListener("mousemove", ["$event"])
  mouseMove(e: MouseEvent) {
    if (e && this.mouseTooltip) {
      const widthDiff = document.body.scrollWidth - (e.pageX + 48 + (this.mouseTooltipContent ? this.mouseTooltipContent.nativeElement.offsetWidth : 0));
      this.mouseTooltip.nativeElement.style.left = `${e.pageX + 20 + (widthDiff < 0 ? widthDiff : 0)}px`;
      const heightDiff = document.body.scrollHeight - (e.pageY + 42 + (this.mouseTooltipContent ? this.mouseTooltipContent.nativeElement.offsetHeight : 0));
      this.mouseTooltip.nativeElement.style.top = `${e.pageY + 20 + (heightDiff < 0 ? heightDiff : 0)}px`;
    }
  }

}
