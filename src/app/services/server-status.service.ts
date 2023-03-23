import { Injectable } from '@angular/core';
import { SERVER_IP, SERVER_PORT } from '../helpers/constants';
import { ServerInfo } from '../models/server-info';

@Injectable({
  providedIn: 'root'
})
export class ServerStatusService {

  constructor() { }

  public getServerStatus(): Promise<ServerInfo> {
    return fetch(`https://mcapi.us/server/status?ip=${SERVER_IP}&port=${SERVER_PORT}`)
      .then(response => response.json());
  }
}
