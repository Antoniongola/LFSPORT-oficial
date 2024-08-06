import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environments} from "../../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private baseUrl = environments.apiUrl+'/media';

  constructor(private http: HttpClient) { }

  getImage(imageName: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/image/${imageName}`, { responseType: 'blob' });
  }
}
