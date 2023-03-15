import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gms-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.css']
})
export class CopyComponent {

  @ViewChild('content') content!: ElementRef;
  showTooltip: boolean = false;

  public copy() {
    const text = this.content?.nativeElement?.innerText ??
      "Seems your browser have problems with clipboard API";
    navigator.clipboard.writeText(text)
      .then(() => {
        this.showTooltip = true;
        setTimeout(() => {
          this.showTooltip = false;
        }, 3000);
      })
      .catch(e => console.error(e));
  }
}
