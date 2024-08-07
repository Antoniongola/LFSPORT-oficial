import { Injectable } from '@angular/core';
import {Utilizador} from "../../entity/Utilizador";
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
    return this.getUsername() != '' && this.getUsername() != null;
  }

  saveUsername(username:string){
    localStorage.setItem('username', username);
  }

  getUsername():string|null{
    return localStorage.getItem('username');
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
