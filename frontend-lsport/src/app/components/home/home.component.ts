import {Component, OnInit} from '@angular/core';
import {UtilizadorService} from "../../services/utilizador/utilizador.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private userService:UtilizadorService,
              private route:Router) {
  }

  ngOnInit() {
    if(this.userService.isLoggedIn())
      this.route.navigate(['dashboard'])
  }
}
