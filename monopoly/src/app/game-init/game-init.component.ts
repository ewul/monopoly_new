import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import { PlayerService } from '../player.service';

@Component({
  selector: 'app-game-init',
  templateUrl: './game-init.component.html',
  styleUrls: [
    './game-init.component.css'
  ]
})
export class GameInitComponent implements OnInit {

  playernumberlist: string[] = ['2', '3', '4', '5', '6', '7', '8'];
  selectedPlayernumber: string;

  nameFormControl = new FormControl('', [
    Validators.required
  ])

  constructor(
    public playerService: PlayerService
  ) {
    this.selectedPlayernumber = String(playerService.players.length);
  }

  ngOnInit(): void {

  }

  onSelectPlayernumber(playernumber: string): void {
    this.selectedPlayernumber = playernumber;
    this.playerService.changePlayerNumberTo(parseInt(playernumber));
  }

}
