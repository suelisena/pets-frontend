import { Pets } from './../model/pets';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PetsService {

  private baseURL = "http://localhost:8090/api/pets";


  constructor(private httpClient: HttpClient) { }

  getPetsList(): Observable<Pets[]>{
    return this.httpClient.get<Pets[]>(`${this.baseURL}`);
  }

  getAllPets(): Observable<Pets[]>{
    return this.httpClient.get<Pets[]>(`${this.baseURL}`);
  }

  createPets(pets: Pets): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, pets);
  }

  getPetsById(id: number): Observable<Pets[]>{
    return this.httpClient.get<Pets[]>(`${this.baseURL}/${id}`);
  }

  updatePets(id: number, pets: Pets): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, pets);
  }

  deletePets(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`,{ responseType: 'text' });
  }

}
