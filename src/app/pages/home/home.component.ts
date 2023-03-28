import { Component, OnDestroy, OnInit } from '@angular/core';
import { SERVER_ADDRESS } from 'src/app/helpers/constants';
import { MOUSE_TOOLTIP_MSG } from 'src/app/helpers/events';
import { ServerStatusService } from 'src/app/services/server-status.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  serverAdress: string = SERVER_ADDRESS;
  currentOnline: string = "";
  currentPlayers: string[] = [];

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
          this.currentPlayers = data.players.sample.map(s => s.name) ?? [];
      });
  }

  showTooltip() {
    MOUSE_TOOLTIP_MSG.emit(this.currentPlayers.join("<br/>"));
  }

  resetTooltip() {
    MOUSE_TOOLTIP_MSG.emit("");
  }
}
