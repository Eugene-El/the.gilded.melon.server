import { PlayerCount } from "./player-count";

export interface ServerInfo {

    players: PlayerCount;
    online: boolean;
    status: string;

}