import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from '../models/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private baseUrl = 'http://localhost:8080/trainers';

  constructor(private http: HttpClient) { }

  getTrainer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTrainer(trainer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, trainer);
  }

  // updateTrainer(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${id}`, value);
  // }

  deleteTrainer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getTrainersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
