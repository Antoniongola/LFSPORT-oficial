import {Component, OnInit} from '@angular/core';
import {IntermediacaoService} from "../../services/intermediacao/intermediacao.service";
import {Intermediacao} from "../../entity/Intermediacao";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-intermediacoes',
  templateUrl: './dashboard-intermediacoes.component.html',
  styleUrl: './dashboard-intermediacoes.component.css'
})
export class DashboardIntermediacoesComponent implements OnInit{
  intermediacoes:Intermediacao[]=[];
  constructor(private intermediacaoService:IntermediacaoService,
              private route:Router){

  }

  ngOnInit() {
    this.intermediacaoService.getAllIntermediacoes().subscribe(response=>{
      this.intermediacoes = response;
    })
  }

  editItem(item:any){
    this.route.navigate(['/'+'dashboard/edit/intermediacao/'+item.id]);
  }

  deleteItem(id:any){
    this.intermediacaoService.deleteIntermediacao(id).subscribe(response=>{
      alert('INTERMEDIAÇÃO APAGADA COM SUCESSO!');
      window.location.reload();
    });
  }
}
