import {Component, OnInit} from '@angular/core';
import {Jogador} from "../../entities/Jogador";
import {JogadorService} from "../../services/jogador/jogador.service";

@Component({
  selector: 'app-dashboard-jogadores',
  templateUrl: './dashboard-jogadores.component.html',
  styleUrl: './dashboard-jogadores.component.css'
})
export class DashboardJogadoresComponent implements OnInit{
  jogadores:Jogador[]=[];


  constructor(private jogadorService:JogadorService) {
  }

  ngOnInit() {
    this.jogadorService.getAllJogadores().subscribe(response=>{
      this.jogadores = response;
    });
  }

  editItem(item:Jogador){

  }

  deleteItem(item:Jogador){
    this.jogadorService.deleteJogador(item.id).subscribe(response=>{
      alert('O jogador '+item.nome+' e todas intermediações do jogador foram removidas com sucesso');
    });
  }
}
