import {Component, OnInit} from '@angular/core';
import {Utilizador} from "../../entity/Utilizador";
import {UtilizadorService} from "../../services/utilizador/utilizador.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrl: './sobre-nos.component.css'
})
export class SobreNosComponent implements OnInit{
  constructor(private userService:UtilizadorService,
              private route:Router) {
  }

  ngOnInit() {
    if(this.userService.isLoggedIn())
      this.route.navigate(['dashboard'])
  }
}
