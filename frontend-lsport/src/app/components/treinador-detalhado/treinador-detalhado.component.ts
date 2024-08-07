import {Component, OnInit} from '@angular/core';
import {Treinador} from "../../entity/Treinador";
import {TreinadorService} from "../../services/treinador/treinador.service";
import {MediaService} from "../../services/media/media.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-treinador-detalhado',
  templateUrl: './treinador-detalhado.component.html',
  styleUrl: './treinador-detalhado.component.css'
})
export class TreinadorDetalhadoComponent implements OnInit{
  id:any="";
  treinador!:Treinador;
  img:any="";

  constructor(private treinadorService:TreinadorService,
              private mediaService:MediaService,
              private route:ActivatedRoute,
              private sanitizer:DomSanitizer) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(response=>{
      this.id = response.get('treinadorId');
      this.treinadorService.getTreinador(this.id).subscribe(response=>{
        this.treinador = response;
        this.mediaService.getImage(this.treinador.photoPath).subscribe(response=>{
          const url = URL.createObjectURL(response);
          this.img = this.sanitizer.bypassSecurityTrustUrl(url);
        })
      })
    });
  }
}
