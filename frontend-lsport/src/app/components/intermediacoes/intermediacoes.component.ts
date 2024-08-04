import {Component, OnInit} from '@angular/core';
import {UtilizadorService} from "../../services/utilizador/utilizador.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-intermediacoes',
  templateUrl: './intermediacoes.component.html',
  styleUrl: './intermediacoes.component.css'
})
export class IntermediacoesComponent implements OnInit{
  items:any[]=['intermediação', 'intermediação', 'intermediação', 'intermediação',
    'intermediação', 'intermediação', 'intermediação'];
  constructor(private userService:UtilizadorService,
              private route:Router) {
  }

  ngOnInit() {
    if(this.userService.isLoggedIn())
      this.route.navigate(['dashboard'])
  }
}
