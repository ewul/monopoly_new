import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players: Player[];

  constructor() {
    this.players = [];
  }

  generatePlayer(){
    let player = new Player();
    player.name = "test";
    this.players.push(player);
  }

}
