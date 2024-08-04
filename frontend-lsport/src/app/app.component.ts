import {Component, OnInit} from '@angular/core';
import {UtilizadorService} from "./services/utilizador/utilizador.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  isLoggedIn:boolean=false;
  constructor(private userService:UtilizadorService,
              private route:Router) {
  }

  ngOnInit() {
    if(this.userService.isLoggedIn()){
      this.isLoggedIn = true;
    }
  }
}
