import { Injectable } from '@angular/core';
import {Treinador} from "../../entity/Treinador";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environments} from "../../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class TreinadorService {
  private baseUrl = environments.apiUrl+'/treinador';

  constructor(private http: HttpClient) {}

  newTreinador(treinador: Treinador, image:File): Observable<Treinador> {
    const formData: FormData = new FormData();
    formData.append('treinador', new Blob([JSON.stringify(treinador)], {type:'application/json'}));
    formData.append('image', image);
    return this.http.post<Treinador>(`${this.baseUrl}`, formData);
  }

  getTreinador(id: number): Observable<Treinador> {
    return this.http.get<Treinador>(`${this.baseUrl}/${id}`);
  }

  getAllTreinadores(): Observable<Treinador[]> {
    return this.http.get<Treinador[]>(`${this.baseUrl}`);
  }

  updateTreinador(treinador: Treinador, id: number, image:File): Observable<Treinador> {
    const formData: FormData = new FormData();
    formData.append('treinador', new Blob([JSON.stringify(treinador)], {type:'application/json'}));
    formData.append('image', image);
    return this.http.put<Treinador>(`${this.baseUrl}/${id}`, formData);
  }

  deleteTreinador(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
