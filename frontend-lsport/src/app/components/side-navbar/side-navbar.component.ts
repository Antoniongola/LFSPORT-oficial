import { Component } from '@angular/core';
import {Utilizador} from "../../entity/Utilizador";
import {UtilizadorService} from "../../services/utilizador/utilizador.service";

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css'
})
export class SideNavbarComponent {
  constructor(private userService:UtilizadorService) {
  }

  logOut(){
    this.userService.logout();
  }
}
