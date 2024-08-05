import { Injectable } from '@angular/core';
import {Treinador} from "../../entities/Treinador";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environments} from "../../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class TreinadorService {
  private baseUrl = environments.apiUrl+'/treinador';

  constructor(private http: HttpClient) {}

  newTreinador(treinador: Treinador): Observable<Treinador> {
    return this.http.post<Treinador>(`${this.baseUrl}`, treinador);
  }

  getTreinador(id: number): Observable<Treinador> {
    return this.http.get<Treinador>(`${this.baseUrl}/${id}`);
  }

  getAllTreinadores(): Observable<Treinador[]> {
    return this.http.get<Treinador[]>(`${this.baseUrl}`);
  }

  updateTreinador(treinador: Treinador, id: number): Observable<Treinador> {
    return this.http.put<Treinador>(`${this.baseUrl}/${id}`, treinador);
  }

  deleteTreinador(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
