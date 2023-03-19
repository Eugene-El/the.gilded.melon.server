import { Component } from '@angular/core';

@Component({
  selector: 'gms-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  protected key: string = "not-pixel";

  public year: number = new Date().getFullYear();

  constructor() {
    this.readAndSelectFont();
  }

  public changeFont(): void {
    this.invertValue();
    this.readAndSelectFont();
  }

  protected invertValue(): void {
    const value = localStorage.getItem(this.key) === "true";
    localStorage.setItem("not-pixel", (!value).toString());
  }

  protected readAndSelectFont(): void {
    const value = localStorage.getItem(this.key) === "true";
    if (value)
      document.body.classList.add(this.key);
    else
      document.body.classList.remove(this.key);
  }

}
