import {Component, OnInit} from '@angular/core';
import {UtilizadorService} from "../../services/utilizador/utilizador.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.component.html',
  styleUrl: './jogadores.component.css'
})
export class JogadoresComponent implements OnInit{
  constructor(private userService:UtilizadorService,
              private route:Router) {
  }

  ngOnInit() {
    if(this.userService.isLoggedIn())
      this.route.navigate(['dashboard'])
  }
}
