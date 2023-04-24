import { Component } from '@angular/core';
import { MOUSE_TOOLTIP_MSG } from 'src/app/helpers/events';
import { McmmoPlayer } from 'src/app/models/mcmmo-player';
import { LeadersService } from 'src/app/services/leaders.service';

type LevelSelect = (p: McmmoPlayer) => number;
type Skill = {
  name: string;
  sort: LevelSelect;
};

@Component({
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
})
export class LeadersComponent {

  isLoading: boolean = false;
  isError: boolean = false;
  lastUpdate: string = "";
  data: McmmoPlayer[] = [];
  skills: Skill[] = [
    { name: "Power level (Сумарный уровень)", sort: (p) => p.totalPowerLevel },
    { name: "Mining (Горное дело)", sort: (p) => p.mining },
    { name: "Woodcutting (Лесозаготовка)", sort: (p) => p.woodcutting },
    { name: "Herbalism (Травничество)", sort: (p) => p.herbalism },
    { name: "Excavation (Раскопки)", sort: (p) => p.excavation },
    { name: "Fishing (Рыбалка)", sort: (p) => p.fishing },
    { name: "Unarmed (Безоружный бой)", sort: (p) => p.unarmed },
    { name: "Archery (Стрельба)", sort: (p) => p.archery },
    { name: "Swords (Мечи)", sort: (p) => p.swords },
    { name: "Axes (Топоры)", sort: (p) => p.axes },
    { name: "Taming (Укрощение)", sort: (p) => p.taming },
    { name: "Repair (Ремонт)", sort: (p) => p.repair },
    { name: "Acrobatics (Акробатика)", sort: (p) => p.acrobatics },
    { name: "Alchemy (Алхимия)", sort: (p) => p.alchemy },
    { name: "Salvage (Перековка)", sort: (p) => p.salvage },
    { name: "Smelting (Плавка)", sort: (p) => p.smelting }
  ];
  selectedSkill!: Skill;

  constructor(
    protected leadersService: LeadersService
  ) {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    this.isError = false;
    this.resetTooltip();
    this.leadersService.getServerStatus()
      .then((data) => {
        this.data = data.players;
        try
        {
          this.lastUpdate = new Intl.DateTimeFormat("ru", {
            dateStyle: 'long',
            timeStyle: 'medium'
          }).format(data.date);
        } catch (err) { }
        this.selectSkill(this.skills[0]);
        this.isLoading = false;
      })
      .catch(err => {
        console.error(err);
        this.isLoading = false;
        this.isError = true;
      });
  }

  selectSkill(skill: Skill) {
    this.selectedSkill = skill;
    this.sortPlayers(this.selectedSkill.sort);
  }

  sortPlayers(func: LevelSelect) {
    this.data = this.data.sort((p1, p2) => func(p2) - func(p1));
  }

  showLastUpdateTooltip() {
    MOUSE_TOOLTIP_MSG.emit(`
      <small>
        Обновлено:
        <br>${this.lastUpdate}
      </small>`);
  }
  
  showTooltip(player: McmmoPlayer) {
    MOUSE_TOOLTIP_MSG.emit(`
      <div class="header-grid">
        <strong>${player.name}</strong>
        <span>⚡${player.totalPowerLevel}⚡</span>
      </div>
      <hr>⛏️ Mining: ${player.mining}
      <br>🪵 Woodcutting: ${player.woodcutting}
      <br>🌿 Herbalism: ${player.herbalism}
      <br>⚒️ Excavation: ${player.excavation}
      <br>🎣 Fishing: ${player.fishing}
      <hr>💪 Unarmed: ${player.unarmed}
      <br>🏹 Archery: ${player.archery}
      <br>⚔️ Swords: ${player.swords}
      <br>🪓 Axes: ${player.axes}
      <br>🐺 Taming: ${player.taming}
      <hr>🔨 Repair: ${player.repair}
      <br>🏃 Acrobatics: ${player.acrobatics}
      <br>🍺 Alchemy: ${player.alchemy}
      <br>♻️ Salvage: ${player.salvage}
      <br>🔥 Smelting: ${player.smelting}
    `);
  }

  resetTooltip() {
    MOUSE_TOOLTIP_MSG.emit("");
  }

}
