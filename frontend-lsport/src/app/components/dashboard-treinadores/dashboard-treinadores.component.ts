import {Component, OnInit} from '@angular/core';
import {TreinadorService} from "../../services/treinador/treinador.service";

@Component({
  selector: 'app-dashboard-treinadores',
  templateUrl: './dashboard-treinadores.component.html',
  styleUrl: './dashboard-treinadores.component.css'
})
export class DashboardTreinadoresComponent implements OnInit{
  treinadores:any[]=['Guardiola', 'Klopp', 'Mourinho', 'Tuchel', 'Ancelotti'];
  constructor(private treinadorService:TreinadorService) {
  }

  ngOnInit() {
  }

  editItem(item:any){

  }

  deleteItem(item:any){
    this.treinadorService.deleteTreinador(item);
  }
}
