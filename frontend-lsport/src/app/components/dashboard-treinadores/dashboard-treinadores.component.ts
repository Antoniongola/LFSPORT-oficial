import {Component, OnInit} from '@angular/core';
import {TreinadorService} from "../../services/treinador/treinador.service";
import {Treinador} from "../../entity/Treinador";

@Component({
  selector: 'app-dashboard-treinadores',
  templateUrl: './dashboard-treinadores.component.html',
  styleUrl: './dashboard-treinadores.component.css'
})
export class DashboardTreinadoresComponent implements OnInit{
  treinadores:Treinador[]=[];
  constructor(private treinadorService:TreinadorService) {
  }

  ngOnInit() {
    this.treinadorService.getAllTreinadores().subscribe(response=>{
      this.treinadores=response;
    });
  }

  deleteItem(item:Treinador){
    this.treinadorService.deleteTreinador(item.id).subscribe(response=>{
      alert('TREINADOR APAGADO COM SUCESSO!');
      window.location.reload();
    });
  }
}
