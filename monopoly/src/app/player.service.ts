import { Injectable } from '@angular/core';
import { Player } from './player';
import { IdService } from './id.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players: Player[];

  constructor(
    private idService: IdService
  ) {
    this.players = [
      new Player(idService.generate(), 'Ma', 'fuchsia'),
      new Player(idService.generate(), 'Tang', 'orange'),
      new Player(idService.generate(), 'Pa', 'navy')
    ];
  }

  changePlayerNumberTo(playerNumber: number) {
    if (this.players.length >= playerNumber) {
      this.players = this.players.slice(0, playerNumber);
    }
    else {
      for (let i = this.players.length+1; i < playerNumber+1; i++) {
        this.players.push(new Player(this.idService.generate(), 'Player' + i, 'yellow'));
        console.log(i);
      }
    }
  }
}
