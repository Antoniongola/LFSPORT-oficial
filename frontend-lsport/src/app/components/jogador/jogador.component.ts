import {Component, OnInit} from '@angular/core';
import {JogadorService} from "../../services/jogador/jogador.service";
import {Jogador} from "../../entity/Jogador";
import {MediaService} from "../../services/media/media.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrl: './jogador.component.css'
})
export class JogadorComponent implements OnInit{
  id:number=10;
  jogadores:Jogador[]=[];
  imgSrcs: { [key: string]: any } = {}

  constructor(private jogadorService:JogadorService,
              private mediaService:MediaService,
              private sanitizer:DomSanitizer) {

  }

  ngOnInit() {
    this.jogadorService.getAllJogadores().subscribe(response=>{
      this.jogadores=response;
      response.forEach(jogador=>{
        this.mediaService.getImage(jogador.photoPath).subscribe(response=>{
          const url = URL.createObjectURL(response);
          this.imgSrcs[jogador.id] = this.sanitizer.bypassSecurityTrustUrl(url);
        });
      });
    });
  }
}
