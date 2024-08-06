import {Component, OnInit} from '@angular/core';
import {UtilizadorService} from "../../services/utilizador/utilizador.service";
import {Router} from "@angular/router";
import {Treinador} from "../../entities/Treinador";
import {TreinadorService} from "../../services/treinador/treinador.service";
import {MediaService} from "../../services/media/media.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-treinadores',
  templateUrl: './treinadores.component.html',
  styleUrl: './treinadores.component.css'
})
export class TreinadoresComponent implements OnInit{
  treinadores:Treinador[]=[];
  imgSrcs: { [key: string]: any } = {}

  constructor(private userService:UtilizadorService,
              private treinadorService:TreinadorService,
              private mediaService:MediaService,
              private sanitizer:DomSanitizer,
              private route:Router) {
  }

  ngOnInit() {
    if(this.userService.isLoggedIn())
      this.route.navigate(['dashboard'])

    this.treinadorService.getAllTreinadores().subscribe(response=>{
      this.treinadores = response;
      response.forEach(treinador=>{
        this.mediaService.getImage(treinador.photoPath).subscribe(response=>{
          const url = URL.createObjectURL(response);
          this.imgSrcs[treinador.id] = this.sanitizer.bypassSecurityTrustUrl(url);
        });
      });
    });
  }
}
