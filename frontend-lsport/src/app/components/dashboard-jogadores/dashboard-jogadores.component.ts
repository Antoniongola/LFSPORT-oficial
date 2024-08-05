import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-jogadores',
  templateUrl: './dashboard-jogadores.component.html',
  styleUrl: './dashboard-jogadores.component.css'
})
export class DashboardJogadoresComponent implements OnInit{
  jogadores:any[]=['', '', '', '', ''];

  constructor() {
  }

  ngOnInit() {

  }

  editItem(item:any){

  }

  deleteItem(item:any){

  }
}
