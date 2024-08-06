import {Component, OnInit} from '@angular/core';
import {IntermediacaoService} from "../../services/intermediacao/intermediacao.service";
import {Intermediacao} from "../../entities/Intermediacao";

@Component({
  selector: 'app-dashboard-intermediacoes',
  templateUrl: './dashboard-intermediacoes.component.html',
  styleUrl: './dashboard-intermediacoes.component.css'
})
export class DashboardIntermediacoesComponent implements OnInit{
  intermediacoes:Intermediacao[]=[];
  constructor(private intermediacaoService:IntermediacaoService){

  }

  ngOnInit() {
    this.intermediacaoService.getAllIntermediacoes().subscribe(response=>{
      this.intermediacoes = response;
    })
  }

  deleteItem(id:any){
    this.intermediacaoService.deleteIntermediacao(id).subscribe(response=>{
      alert('INTERMEDIAÇÃO APAGADA COM SUCESSO!');
      window.location.reload();
    });
  }
}
