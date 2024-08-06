import {Component, OnInit} from '@angular/core';
import {JogadorService} from "../../services/jogador/jogador.service";
import {MediaService} from "../../services/media/media.service";
import {ActivatedRoute} from "@angular/router";
import {Jogador} from "../../entities/Jogador";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-jogador-detalhado',
  templateUrl: './jogador-detalhado.component.html',
  styleUrl: './jogador-detalhado.component.css'
})
export class JogadorDetalhadoComponent implements OnInit{
  img:any="";
  id:any=0;
  jogador!:Jogador;

  constructor(private jogadorService:JogadorService,
              private mediaService:MediaService,
              private route:ActivatedRoute,
              private sanitizer:DomSanitizer) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      response=>{
        this.id = response.get('jogadorId');
      }
    );

    console.log('id do jogador: '+this.id)
    this.jogadorService.getJogador(this.id).subscribe(response=>{
      this.jogador = response;
      this.mediaService.getImage(this.jogador.photoPath).subscribe(response=>{
        const url = URL.createObjectURL(response);
        this.img = this.sanitizer.bypassSecurityTrustUrl(url);
      })
    });
  }
}
