import {Component, OnInit} from '@angular/core';
import {JogadorService} from "../../services/jogador/jogador.service";

@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrl: './jogador.component.css'
})
export class JogadorComponent implements OnInit{
  id:number=10;
  jogadores:any[]=['', '', '', '', '', '', ''];

  constructor(private jogadorService:JogadorService) {
  }

  ngOnInit() {
  }
}
