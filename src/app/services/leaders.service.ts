import { Injectable } from '@angular/core';
import { SERVER_IP, MCMMO_API_PORT } from '../helpers/constants';
import { McmmoPlayer } from '../models/mcmmo-player';
import { McmmoData } from '../models/mcmmo-data';

@Injectable({
  providedIn: 'root'
})
export class LeadersService {

  constructor() { }

  public getServerStatus(): Promise<McmmoData> {
    return fetch(`https://api.allorigins.win/raw?url=http://${SERVER_IP}:${MCMMO_API_PORT}`)
      .then(response => response.json())
      .then(data => {
        data.players = data.players.map((r: any) => new McmmoPlayer(r));
        data.date = new Date(data.date);
        return data;
      });
  }
}
