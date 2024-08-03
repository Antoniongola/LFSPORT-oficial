import {Component, OnInit} from '@angular/core';
import {UtilizadorService} from "../../services/utilizador/utilizador.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  constructor(private route:Router,
              private userService:UtilizadorService){
  }

  ngOnInit() {
    if(!this.userService.isLoggedIn())
      this.route.navigate(['']);
  }
}
