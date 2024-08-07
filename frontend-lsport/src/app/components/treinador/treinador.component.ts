import { Component } from '@angular/core';
import {UtilizadorService} from "../../services/utilizador/utilizador.service";
import {TreinadorService} from "../../services/treinador/treinador.service";
import {MediaService} from "../../services/media/media.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {Treinador} from "../../entity/Treinador";

@Component({
  selector: 'app-treinador',
  templateUrl: './treinador.component.html',
  styleUrl: './treinador.component.css'
})
export class TreinadorComponent {
  treinadores:Treinador[]=[];
  img:any="";

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
          this.img = this.sanitizer.bypassSecurityTrustUrl(url);
        })
      })
    });
  }
}
