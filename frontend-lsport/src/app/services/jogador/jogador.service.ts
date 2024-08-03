import { Injectable } from '@angular/core';
import {Jogador} from "../../entities/Jogador";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environments} from "../../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class JogadorService {
  private baseUrl = environments.apiUrl+'/jogador';

  constructor(private http: HttpClient) {}

  newJogador(jogador: Jogador): Observable<Jogador> {
    return this.http.post<Jogador>(`${this.baseUrl}`, jogador);
  }

  getJogador(id: number): Observable<Jogador> {
    return this.http.get<Jogador>(`${this.baseUrl}/${id}`);
  }

  getAllJogadores(): Observable<Jogador[]> {
    return this.http.get<Jogador[]>(`${this.baseUrl}`);
  }

  updateJogador(jogador: Jogador, id: number): Observable<Jogador> {
    return this.http.put<Jogador>(`${this.baseUrl}/${id}`, jogador);
  }

  deleteJogador(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
