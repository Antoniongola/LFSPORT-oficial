import { Injectable } from '@angular/core';
import {Utilizador} from "../../entities/Utilizador";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environments} from "../../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class UtilizadorService {
  private baseUrl = environments.apiUrl+'/utilizador';

  constructor(private http: HttpClient) {}

  isLoggedIn():boolean{
    if(this.getUsername()!='')
      return true;

    return false;
  }

  saveUsername(username:string){
    localStorage.setItem('username', username);
  }

  getUsername():string{
    if(localStorage.getItem('username') != null)
      return localStorage.getItem('username');

    return '';
  }

  logout(){
    localStorage.setItem('username', '');
  }

  updateUtilizador(utilizador: Utilizador, id: number): Observable<Utilizador> {
    return this.http.put<Utilizador>(`${this.baseUrl}/${id}`, utilizador);
  }

  login(utilizador: Utilizador): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/login`, utilizador);
  }
}
