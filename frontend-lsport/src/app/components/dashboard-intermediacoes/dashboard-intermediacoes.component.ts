import {Component, OnInit} from '@angular/core';
import {IntermediacaoService} from "../../services/intermediacao/intermediacao.service";

@Component({
  selector: 'app-dashboard-intermediacoes',
  templateUrl: './dashboard-intermediacoes.component.html',
  styleUrl: './dashboard-intermediacoes.component.css'
})
export class DashboardIntermediacoesComponent implements OnInit{
  intermediacoes:any[]=['', '', '', '', ''];
  constructor(private intermediacaoService:IntermediacaoService){

  }

  ngOnInit() {

  }

  deleteItem(id:any){
    this.intermediacaoService.deleteIntermediacao(id);
  }
}
