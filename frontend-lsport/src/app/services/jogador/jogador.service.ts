import { Injectable } from '@angular/core';
import {Jogador} from "../../entity/Jogador";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environments} from "../../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class JogadorService {
  private baseUrl = environments.apiUrl+'/jogador';

  constructor(private http: HttpClient) {}

  newJogador(jogador: Jogador, image:File|string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('jogador', new Blob([JSON.stringify(jogador)], {type:'application/json'}));
    formData.append('image', image);

    return this.http.post<Jogador>(`${this.baseUrl}`, formData);
  }

  getJogador(id: number): Observable<Jogador> {
    return this.http.get<Jogador>(`${this.baseUrl}/${id}`);
  }

  getAllJogadores(): Observable<Jogador[]> {
    return this.http.get<Jogador[]>(`${this.baseUrl}`);
  }

  updateJogador(jogador: Jogador, id: number, image:File|string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('jogador', new Blob([JSON.stringify(jogador)], {type:'application/json'}));
    formData.append('image', image);
    return this.http.put<Jogador>(`${this.baseUrl}/${id}`, formData);
  }

  deleteJogador(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
