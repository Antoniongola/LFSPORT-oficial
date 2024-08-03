import { Injectable } from '@angular/core';
import {Intermediacao} from "../../entities/Intermediacao";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environments} from "../../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class IntermediacaoService {
  private baseUrl = environments.apiUrl+'/intermediacao';

  constructor(private http: HttpClient) {}

  newIntermediacao(intermediacao: Intermediacao): Observable<Intermediacao> {
    return this.http.post<Intermediacao>(`${this.baseUrl}`, intermediacao);
  }

  getIntermediacao(id: number): Observable<Intermediacao> {
    return this.http.get<Intermediacao>(`${this.baseUrl}/${id}`);
  }

  getAllIntermediacoes(): Observable<Intermediacao[]> {
    return this.http.get<Intermediacao[]>(`${this.baseUrl}`);
  }

  getPlayerIntermediacoes(id: number): Observable<Intermediacao[]> {
    return this.http.get<Intermediacao[]>(`${this.baseUrl}/jogador/${id}`);
  }

  updateIntermediacao(intermediacao: Intermediacao, id: number): Observable<Intermediacao> {
    return this.http.put<Intermediacao>(`${this.baseUrl}/${id}`, intermediacao);
  }

  deleteIntermediacao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
