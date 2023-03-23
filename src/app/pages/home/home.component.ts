import { Component, OnDestroy, OnInit } from '@angular/core';
import { SERVER_ADDRESS } from 'src/app/helpers/constants';
import { ServerStatusService } from 'src/app/services/server-status.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  serverAdress: string = SERVER_ADDRESS;
  currentOnline: string = "";
  openDateTime: Date = new Date(Date.UTC(2023, 2, 24, 15));
  openDateTimeText: string = this.openDateTime
    .toLocaleString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    });
  isOpen: boolean = new Date() > this.openDateTime;

  constructor(
    protected serverStatusService: ServerStatusService
  ) { }

  protected timer!: any;
  ngOnInit(): void {
    this.updateCurrentOnline();
    this.timer = setInterval(() => this.updateCurrentOnline(), 60000);
  }

  ngOnDestroy(): void {
    if (this.timer)
      clearInterval(this.timer);
  }

  protected updateCurrentOnline() {
    this.serverStatusService.getServerStatus()
      .then(data => {
        if (data.status == "success" && data.online && data.players)
          this.currentOnline = `${data.players.now} / ${data.players.max}`;
      });
  }

}
