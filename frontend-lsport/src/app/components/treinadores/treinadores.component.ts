import {Component, OnInit} from '@angular/core';
import {UtilizadorService} from "../../services/utilizador/utilizador.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-treinadores',
  templateUrl: './treinadores.component.html',
  styleUrl: './treinadores.component.css'
})
export class TreinadoresComponent implements OnInit{
  treinadores:any[]=['Guardiola', 'Mourinho', 'Klopp', 'Tuchel', 'Ten Haag'];
  constructor(private userService:UtilizadorService,
              private route:Router) {
  }

  ngOnInit() {
    if(this.userService.isLoggedIn())
      this.route.navigate(['dashboard'])
  }
}
