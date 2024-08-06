import {Component, OnInit} from '@angular/core';
import {UtilizadorService} from "../../services/utilizador/utilizador.service";
import {Router} from "@angular/router";
import {Intermediacao} from "../../entities/Intermediacao";
import {IntermediacaoService} from "../../services/intermediacao/intermediacao.service";
import {MediaService} from "../../services/media/media.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-intermediacoes',
  templateUrl: './intermediacoes.component.html',
  styleUrl: './intermediacoes.component.css'
})
export class IntermediacoesComponent implements OnInit{
  items:Intermediacao[]=[];
  imgSrcs: { [key: string]: any } = {}
  listaDeAnos:number[]=[];
  constructor(private userService:UtilizadorService,
              private intermediacaoService:IntermediacaoService,
              private mediaService:MediaService,
              private sanitizer:DomSanitizer,
              private route:Router) {
  }

  sortDescending(arr: number[]): number[] {
    return arr.sort((a, b) => b - a);
  }

  ngOnInit() {
    if(this.userService.isLoggedIn())
      this.route.navigate(['dashboard'])

    let novaLista:number[]=[];

    this.intermediacaoService.getAllIntermediacoes().subscribe(response=>{
      this.items=response;
      response.forEach(intermediacao=>{
        if(!novaLista.includes(intermediacao.anoIntermediacao))
          novaLista.push(intermediacao.anoIntermediacao);

        this.mediaService.getImage(intermediacao.photoPath).subscribe(response=>{
          const url = URL.createObjectURL(response);
          this.imgSrcs[intermediacao.id] = this.sanitizer.bypassSecurityTrustUrl(url);
        });
      });
    });

    this.listaDeAnos = this.sortDescending(novaLista);

  }


}
