import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-game-init',
  templateUrl: './game-init.component.html',
  styleUrls: ['./game-init.component.css']
})
export class GameInitComponent implements OnInit {

  playernumberlist = [2, 3, 4, 5, 6, 7, 8];
  selectedPlayernumber = 3;

  players: Player[];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    let i=0;
    while( i++ < this.selectedPlayernumber){
      this.playerService.generatePlayer();
    }
    this.players = this.playerService.players;
  }

  onSelectPlayernumber(playernumber: number): void {
    this.selectedPlayernumber = playernumber;
  }

}
